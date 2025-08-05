import { ServiceCTAProps } from "@/types";
import { Button } from './Button'
import { Label } from './Label'
import { resolveAssetPath } from '../utils'
import { useState, useEffect, useRef } from 'react'

export function ServiceCta({ label, title, description, cta, img, bgImg, reverse }: ServiceCTAProps) {
  const [parallaxOffset, setParallaxOffset] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

            // Calculate how much of the section is visible
      const visiblePercentage = Math.max(0, Math.min(1,
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ))

      // Create parallax effect based on visibility and screen size
      const isDesktop = window.innerWidth >= 1024
      const maxOffset = isDesktop ? 70 : 30 // Less movement on mobile
      const offset = visiblePercentage * maxOffset
      setParallaxOffset(offset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <section
      ref={sectionRef}
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${resolveAssetPath(bgImg)})` }}
    >
      <div
        className={`max-w-[90%] lg:max-w-[80%] mx-auto bg-no-repeat pt-[4.48rem] pb-[7.62rem] bg-[center_21%] bg-[length:14rem_auto] lg:bg-[length:auto_24rem] ${reverse ? 'lg:bg-[left_center]' : 'lg:bg-[right_center]'}` }
                        style={{
          backgroundImage: `url(${resolveAssetPath(img.src)})`,
          backgroundPositionY: `${(window.innerWidth >= 1024 ? 30 : 10) + parallaxOffset}%`
        }}
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
