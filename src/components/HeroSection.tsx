import { HeroSection as HeroSectionType } from '../types'

interface HeroSectionProps {
  hero: HeroSectionType
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors duration-200">
              {hero.cta.primary}
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
              {hero.cta.secondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
