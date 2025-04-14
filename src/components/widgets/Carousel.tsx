import React, { Fragment, useEffect, useState } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { cn } from '~/common/css.ts'

const images = [
  {
    src: '/images/socrates-meeting.jpg',
    alt: 'canyon.jpg',
  },
  {
    src: '/images/socrates-meeting-2.jpg',
    alt: 'fiori.jpg',
  },
  {
    src: '/images/socrates-meeting-4.jpg',
    alt: 'foresta.jpg',
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
      <div className="relative bg-transparent px-custom">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button
            className={cn(
              'opacity-100',
              'bg-primary/20 border border-secondary transition-all duration-300 hover:bg-primary-dark/40',
              'p-2 md:p-4 rounded z-10 cursor-pointer relative bottom-50 -translate-y-14 md:-translate-y-40',
            )}
            onClick={prevSlide}>
            <div
              className="h-3 w-3 md:w-6 md:h-6 border-secondary
                  border-l-2 border-b-2 translate-x-0.5 md:translate-x-1.5
                  transform rotate-45 rounded-bl"
            />
          </button>

          <button
            className={cn(
              'opacity-100',
              'bg-primary/20 border border-secondary transition-all duration-300 hover:bg-primary-dark/40',
              'p-2 md:p-4 rounded z-10 cursor-pointer relative bottom-50 -translate-y-14 md:-translate-y-40',
            )}
            onClick={nextSlide}>
            <div
              className="h-3 w-3 md:w-6 md:h-6 border-secondary
                  border-t-2 border-r-2 -translate-x-0.5 md:-translate-x-1.5
                  transform rotate-45 rounded-tr"
            />
          </button>
        </div>
      </div>
      {/*<div*/}
      {/*  className={cn(*/}
      {/*    'absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-3 bg-gray-800 p-2 rounded-xl',*/}
      {/*    'opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300',*/}
      {/*  )}>*/}
      {/*  {images.map((_, index) => (*/}
      {/*    <button*/}
      {/*      key={index}*/}
      {/*      className="[unset:all] block cursor-pointer w-2.5 h-2.5 relative"*/}
      {/*      aria-label={`View Image ${index + 1}`}*/}
      {/*      onClick={() => setImageIndex(index)}>*/}
      {/*      {index === imageIndex ? (*/}
      {/*        <div className="w-full h-full bg-subtitle rounded-full"></div>*/}
      {/*      ) : (*/}
      {/*        <div className="w-full h-full border-1 transition-all hover:scale-90 duration-300 hover:bg-primary border-light-contrast rounded-full"></div>*/}
      {/*      )}*/}
      {/*    </button>*/}
      {/*  ))}*/}
      {/*</div>*/}
      <div
        className={cn(
          'absolute bg-primary/80 dark:bg-contrast -bottom-11.5 md:-bottom-22 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
          'text-center',
          'space-y-4 sm:space-y-6 w-full text-xl md:text-4xl',
          'opacity-100',
        )}>
        <div className="w-50 sm:w-80 mx-auto text-light rounded-xl py-4 md:py-10">
          <p className="font-bold h-full mb-1 md:mb-4">SoCraTes 2025</p>
          <p className="text-md font-thin h-full">COMING SOON</p>
        </div>
        {/*<div className="flex justify-between items-center space-x-4 mx-auto w-50 sm:w-75 h-lg">*/}
        {/*  <button onClick={() => prevSlide()} className="btn-primary text-xs h-full w-30 rounded-lg">*/}
        {/*    get ticket*/}
        {/*  </button>*/}
        {/*  <button onClick={() => nextSlide()} className="btn-primary text-xs h-full w-30 rounded-lg">*/}
        {/*    explore*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default Carousel
