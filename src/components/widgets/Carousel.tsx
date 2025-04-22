import React, { Fragment, useEffect, useState } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { cn } from '~/common/css.ts'
import { eventState } from '~/common/constants.ts'

const images = [
  {
    src: '/images/socrates-meeting.jpg',
    alt: 'socrates-meeting.jpg',
  },
  {
    src: '/images/socrates-meeting-2.jpg',
    alt: 'socrates-meeting-2.jpg',
  },
  {
    src: '/images/socrates-meeting-4.jpg',
    alt: 'socrates-meeting-4.jpg',
  },
]

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0)

  const nextSlide = () => {
    setImageIndex(prevIndex => {
      if (prevIndex === images.length - 1) return 0
      return prevIndex + 1
    })
  }

  const prevSlide = () => {
    setImageIndex(prevIndex => {
      if (prevIndex === 0) return images.length - 1
      return prevIndex - 1
    })
  }

  return (
    <div className="relative top w-full h-full">
      <div className="w-full h-full flex overflow-hidden">
        {images.map(({ src, alt }, index) => (
          <Fragment key={alt}>
            <div
              className={`w-full h-full shrink-0 grow-0 transition-transform duration-800 ease-in-out]`}
              style={{
                translate: `${-100 * imageIndex}%`,
                backgroundImage: `url(${import.meta.env.BASE_URL}/${src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}></div>
          </Fragment>
        ))}
      </div>
      <div className="absolute bg-black/60 inset-0 px-custom">
        <div className="max-w-6xl mx-auto relative h-full">
          <div className=" w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white text-center px-xl space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">"Great things happen when we come together."</h2>
            <div className="space-y-md">
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl opacity-80">
                SoCraTes 2025 <span className="capitalize">coming soon</span>
              </p>
              <p className=" text-lg sm:text-2xl md:text-3xl lg:text-4xl">
                <button className="btn-primary uppercase">
                  <a href="" target="_blank">
                    register
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
