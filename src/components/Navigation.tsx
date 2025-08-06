import { useState, useEffect, forwardRef } from 'react'
import { Navigation as NavigationType } from '../types'
import { SocialMedia } from './SocialMedia'
import { resolveAssetPath } from '../utils'

interface NavigationProps {
  navigation: NavigationType
  scrollHide?: boolean
}

export const Navigation = forwardRef<HTMLElement, NavigationProps>(
  ({ navigation }, forwardedRef) => {
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

        const scrollToSection = (href: string) => {
      // Remove the # from href to get the element ID
      const targetId = href.replace('#', '')
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Get navbar height from CSS custom property or use fixed value
        const navHeight = getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
        const navbarHeight = navHeight ? parseInt(navHeight) : 120 // fallback to 120px

        // Add extra offset for better visual spacing
        const offset = navbarHeight + 20

        // Calculate target position
        const targetPosition = targetElement.offsetTop - offset

        // Smooth scroll to target with offset
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }

    return (
            <nav
        ref={forwardedRef}
        className="fixed flex justify-between nav-container items-end top-0 left-0 right-0 z-50 bg-quibo-bg/95 border-t-[0.58rem] border-quibo-border backdrop-blur-sm shadow-sm"
      >
        <button
          onClick={scrollToTop}
          className="flex flex-shrink-0 relative z-[60]"
        >
          {/* Regular logo for screens < 500px */}
          <img
            src={resolveAssetPath(navigation.logo.src)}
            alt={navigation.logo.alt}
            className="h-[1.5rem] md:h-[2.4rem] w-auto md:-mb-[0.5rem] min-[500px]:hidden"
          />
          {/* Long logo for screens >= 500px */}
          <img
            src={resolveAssetPath(navigation.logoLong.src)}
            alt={navigation.logoLong.alt}
            className="h-[1.5rem] md:h-[2.4rem] w-auto md:-mb-[0.5rem] max-[499px]:hidden"
          />
        </button>
        {/* Desktop navigation */}
        <div className="hidden lg:flex items-end gap-[2.3475rem]">
          {navigation.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
              className="text-quibo-text leading-none text-quibo-xs font-medium cursor-pointer relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-quibo-border transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          {(() => {
            const whatsappIcon = navigation.social.find(item => item.id === 'whatsapp')
            return whatsappIcon ? (
              <a
                href={whatsappIcon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-75 transition-opacity duration-200 flex-shrink-0"
              >
                            <img
              src={resolveAssetPath(whatsappIcon.icon)}
              alt={whatsappIcon.alt}
              className="w-[1.4rem] h-auto -mb-[0.2rem]"
            />
              </a>
            ) : null
          })()}
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
        <div className={`lg:hidden fixed top-0 left-0 right-0 bg-quibo-bg transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-[10%] opacity-0 pointer-events-none'}`} style={{ paddingTop: '7.81rem' }}>
          <div className="space-y-6 pl-[4.25rem] pr-[3.94rem] pt-6 pb-6">
            {navigation.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  scrollToSection(link.href)
                }}
                className="text-quibo-text hover:opacity-75 block px-3 py-2 font-medium transition-opacity duration-200 text-quibo-xs cursor-pointer relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-quibo-border transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div onClick={() => setIsOpen(false)} className="px-3 py-2">
              <SocialMedia
                social={navigation.social}
                iconSize="w-[2.22rem]"
                facebookSize="w-[1.9rem]"
              />
            </div>
          </div>
        </div>
      </nav>
    )
  }
)
