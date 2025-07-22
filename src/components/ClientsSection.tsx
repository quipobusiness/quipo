import { useState, useEffect } from 'react'
import { Clients } from '../types'

interface ClientsSectionProps {
  clients: Clients
}

export function ClientsSection({ clients }: ClientsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

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

  // Handle case where clients data might not be available
  if (!clients || !clients.clients || clients.clients.length === 0) {
    return null
  }

  const getMaxIndex = () => {
    if (isDesktop) {
      // Desktop: stop when we can't show 2.4 more cards
      return Math.max(0, Math.ceil(clients.clients.length - 2.4))
    }
    // Mobile: normal pagination
    return clients.clients.length - 1
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = getMaxIndex()
      return prevIndex >= maxIndex ? 0 : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = getMaxIndex()
      return prevIndex <= 0 ? maxIndex : prevIndex - 1
    })
  }

  return (
    <section className="pt-[4.5rem] pb-[3.1rem] bg-quibo-border overflow-hidden">
      <div className="lg:max-w-none mx-auto lg:mx-0">
        <div className="max-w-[80%] mx-auto lg:max-w-none lg:mx-0">
          <h2 className="text-quibo-text text-quibo-xl font-medium leading-[1.1] mb-[3.7rem] text-center"
          dangerouslySetInnerHTML={{ __html: clients.title }} />
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Cards */}
          <div
            className="flex transition-transform duration-300 ease-in-out lg:gap-[3.15rem] items-stretch"
            style={{
              transform: `translateX(-${currentIndex * (isDesktop ? (100 / 2.4) : 100)}%)`
            }}
          >
            {clients.clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full lg:w-[calc((100%-6.3rem)/2.4)] lg:first:ml-[1.85rem]"
              >
                {/* Client Card */}
                <div className="px-[1.85rem] lg:mx-0 lg:px-0 flex flex-col h-full gap-[1.85rem]">
                  {/* Logo with white background */}
                  <div className="bg-white rounded-[1.6rem] h-[10.6rem] flex items-center justify-center">
                    <img
                      src={client.logo.src}
                      alt={client.logo.alt}
                      className="max-w-full max-h-[3.7rem] w-auto h-auto"
                    />
                  </div>

                  {/* Content with gray background */}
                  <div className="bg-quibo-gray-light p-[1.85rem] rounded-[1.6rem] flex-1">
                    <h3 className="text-quibo-text text-quibo-sm font-medium mb-[1.85rem]">
                      {client.title}
                    </h3>
                    <p className="text-quibo-text text-quibo-sm leading-[1.92rem]" dangerouslySetInnerHTML={{ __html: client.description }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Carousel Controls */}
          <div className="flex justify-between  mt-[1.85rem] px-[2rem] h-[4rem] lg:h-[2.2rem]">
            <button
              onClick={prevSlide}
              className="hover:opacity-75 transition-opacity"
            >
              <img src="/svg/carousel-left.svg" alt="Previous" className="h-full w-auto" />
            </button>

            <button
              onClick={nextSlide}
              className="hover:opacity-75 transition-opacity"
            >
              <img src="/svg/carousel-right.svg" alt="Next" className="h-full w-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
