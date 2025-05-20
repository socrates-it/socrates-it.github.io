import React, { Fragment, useState } from 'react'
import { BASE_PATH, eventState } from '~/common/constants.ts'
import { EventState } from '~/common/types.ts'

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
  const [imageIndex] = useState(0)

  return (
    <div className="relative top w-full h-full">
      <div className="w-full h-full flex overflow-hidden">
        {images.map(({ src, alt }) => (
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
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">"Great things happen when we come together."</h2>
            <div className="space-y-xs md:space-y-md w-full">
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-light font-bold">SoCraTes 2025</p>
              {eventState !== EventState.COMING_SOON && (
                <ul className="flex italic text-base sm:text-xl lg:text-2xl space-x-4 sm:space-x-8 justify-center mb-12 md:mb-22 lg:mb-32">
                  <li style={{ wordSpacing: '0.5rem' }}>02/10/2025 - 04/10/2025, Rimini</li>
                </ul>
              )}
              <div className="w-42 sm:w-60 md:w-1/3 mx-auto">
                {eventState === EventState.ANNOUNCEMENT_LIST && (
                  <button
                    className="uppercase btn-primary w-full py-4 sm:py-6 text-sm sm:text-lg lg:text-2xl"
                    onClick={() => {
                      const element = document.getElementById('details')
                      if (element) {
                        element.scrollIntoView({ behavior: 'instant' })
                      }
                    }}>
                    Explore Details
                  </button>
                )}

                {eventState === EventState.COMING_SOON && (
                  <div className="mx-auto py-4 sm:py-6 bg-primary text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase">{eventState}</div>
                )}

                {eventState === EventState.REGISTRATION_OPEN && (
                  <a href={`${BASE_PATH}register`}>
                    <button className="uppercase btn-primary w-full y-4 sm:py-6 text-lg sm:text-2xl">register</button>
                  </a>
                )}

                {eventState === EventState.SOLD_OUT && (
                  <>
                    <div className="mx-auto py-4 sm:py-6 text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase">sold out</div>
                    <button className="uppercase btn-primary w-full y-4 sm:py-6 text-lg sm:text-2xl">
                      <a href="mailto:socrates-it@googlegroups.com">{eventState}</a>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
