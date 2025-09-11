import { useState, useEffect, useRef } from 'react'
import { ContactSection as ContactSectionType } from '../types'
import { SocialMedia } from './SocialMedia'
import { Button } from './Button'
import { resolveAssetPath } from '../utils'

// Declare global types
declare global {
  interface Window {
    turnstile: {
      render: (element: string | HTMLElement, options: {
        sitekey: string
        callback?: (token: string) => void
        'expired-callback'?: () => void
        'error-callback'?: () => void
      }) => string
      reset: (widgetId: string) => void
      getResponse: (widgetId: string) => string | undefined
    }
    emailjs: {
      init: (publicKey: string) => void
      send: (serviceId: string, templateId: string, templateParams: Record<string, any>) => Promise<any>
    }
  }
}

interface ContactSectionProps {
  contact: ContactSectionType
}

export function ContactSection({ contact }: ContactSectionProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const turnstileRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  // Initialize Turnstile
  useEffect(() => {
    if (!contact.form.turnstile?.siteKey || !turnstileRef.current) return

    const loadTurnstile = () => {
      if (window.turnstile && turnstileRef.current) {
        try {
          widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
            sitekey: contact.form.turnstile!.siteKey,
            callback: (token: string) => {
              console.log('Turnstile token received')
              setTurnstileToken(token)
            },
            'expired-callback': () => {
              console.log('Turnstile token expired')
              setTurnstileToken(null)
            },
            'error-callback': () => {
              console.error('Turnstile error')
              setTurnstileToken(null)
            }
          })
        } catch (error) {
          console.error('Error rendering Turnstile:', error)
        }
      }
    }

    // Check if turnstile is already loaded
    if (window.turnstile) {
      loadTurnstile()
    } else {
      // Wait for script to load
      const checkInterval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(checkInterval)
          loadTurnstile()
        }
      }, 100)

      // Clean up interval after 5 seconds
      setTimeout(() => clearInterval(checkInterval), 5000)
    }
  }, [contact.form.turnstile?.siteKey])

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, '')

    // Don't format if empty
    if (!phoneNumber) return ''

    // Format based on length
    if (phoneNumber.length <= 3) {
      return `(${phoneNumber}`
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(3)}`
    } else {
      return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    let formattedValue = value

    // Format phone numbers based on field name
    if (name.toLowerCase().includes('phone') || name.toLowerCase().includes('telefono') || name.toLowerCase().includes('cel')) {
      formattedValue = formatPhoneNumber(value)
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }))
  }

  // Initialize EmailJS
  useEffect(() => {
    if (contact.form.emailjs?.publicKey && window.emailjs) {
      window.emailjs.init(contact.form.emailjs.publicKey)
      console.log('EmailJS initialized')
    }
  }, [contact.form.emailjs?.publicKey])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    // Check if Turnstile is enabled and token is required
    if (contact.form.turnstile?.siteKey && !turnstileToken) {
      setErrorMessage('Por favor complete la verificación de seguridad')
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    // Debug logging
    console.log('Submitting form data:', formData)
    console.log('EmailJS config:', contact.form.emailjs)
    console.log('Turnstile token:', turnstileToken ? 'Present' : 'Not present')

    try {
      // Check if we're using EmailJS
      if (contact.form.emailjs) {
        // Prepare template parameters for EmailJS
        const templateParams = {
          ...formData,
          time: new Date().toLocaleString('es-MX', { 
            timeZone: 'America/Tijuana',
            dateStyle: 'full',
            timeStyle: 'short'
          }),
          ...(turnstileToken && { 'cf-turnstile-response': turnstileToken })
        }

        console.log('Sending email with params:', templateParams)

        // Send email using EmailJS
        const response = await window.emailjs.send(
          contact.form.emailjs.serviceId,
          contact.form.emailjs.templateId,
          templateParams
        )

        console.log('EmailJS response:', response)

        if (response.status === 200) {
          // Success
          setSubmitStatus('success')
          setFormData({}) // Clear form fields
          
          // Reset Turnstile if it's being used
          if (widgetIdRef.current && window.turnstile) {
            window.turnstile.reset(widgetIdRef.current)
            setTurnstileToken(null)
          }
          
          setTimeout(() => setSubmitStatus('idle'), 5000)
        } else {
          throw new Error('Error al enviar el mensaje')
        }
      } else if (contact.form.formspark) {
        // Legacy Formspark code (kept for backwards compatibility)
        const submitData = {
          ...formData,
          ...(turnstileToken && { 'cf-turnstile-response': turnstileToken })
        }

        const response = await fetch(contact.form.formspark.actionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(submitData),
          redirect: 'manual'
        })

        if (response.type === 'opaqueredirect' || response.status === 0 || response.ok) {
          setSubmitStatus('success')
          setFormData({})
          
          if (widgetIdRef.current && window.turnstile) {
            window.turnstile.reset(widgetIdRef.current)
            setTurnstileToken(null)
          }
          
          setTimeout(() => setSubmitStatus('idle'), 5000)
        } else {
          throw new Error(`Error HTTP ${response.status}`)
        }
      } else {
        throw new Error('No email service configured')
      }

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      if (error instanceof Error) {
        setErrorMessage(error.message || 'Error al enviar el mensaje')
      } else {
        setErrorMessage('Error al enviar el mensaje')
      }
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contacto" className="pt-[5.48rem] pb-[1.62rem] bg-quibo-text flex flex-col">
      <div className="max-w-[80%] mx-auto flex flex-col lg:flex-row gap-[3.7rem] mb-[4.81rem]">
        {/* Form - 70% width */}
        <div className="lg:w-[70%]">
          <h2 className="text-white text-center lg:text-left text-quibo-md font-medium mb-[2.18rem]">
            {contact.title}
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[0.55rem] items-end">
            {contact.form.fields.map((field, index) => (
              <div key={index} className="w-full">
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    placeholder={field.label}
                    required={field.required}
                    rows={4}
                    value={formData[field.name] || ''}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full px-[1.48rem] py-[0.48rem] bg-quibo-input-bg text-white placeholder-white/70 rounded-[0.7rem] border-none focus:outline-none focus:ring-2 focus:ring-quibo-border transition-opacity ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                    }`}
                  />
                ) : (
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.label}
                    required={field.required}
                    value={formData[field.name] || ''}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    {...(field.name.toLowerCase().includes('phone') || field.name.toLowerCase().includes('telefono') || field.name.toLowerCase().includes('cel') ? {
                      inputMode: 'tel' as const,
                      maxLength: 14, // (###)###-####
                      pattern: '\\([0-9]{3}\\)[0-9]{3}-[0-9]{4}',
                      title: 'Formato: (###)###-####'
                    } : {})}
                    className={`w-full px-[1.48rem] py-[0.48rem] bg-quibo-input-bg text-white placeholder-white/70 rounded-[0.7rem] border-none focus:outline-none focus:ring-2 focus:ring-quibo-border transition-opacity ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                    }`}
                  />
                )}
              </div>
            ))}

            {/* Turnstile Widget */}
            {contact.form.turnstile?.siteKey && (
              <div className="w-full flex justify-center mb-[1rem]">
                <div ref={turnstileRef} />
              </div>
            )}

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="w-full text-green-400 text-quibo-xs text-center mb-[0.55rem]">
                ✓ Mensaje enviado
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="w-full text-red-400 text-quibo-xs text-center mb-[0.55rem]">
                ✗ {errorMessage}
              </div>
            )}

            <Button
              text={isSubmitting ? 'Enviando...' : contact.cta}
              type="submit"
              variant="primary"
              className={`px-[2.22rem] transition-all duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed animate-pulse' : 'opacity-100'
              }`}
              disabled={isSubmitting}
              icon={{
                src: resolveAssetPath("/svg/arrow-r.svg"),
                alt: "Arrow",
                className: `w-[2.18rem] h-auto -my-[1rem] transition-transform duration-300 ${
                  isSubmitting ? 'animate-spin' : ''
                }`
              }}
            />
          </form>
        </div>

          {/* Info Panel - 30% width */}
        <div className="lg:w-[30%] flex flex-col items-center">
          {/* Contact Info - Column */}
          <div className="mb-[3.2rem]">
            <h3 className="text-white text-center lg:text-left text-quibo-md font-medium mb-[3.2rem]">
              {contact.info.title}
            </h3>

            <div className="text-white text-quibo-xs text-center lg:text-left">
              <a href={`tel:${contact.info.tel}`} className="block hover:text-quibo-border mb-[1.59rem]">
                {contact.info.tel}
              </a>
              <a href={`mailto:${contact.info.email}`} className="block hover:text-quibo-border mb-[1.59rem]">
                {contact.info.email}
              </a>
              {contact.info.address}
            </div>
          </div>

          {/* Social Icons - Row */}
          <SocialMedia social={contact.info.social} className="justify-center lg:justify-start w-full" />
        </div>
      </div>
      {/* Copyright */}
      <p className="text-white/70 text-quibo-xs mx-[2.77rem] text-center lg:text-left">
        {contact.copyright}
      </p>
    </section>
  )
}
