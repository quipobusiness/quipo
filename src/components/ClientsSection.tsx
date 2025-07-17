import { useState } from 'react'
import { Clients } from '../types'

interface ClientsSectionProps {
  clients: Clients
}

export function ClientsSection({ clients }: ClientsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Handle case where clients data might not be available
  if (!clients || !clients.clients || clients.clients.length === 0) {
    return null
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= clients.clients.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? clients.clients.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="py-[7.41rem] bg-quibo-border overflow-hidden">
      <div className="max-w-[80%] lg:max-w-none mx-auto lg:mx-0">
        <h2 className="text-quibo-text text-quibo-xl font-normal leading-[1.1] mb-[3.7rem] text-center">
          {clients.title}
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards */}
          <div
            className="flex transition-transform duration-300 ease-in-out lg:gap-[3.15rem]"
            style={{
              transform: `translateX(-${currentIndex * (100 / 1)}%)` // Mobile: 100% per slide
            }}
          >
            {clients.clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full lg:w-[calc((100%-6.3rem)/2.5)] lg:first:ml-[1.85rem]"
              >
                {/* Client Card */}
                <div className="mx-[1.85rem] lg:mx-0">
                  {/* Logo with white background */}
                  <div className="bg-white rounded-[0.44rem] p-[1.48rem] mb-[1.48rem] flex items-center justify-center">
                    <img
                      src={client.logo.src}
                      alt={client.logo.alt}
                      className="max-w-full max-h-[3.7rem] w-auto h-auto"
                    />
                  </div>

                  {/* Content with gray background */}
                  <div className="bg-quibo-gray-light p-[1.85rem] rounded-[0.44rem]">
                    <h3 className="text-quibo-text text-quibo-sm font-medium mb-[0.74rem]">
                      {client.title}
                    </h3>
                    <p className="text-quibo-text text-quibo-sm leading-[1.4]">
                      {client.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Carousel Controls */}
          <div className="hidden lg:flex">
            <button
              onClick={prevSlide}
              className="absolute left-[0.93rem] top-1/2 transform -translate-y-1/2 hover:opacity-75 transition-opacity"
            >
              <img src="/svg/carousel-left.svg" alt="Previous" className="w-[2.22rem] h-auto" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-[0.93rem] top-1/2 transform -translate-y-1/2 hover:opacity-75 transition-opacity"
            >
              <img src="/svg/carousel-right.svg" alt="Next" className="w-[2.22rem] h-auto" />
            </button>
          </div>

          {/* Mobile Carousel Controls */}
          <div className="flex lg:hidden justify-center gap-[1.48rem] mt-[1.85rem]">
            <button
              onClick={prevSlide}
              className="hover:opacity-75 transition-opacity"
            >
              <img src="/svg/carousel-left.svg" alt="Previous" className="w-[2.22rem] h-auto" />
            </button>

            <button
              onClick={nextSlide}
              className="hover:opacity-75 transition-opacity"
            >
              <img src="/svg/carousel-right.svg" alt="Next" className="w-[2.22rem] h-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
