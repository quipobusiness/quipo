import { Services } from '../types'
import { Label } from './Label'

interface ServicesSectionProps {
  services: Services
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-[7.41rem] px-[1.85rem]">
      <div className="max-w-[80%] lg:max-w-[74rem] mx-auto">
        {/* Header Content - Centered */}
        <div className="flex flex-col items-center text-center mb-[3.7rem]">
          <Label>{services.mainLabel}</Label>
          <h2 className="text-quibo-text text-quibo-xl font-normal leading-[1.1] mb-[1.85rem]">
            <span dangerouslySetInnerHTML={{ __html: services.title }} />
          </h2>
          <p className="text-quibo-text text-quibo-sm leading-[1.4] max-w-[53rem]">
            {services.description}
          </p>
        </div>

        {/* Service Categories - Alternating layout */}
        <div className="space-y-[3.7rem] mb-[3.7rem]">
          {services.categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-[3.7rem] ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="flex-1 lg:w-1/2">
                <img
                  src={category.img.src}
                  alt={category.img.alt}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 lg:w-1/2 text-center lg:text-left">
                <Label>{category.label}</Label>
                <h3 className="text-quibo-text text-quibo-md font-normal leading-[1.1] mb-[1.48rem]">
                  {category.title}
                </h3>
                <p className="text-quibo-text text-quibo-sm leading-[1.4]">
                  <span dangerouslySetInnerHTML={{ __html: category.description }} />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width CTA Button */}
        <div className="w-full">
          <a
            href={services.cta.href}
            className="w-full bg-quibo-text text-white rounded-[0.44rem] uppercase font-semibold
                       text-quibo-sm px-[2.22rem] py-[1.85rem]
                       hover:opacity-90 transition-opacity duration-200
                       flex items-center justify-center gap-[1.48rem]"
          >
            {services.cta.text}
            <img
              src="/svg/arrow-em.svg"
              alt="Arrow"
              className="w-[1.48rem] h-auto"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
