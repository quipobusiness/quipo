import { useState } from 'react'
import { ContactSection as ContactSectionType } from '../types'
import { SocialMedia } from './SocialMedia'
import { Button } from './Button'
import { resolveAssetPath } from '../utils'

interface ContactSectionProps {
  contact: ContactSectionType
}

export function ContactSection({ contact }: ContactSectionProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch(contact.form.formspark.actionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      // Check if we got a response
      if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}: ${response.statusText}`)
      }

            // Try to parse response body to get more details
      let responseData
      try {
        const responseText = await response.text()

        // Try to parse as JSON first
        try {
          responseData = JSON.parse(responseText)
        } catch {
          // If not JSON, treat as plain text
          responseData = { message: responseText }
        }
      } catch {
        responseData = { message: 'Response received' }
      }

      // Check for common error indicators in response
      const responseStr = JSON.stringify(responseData).toLowerCase()
      if (responseStr.includes('error') || responseStr.includes('fail') || responseStr.includes('invalid')) {
        throw new Error(`Error del servidor: ${responseData.message || 'Error desconocido'}`)
      }

      // Success
      setSubmitStatus('success')
      setFormData({}) // Clear form fields
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)

    } catch (error) {
      setSubmitStatus('error')
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setErrorMessage('Error de conexión. Verifique su internet.')
      } else {
        setErrorMessage(error instanceof Error ? error.message : 'Error al enviar el mensaje')
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
