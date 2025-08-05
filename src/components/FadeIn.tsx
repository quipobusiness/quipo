import { useState, useEffect, useRef, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  staggered?: number
}

export function FadeIn({ children, className = '', delay = 0, duration = 600, staggered }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
                 if (entry.isIntersecting) {
           // Calculate total delay (custom delay + staggered delay)
           const totalDelay = delay + (staggered ? staggered * 50 : 0)
           setTimeout(() => {
             setIsVisible(true)
           }, totalDelay)
         }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element enters viewport
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [delay])

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${className}`}
             style={{
         opacity: isVisible ? 1 : 0,
         marginTop: isVisible ? '0rem' : '2rem',
         transitionDuration: `${duration}ms`,
         transitionDelay: `${delay + (staggered ? staggered * 50 : 0)}ms`
       }}
    >
      {children}
    </div>
  )
}
