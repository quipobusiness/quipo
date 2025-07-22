import { Services } from '../types'
import { Label } from './Label'

interface ServicesSectionProps {
  services: Services
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="servicios" className="my-[3.7rem] max-w-[80%] mx-auto bg-[right_top] bg-[length:14rem_auto] lg:bg-[length:18.3rem_auto]  bg-no-repeat"
    style={{ backgroundImage: `url(${services.bgImg})` }}>
      <div className="max-w-[80%] lg:max-w-[74rem] mx-auto">
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
                <img
                  src={category.img.src}
                  alt={category.img.alt}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
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
            href={services.cta.href}
            className="w-full bg-quibo-text text-white rounded-[1.48rem] uppercase font-medium
                       text-quibo-sm px-[2.22rem] py-[3.22rem]
                       hover:opacity-90 transition-opacity duration-200
                       flex items-center justify-center gap-[1.48rem]"
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
