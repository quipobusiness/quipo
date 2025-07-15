import { useEffect, useRef } from 'react'
import { LandingPageContent } from '../types'
import { Navigation } from './Navigation'
import { HeroSection } from './HeroSection'
import { ContactSection } from './ContactSection'
import { ServiceCta } from './ServiceCTA'

interface LandingPageProps {
  content: LandingPageContent
  children: React.ReactNode[]
}

export function LandingPage({ content }: LandingPageProps) {
  const navRef = useRef<HTMLElement>(null)

  // Set navigation height as CSS custom property
  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight
        document.documentElement.style.setProperty('--nav-height', `${height}px`)
      }
    }

    updateNavHeight()
    window.addEventListener('resize', updateNavHeight)

    return () => {
      window.removeEventListener('resize', updateNavHeight)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation ref={navRef} navigation={content.navigation} />

      <main className="pt-[--nav-height]">
        <HeroSection hero={content.hero} />
        <ServiceCta {...content.contabilidadCta} />

        {/* Soluciones section */}
        <section id="soluciones" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Soluciones</h2>
            <p className="text-center text-gray-600">Content for solutions will go here</p>
          </div>
        </section>

        <ServiceCta {...content.impuestosCta} reverse />

        {/* Servicios section */}
        <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Servicios</h2>
            <p className="text-center text-gray-600">Content for services will go here</p>
          </div>
        </section>

        <ContactSection contact={content.contact} />
      </main>
    </div>
  )
}
