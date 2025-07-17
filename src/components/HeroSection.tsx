import { HeroSection as HeroSectionType } from '../types'
import { Button } from './Button'

interface HeroSectionProps {
  hero: HeroSectionType
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      className="min-h-[60vh] pt-[5.6rem] pb-[7.7rem] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${hero.bgImage})`
      }}
    >
      <div className="flex flex-col items-center max-w-[80%]">
        {/* Logo */}
        <img
          src={hero.logo.src}
          alt={hero.logo.alt}
          className="w-[20.74rem] h-auto mb-8 max-w-full"
        />

        {/* Title */}
        <h1
          className="text-white text-center text-quibo-xl font-normal mb-12 leading-[1.1] max-w-full"
          dangerouslySetInnerHTML={{ __html: hero.title }}
        />

        {/* CTA Button */}
        <Button
          text={hero.cta.title}
          href={hero.cta.href}
          variant="primary"
        />
      </div>
    </section>
  )
}
