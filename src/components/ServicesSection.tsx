import { Services } from '../types'
import { Label } from './Label'
import { resolveAssetPath } from '../utils'
import { FadeIn } from './FadeIn'

interface ServicesSectionProps {
  services: Services
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="servicios" className="my-[3.7rem] max-w-[90%] lg:max-w-[80%] mx-auto bg-[right_top] bg-[length:14rem_auto] lg:bg-[length:18.3rem_auto]  bg-no-repeat"
    style={{ backgroundImage: `url(${resolveAssetPath(services.bgImg)})` }}>
      <div className="lg:max-w-[74rem] mx-auto">
        {/* Header Content - Centered */}
        <div className="flex flex-col items-center text-center mb-[4rem]">
          <Label className="mb-[2.85rem]">{services.mainLabel}</Label>
          <h2 className="text-quibo-text text-quibo-xl font-medium leading-[1.1] mb-[3rem]">
            <span dangerouslySetInnerHTML={{ __html: services.title }} />
          </h2>
          <p className="text-quibo-text text-quibo-sm leading-[1.4] max-w-[37rem]">
            {services.description}
          </p>
        </div>

        {/* Service Categories - Alternating layout */}
        <div className="space-y-[3.7rem] mb-[3.7rem]">
          {services.categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-start gap-[4rem] ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="flex-1">
                <FadeIn>
                  <img
                    src={resolveAssetPath(category.img.src)}
                    alt={category.img.alt}
                    className="w-full h-auto rounded-lg"
                  />
                </FadeIn>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <Label className="mb-[1.77rem]">{category.label}</Label>
                <h3 className="text-quibo-text text-quibo-md font-medium mb-[1.59rem]" dangerouslySetInnerHTML={{ __html: category.title }} />
                <p className="text-quibo-text text-quibo-xs big-break w-[90%] leading-[1.1]" dangerouslySetInnerHTML={{ __html: category.description }} />
              </div>
            </div>
          ))}
        </div>

        {/* Full-width CTA Button */}
        <div className="w-full">
          <a
            href="/docs/Quipo_Servicios.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-quibo-text text-center text-white rounded-[1.48rem] uppercase font-medium
                       text-quibo-sm px-[2.22rem] pt-[3.22rem] pb-[1.85rem] lg:py-[3.22rem]
                       border-2 border-quibo-text
                       hover:bg-quibo-border hover:text-quibo-text hover:border-quibo-text
                       transition-all duration-300 ease-in-out transform hover:shadow-lg active:scale-95
                       flex flex-col lg:flex-row items-center justify-center gap-[1.48rem]"
          >
            {services.cta.text}
            <img
              src="/svg/arrow-em.svg"
              alt="Arrow"
              className="w-[2.55rem] h-auto"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
