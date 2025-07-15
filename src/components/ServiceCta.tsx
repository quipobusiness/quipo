import { ServiceCTAProps } from "@/types";
import { Button } from './Button'

export function ServiceCta({ label, title, description, cta, img, bgImg, reverse }: ServiceCTAProps) {
  return (
    <section
      className="py-[7.41rem] px-[1.85rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={`flex flex-col lg:flex-row items-center gap-[3.7rem] max-w-[80%] lg:max-w-[53rem] mx-auto ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="bg-quibo-green-light text-quibo-green-dark text-[0.93rem] font-medium uppercase tracking-wider mb-[1.48rem] inline-block rounded-[0.44rem] px-[1.04rem] py-[0.52rem]">
            {label}
          </span>
          <h2 className="text-quibo-text text-[2.96rem] font-normal leading-[1.1] mb-[1.85rem]">
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </h2>
          <p className="text-quibo-text text-[1.11rem] leading-[1.4] mb-[2.96rem]">
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </p>
          <Button
            text={cta.text}
            href={cta.href}
            variant="secondary"
          />
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
