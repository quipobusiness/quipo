import { ServiceCTAProps } from "@/types";
import { Button } from './Button'
import { Label } from './Label'
import { resolveAssetPath } from '../utils'

export function ServiceCta({ label, title, description, cta, img, bgImg, reverse }: ServiceCTAProps) {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${resolveAssetPath(bgImg)})` }}
    >
      <div className={`max-w-[90%] lg:max-w-[80%] mx-auto bg-no-repeat pt-[4.48rem] pb-[7.62rem] bg-[center_18%] bg-[length:14rem_auto] lg:bg-[length:auto_24rem] ${reverse ? 'lg:bg-[left_center]' : 'lg:bg-[right_center]'}` }
        style={{ backgroundImage: `url(${resolveAssetPath(img.src)})` }}
      >
        <div className={`flex flex-col justify-start mx-auto ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className="text-center lg:text-left lg:w-[55%]">
            <Label className="mb-[16rem] lg:mb-[5rem]">{label}</Label>
            <h2 className="text-quibo-text text-quibo-lg font-medium leading-[1.1] mb-[2.59rem]">
              <span dangerouslySetInnerHTML={{ __html: title }} />
            </h2>
            <p className="text-quibo-text text-quibo-sm leading-[1.1] mb-[2.59rem]">
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </p>
            <Button
              text={cta.text}
              href={cta.href}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
