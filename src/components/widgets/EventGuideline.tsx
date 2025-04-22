import React, { useEffect, useState } from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import { FimgaArrow } from '~/icons/Icons.tsx'

const guidelines = [
  {
    img: '/images/group.jpg',
    title: 'Our Values',
    description: [
      'SoCraTes fosters an inclusive community.',
      'We are committed to providing a friendly, safe, and welcoming environment for all, regardless of gender, sexual orientation, programming language, ability, ethnicity, socioeconomic status, and religion (or lack thereof).',
    ],
  },
  {
    img: '/images/action.jpg',
    title: 'retreat',
    description: [
      'SoCraTes fosters an inclusive community.',
      'We are committed to providing a friendly, safe, and welcoming environment for all, regardless of gender, sexual orientation, programming language, ability, ethnicity, socioeconomic status, and religion (or lack thereof).',
    ],
  },
  {
    img: '/images/fun.jpg',
    title: 'fun',
    description: [
      'SoCraTes fosters an inclusive community.',
      'We are committed to providing a friendly, safe, and welcoming environment for all, regardless of gender, sexual orientation, programming language, ability, ethnicity, socioeconomic status, and religion (or lack thereof).',
    ],
  },
]

const EventGuideline = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <section className="px-custom py-4xl bg-contrast">
      <SectionIntro title={'What We Stand For'} isLightContrast={true} />

      <div className="rounded-lg max-w-6xl mx-auto space-y-xl">
        {guidelines.map((guideline, index) => {
          const isFirst = index === 0
          const isLast = index === guidelines.length - 1

          return (
            <div key={index} className={`relative rounded`}>
              <div className={`rounded-3xl bg-light-contrast p-md flex flex-col md:flex-row items-center overflow-hidden md:h-[300px]`}>
                <div
                  className="w-3/4 md:w-2/5 min-h-60 md:min-h-auto mb-md md:mb-0 flex items-center justify-center h-full bg-cover bg-center rounded-2xl mr-lg"
                  style={{ backgroundImage: `url(${import.meta.env.BASE_URL}/${guideline.img})` }}
                />

                <div className="md:w-3/5 flex flex-col md:px-xl h-full justify-between">
                  <div>
                    <h2 className="mb-xs text-md lg:text-lg font-bold capitalize text-lightest">{guideline.title}</h2>
                    <div className="space-y-md">
                      {guideline.description.map((item, index) => (
                        <p className="text-lightest text-md">{item}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <button className="group btn-primary capitalize space-x-xs">
                      <span>read more</span>
                      <FimgaArrow className="stroke-white fill-transparent group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default EventGuideline
