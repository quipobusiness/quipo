import { useEffect, useRef } from 'react'
import { LandingPageContent } from '../types'
import { Navigation } from './Navigation'
import { HeroSection } from './HeroSection'
import { ContactSection } from './ContactSection'
import { ServiceCta } from './ServiceCta'
import { SolutionsSection } from './SolutionsSection'
import { ServicesSection } from './ServicesSection'
import { ClientsSection } from './ClientsSection'

interface LandingPageProps {
  content: LandingPageContent
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

        <SolutionsSection solutions={content.solutions} />

        <ServiceCta {...content.impuestosCta} reverse />

        <ServicesSection services={content.services} />

        {content.clients && <ClientsSection clients={content.clients} />}

        <ContactSection contact={content.contact} />
      </main>
    </div>
  )
}
