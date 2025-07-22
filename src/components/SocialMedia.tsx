import { SocialIcon } from '../types'

interface SocialMediaProps {
  social: {
    facebook: SocialIcon
    instagram: SocialIcon
    whatsapp: SocialIcon
    youtube: SocialIcon
  }
  className?: string
  iconSize?: string
}

export function SocialMedia({ social, className = '', iconSize = 'w-[2.22rem]' }: SocialMediaProps) {
  const socialLinks = [
    { key: 'facebook', data: social.facebook },
    { key: 'instagram', data: social.instagram },
    { key: 'whatsapp', data: social.whatsapp },
    { key: 'youtube', data: social.youtube }
  ]

  return (
    <div className={`flex gap-[1.48rem] ${className}`}>
      {socialLinks.map(({ key, data }) => (
        <a
          key={key}
          href={data.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity duration-200"
        >
          <img
            src={data.icon}
            alt={data.alt}
            className={`${iconSize} h-auto`}
          />
        </a>
      ))}
    </div>
  )
}
