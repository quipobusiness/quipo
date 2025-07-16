import { ServiceCTAProps } from "@/types";
import { Button } from './Button'
import { Label } from './Label'

export function ServiceCtaSection({ label, title, description, cta, img, bgImg, reverse }: ServiceCTAProps) {
  return (
    <section
      className="py-[7.41rem] px-[1.85rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-[80%] mx-auto lg:max-w-[53rem]">
        <Label>{label}</Label>
        <div className={`flex flex-col lg:flex-row items-center gap-[3.7rem] mx-auto ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className="flex-1 text-center lg:text-left lg:w-[60%]">
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
      </div>
    </section>
  )
}
