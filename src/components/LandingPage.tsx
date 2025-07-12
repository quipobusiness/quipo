import { LandingPageContent } from '../types'
import { Navigation } from './Navigation'
import { HeroSection } from './HeroSection'
import { ContactSection } from './ContactSection'

interface LandingPageProps {
  content: LandingPageContent
}

export function LandingPage({ content }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation navigation={content.navigation} />

      <main>
        <HeroSection hero={content.hero} />

        {/* Soluciones section */}
        <section id="soluciones" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Soluciones</h2>
            <p className="text-center text-gray-600">Content for solutions will go here</p>
          </div>
        </section>

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
