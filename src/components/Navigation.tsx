import { useState, useEffect } from 'react'
import { Navigation as NavigationType } from '../types'

interface NavigationProps {
  navigation: NavigationType
}

export function Navigation({ navigation }: NavigationProps) {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="fixed flex justify-between nav-container items-end top-0 left-0 right-0 z-50 bg-quibo-bg border-t-[15px] border-quibo-border">
      <button
        onClick={scrollToTop}
        className="flex flex-shrink-0"
      >
        <img
          src={navigation.logo.src}
          alt={navigation.logo.alt}
          className="h-[100px] w-auto -mb-[23px]"
        />
      </button>
      {/* Desktop navigation */}
      <div className="hidden md:flex items-end" style={{ gap: '80px' }}>
        {navigation.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-quibo-text leading-none"
            style={{ fontSize: '25px' }}
          >
            {link.label}
          </a>
        ))}
        <a
          href={navigation.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:opacity-75 transition-opacity duration-200"
        >
          <img
            src={navigation.whatsapp.icon}
            alt={navigation.whatsapp.alt}
            className="w-[60px] h-auto flex-shrink-0 -mb-[20px]"
          />
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-quibo-text hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-quibo-text focus:ring-opacity-50 rounded p-2"
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
      <div className={`md:hidden fixed inset-0 bg-quibo-bg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '0', paddingTop: '200px' }}>
        <div className="px-6 py-6 space-y-6">
          {navigation.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-quibo-text hover:opacity-75 block px-3 py-2 font-medium transition-opacity duration-200"
              style={{ fontSize: '25px' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={navigation.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center px-3 py-2 font-medium text-quibo-text hover:opacity-75 transition-opacity duration-200"
          >
            <img
              src={navigation.whatsapp.icon}
              alt={navigation.whatsapp.alt}
              className="w-[60px] h-auto flex-shrink-0"
              style={{ minWidth: '60px', maxWidth: '60px' }}
            />
          </a>
        </div>
      </div>
    </nav>
  )
}
