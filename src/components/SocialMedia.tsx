import { SocialIcon } from '../types'
import { resolveAssetPath } from '../utils'

interface SocialMediaProps {
  social: SocialIcon[]
  className?: string
  iconSize?: string
  facebookSize?: string
}

export function SocialMedia({ social, className = '', iconSize = 'w-[2.22rem]', facebookSize }: SocialMediaProps) {
  return (
    <div className={`flex gap-[1.48rem] ${className}`}>
      {social.map((socialItem) => {
        // Apply specific size for Facebook icon if provided, otherwise use default
        const isFacebook = socialItem.id === 'facebook'
        const itemIconSize = isFacebook && facebookSize ? facebookSize : iconSize
        
        return (
          <a
            key={socialItem.id}
            href={socialItem.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <img
              src={resolveAssetPath(socialItem.icon)}
              alt={socialItem.alt}
              className={`${itemIconSize} h-auto object-contain`}
            />
          </a>
        )
      })}
    </div>
  )
}
