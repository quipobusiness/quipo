import { useState, useEffect, forwardRef } from 'react'
import { Navigation as NavigationType } from '../types'
import { SocialMedia } from './SocialMedia'

interface NavigationProps {
  navigation: NavigationType
}

export const Navigation = forwardRef<HTMLElement, NavigationProps>(
  ({ navigation }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    // Handle body scroll lock when mobile menu is open
    useEffect(() => {
      if (isOpen) {
        document.body.style.height = '100vh'
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.height = ''
        document.body.style.overflow = ''
      }

      // Cleanup on unmount
      return () => {
        document.body.style.height = ''
        document.body.style.overflow = ''
      }
    }, [isOpen])

    // Handle ESC key to close mobile menu
    useEffect(() => {
      const handleEscKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener('keydown', handleEscKey)
      }

      return () => {
        document.removeEventListener('keydown', handleEscKey)
      }
    }, [isOpen])

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
      <nav ref={ref} className="fixed flex justify-between nav-container items-end top-0 left-0 right-0 z-50 bg-quibo-bg border-t-[0.58rem] border-quibo-border">
        <button
          onClick={scrollToTop}
          className="flex flex-shrink-0 relative z-[60]"
        >
          {/* Regular logo for screens < 500px */}
          <img
            src={navigation.logo.src}
            alt={navigation.logo.alt}
            className="h-[2.5rem] md:h-[3.91rem] w-auto md:-mb-[0.9rem] min-[500px]:hidden"
          />
          {/* Long logo for screens >= 500px */}
          <img
            src={navigation.logoLong.src}
            alt={navigation.logoLong.alt}
            className="h-[2.5rem] md:h-[3.91rem] w-auto md:-mb-[0.9rem] max-[499px]:hidden"
          />
        </button>
        {/* Desktop navigation */}
        <div className="hidden lg:flex items-end gap-[3.13rem]">
          {navigation.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-quibo-text leading-none text-quibo-xs font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={navigation.social.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-75 transition-opacity duration-200 flex-shrink-0"
          >
            <img
              src={navigation.social.whatsapp.icon}
              alt={navigation.social.whatsapp.alt}
              className="w-[2.34rem] h-auto -mb-[0.78rem]"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden relative z-[60]">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-quibo-text hover:opacity-75 focus:outline-none rounded p-2"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'top-1/2 rotate-45' : 'top-1'}`}></span>
              <span className={`absolute left-0 top-1/2 block w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'top-1/2 -rotate-45' : 'top-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden fixed inset-0 bg-quibo-bg transition-all duration-300 z-[55] ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-[10%] opacity-0 pointer-events-none'}`} style={{ top: '0', paddingTop: '7.81rem' }}>
          <div className="space-y-6 pl-[4.25rem] pr-[3.94rem] pt-6 pb-6">
            {navigation.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-quibo-text hover:opacity-75 block px-3 py-2 font-medium transition-opacity duration-200 text-quibo-xs"
              >
                {link.label}
              </a>
            ))}
            <div onClick={() => setIsOpen(false)} className="px-3 py-2">
              <SocialMedia
                social={navigation.social}
                iconSize="w-[2.34rem]"
              />
            </div>
          </div>
        </div>
      </nav>
    )
  }
)
