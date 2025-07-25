import { SocialIcon } from '../types'
import { resolveAssetPath } from '../utils'

interface SocialMediaProps {
  social: SocialIcon[]
  className?: string
  iconSize?: string
}

export function SocialMedia({ social, className = '', iconSize = 'w-[2.22rem]' }: SocialMediaProps) {
  return (
    <div className={`flex gap-[1.48rem] ${className}`}>
      {social.map((socialItem) => (
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
            className={`${iconSize} h-auto`}
          />
        </a>
      ))}
    </div>
  )
}
