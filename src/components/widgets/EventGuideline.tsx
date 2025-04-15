import React, { useEffect, useState } from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'

const guidelines = [
  {
    img: '/images/people.jpg',
    title: 'people',
    description:
      'Everyone who is concerned with coding, testing, code quality and software craft. There is no agenda and there are no speakers before the event starts. Proposals are presented during the event itself in the mornings, and voted by the participants right after. Meet us if you want to share your knowledge, experience and expertise!',
  },
  {
    img: '/images/action.jpg',
    title: 'retreat',
    description:
      'The event will be run as a non-profit, low-cost event. It will be much like a retreat. We will be there for 48 hours to collaborate and share ideas in a self-organized Open Space. There will be hands-on coding sessions, sessions focused on discussion, interactive talks and lots more.\n' +
      '\n',
  },
  {
    img: '/images/fun.jpg',
    title: 'fun',
    description:
      'We will not only spend the days together but also the nights. And – believe it or not – programmers are a great company! There will be be lots of opportunities to spend your time. Starting with simple chilling over walking, playing games, hanging around, talking and laughing.',
  },
]

const EventGuideline = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <section className="text-default p-custom">
      <SectionIntro title={'WHAT IS SoCraTes?'} />

      <div className="bg-secondary dark:bg-light-contrast rounded-lg max-w-6xl mx-auto">
        {guidelines.map((guideline, index) => {
          const isFirst = index === 0
          const isLast = index === guidelines.length - 1

          return (
            <div key={index} className={`relative ${isFirst ? 'pt-8 pb-8' : isLast ? 'pt-8 pb-8' : 'pt-8 pb-8'} rounded`}>
              <div className={`flex flex-col-reverse md:flex-row-reverse items-center overflow-hidden md:h-[200px] `}>
                <div className="md:w-3/5 flex flex-col px-lg md:px-0 md:pr-md h-full ">
                  <h2 className="mb-4 italic text-md lg:text-lg text-primary-dark dark:text-contrast capitalize">{guideline.title}</h2>
                  <p className="text-light text-sm mb-6 sm:mb-0">{guideline.description}</p>
                </div>

                <div
                  className="w-3/4 md:w-2/5 min-h-60 md:min-h-auto px-lg mb-md md:mb-0 flex items-center justify-center h-full bg-cover bg-center rounded-lg mx-lg"
                  style={{ backgroundImage: `url(${import.meta.env.BASE_URL}/${guideline.img})` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default EventGuideline
