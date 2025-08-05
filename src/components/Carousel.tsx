import { useState, useEffect, useRef, ReactNode } from 'react'
import { resolveAssetPath } from '../utils'

interface CarouselProps {
  children: ReactNode[]
  infinite?: boolean
}

export function Carousel({ children, infinite = false }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const isDragging = useRef(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsDesktop = window.innerWidth >= 1024
      if (newIsDesktop !== isDesktop) {
        setCurrentIndex(0) // Reset to start when switching layouts
      }
      setIsDesktop(newIsDesktop)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [isDesktop])

  const getMaxIndex = () => {
    if (isDesktop) {
      // Desktop: stop when we can't show 2.4 more cards
      return Math.max(0, Math.ceil(children.length - 2.4))
    }
    // Mobile: normal pagination
    return children.length - 1
  }

  const maxIndex = getMaxIndex()

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (infinite) {
        return prevIndex >= maxIndex ? 0 : prevIndex + 1
      } else {
        return prevIndex >= maxIndex ? maxIndex : prevIndex + 1
      }
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (infinite) {
        return prevIndex <= 0 ? maxIndex : prevIndex - 1
      } else {
        return prevIndex <= 0 ? 0 : prevIndex - 1
      }
    })
  }

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isDesktop) return
    touchStartX.current = e.touches[0].clientX
    isDragging.current = true
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDesktop || !isDragging.current) return
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (isDesktop || !isDragging.current) return
    const swipeThreshold = 50 // Minimum distance for a swipe
    const swipeDistance = touchStartX.current - touchEndX.current
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swiped left - go to next slide
        if (infinite || currentIndex < maxIndex) nextSlide()
      } else {
        // Swiped right - go to previous slide
        if (infinite || currentIndex > 0) prevSlide()
      }
    }
    isDragging.current = false
    touchStartX.current = 0
    touchEndX.current = 0
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform duration-300 ease-in-out lg:gap-[3.15rem] items-stretch"
        style={{
          transform: `translateX(-${currentIndex * (isDesktop ? (100 / 2.4) : 100)}%)`
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
      {/* Carousel Controls */}
      <div className="flex justify-between absolute lg:relative w-full top-[50%] lg:top-auto -translate-y-[50%] lg:translate-y-0 lg:mt-[1.8rem] px-[.2rem] h-[1.8rem] lg:h-[2.2rem]">
        {infinite || currentIndex > 0 ? (
          <button
            onClick={prevSlide}
            className="hover:opacity-75 transition-opacity"
            aria-disabled={!infinite && currentIndex === 0}
            tabIndex={infinite || currentIndex > 0 ? 0 : -1}
          >
            <img
              src={resolveAssetPath(isDesktop ? "/svg/carousel-left.svg" : "/svg/simple-arrow-left.svg")}
              alt="Previous"
              className="h-full w-auto"
            />
          </button>
        ) : <div />}
        {infinite || currentIndex < maxIndex ? (
          <button
            onClick={nextSlide}
            className="hover:opacity-75 transition-opacity"
            aria-disabled={!infinite && currentIndex === maxIndex}
            tabIndex={infinite || currentIndex < maxIndex ? 0 : -1}
          >
            <img
              src={resolveAssetPath(isDesktop ? "/svg/carousel-right.svg" : "/svg/simple-arrow-right.svg")}
              alt="Next"
              className="h-full w-auto"
            />
          </button>
        ) : <div />}
      </div>
    </div>
  )
}
