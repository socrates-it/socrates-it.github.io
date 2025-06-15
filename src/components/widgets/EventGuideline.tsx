import React, { useState } from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import { FimgaArrow } from '~/icons/Icons.tsx'
import Dialog from '~components/ui/dialog/Dialog.tsx'
import { prependBasePath } from '~/common/constants.ts'

enum GuideLinesTitles {
  first = 'Our Values',
  second = 'Open space',
  third = 'Code of Conduct',
}

const guidelines = [
  {
    img: '/images/people.jpg',
    title: GuideLinesTitles.first,
    description: [
      'SoCraTes fosters an inclusive community.',
      'We are committed to providing a friendly, safe, and welcoming environment for all, regardless of gender, sexual orientation, programming language, ability, ethnicity, socioeconomic status, and religion (or lack thereof).',
    ],
  },
  {
    img: '/images/attendees.jpg',
    title: GuideLinesTitles.second,
    description: [
      'SoCraTes Italy will be run as a three-day Open Space, facilitated by the outstanding facilitator from Connexxo. We love working in self-organizing teams – well, Open Space is a simple technique for creating a self-organizing conference!',
    ],
  },
  {
    img: '/images/rope.jpg',
    title: GuideLinesTitles.third,
    description: [
      'SoCraTes Italy follows the Conference Code of Conduct laid out by several conference organisers around the globe. We ask that you read the full version before attending. You are required to cooperate with the code throughout the event to help ensure a safe environment for everybody.',
    ],
  },
]

const EventGuideline = () => {
  const [openModals, setOpenModals] = useState(Object.fromEntries(guidelines.map(p => [p.title, false])))

  function handleToggleModal(title: string) {
    setOpenModals(prev => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <section className="px-md md:px-xl pt-12 md:pt-24 pb-14 md:pb-26 bg-contrast">
      <SectionIntro title={'What We Stand For'} color="lightest" />

      <div className="rounded-lg max-w-6xl mx-auto space-y-xl">
        {guidelines.map((guideline, index) => {
          return (
            <div key={index} className={`relative rounded`}>
              <div className={`rounded-3xl bg-light-contrast p-md flex flex-col md:flex-row items-center overflow-hidden md:h-[300px]`}>
                <div
                  className="w-full md:w-2/5 min-h-60 md:min-h-auto mb-md md:mb-0 flex items-center justify-center h-full bg-cover bg-center rounded-2xl mr-0 md:mr-lg"
                  style={{ backgroundImage: `url(${prependBasePath(guideline.img)})` }}
                />

                <div className="md:w-3/5 flex flex-col md:px-xl h-full justify-between">
                  <div className="mb-xl md:mb-0">
                    <h2 className="mb-xs text-xl font-bold capitalize text-lightest">{guideline.title}</h2>
                    <div className="space-y-sm truncate-multi-line ">
                      {guideline.description.map(item => (
                        <p key={item} className="text-lightest text-md text-ellipsis">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <button className="group btn-primary capitalize space-x-xs" onClick={() => handleToggleModal(guideline.title)}>
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
      {openModals[GuideLinesTitles.first] && (
        <Dialog onClose={() => handleToggleModal(GuideLinesTitles.first)} isOpen={openModals[GuideLinesTitles.first]} title={GuideLinesTitles.first}>
          <div className="space-y-md ">
            <h3 className="mb-sm font-medium text-xl">Inclusiveness</h3>
            <p>
              A primary goal of SoCraTes conference is to be inclusive to the largest number of contributors, with the most varied and diverse backgrounds
              possible.
            </p>
          </div>
          <div className="space-y-md">
            <h3 className="mb-sm font-medium text-xl">Safe Environment</h3>
            <p>
              As such, we are committed to providing a friendly, safe and welcoming environment for all, regardless of gender, sexual orientation, programming
              language, ability, ethnicity, socioeconomic status, and religion (or lack thereof).
            </p>
            <p>
              And so we invite all those who participate in the SoCraTes conference and the community surrounding the conference to help us create safe and
              positive experiences for everyone.
            </p>
          </div>
          <div className="space-y-md">
            <h3 className="mb-sm font-medium text-xl">Be welcoming, friendly, and patient</h3>
            <p>
              Be respectful. Not all of us will agree with each other all the time, but disagreement is no excuse for poor behavior and poor manners. We might
              all experience some frustration now and then, but we cannot allow that frustration to turn into a personal attack.
            </p>
            <p>
              Be aware of the effect your words may have on others. We are a community of professionals, and we conduct ourselves professionally. Be kind to
              others. Do not insult or put down other participants. Harassment and other exclusionary behavior aren’t acceptable.
            </p>
            <p>
              <span className="italic">Credits</span>: These values are inspired by{' '}
              <a href="https://www.djangoproject.com/conduct/" className="text-accent">
                Django Code of Conduct and Citizenship Code of Conduct
              </a>
            </p>
          </div>
        </Dialog>
      )}
      {openModals[GuideLinesTitles.second] && (
        <Dialog onClose={() => handleToggleModal(GuideLinesTitles.second)} isOpen={openModals[GuideLinesTitles.second]} title={GuideLinesTitles.second}>
          <div className="space-y-md ">
            <p>
              SoCraTes Italy will be run as a three days{' '}
              <a href="https://agilecoachcamp.org/tiki-index.php?page=OpenSpace" className="text-accent">
                Open Space
              </a>
              , facilitated by the outstanding facilitator from{' '}
              <a href="https://connexxo.com/" className="text-accent">
                Connexxo
              </a>
              . We love working in self-organizing teams - well, Open Space is a simple technique for creating a self-organizing conference!
            </p>
            <p>It runs on ‘‘four principles and one law" and it has been used by thousands of people around the globe since then:</p>
            <ul className="list-inside list-disc">
              <li>Whoever comes is the right people</li>
              <li>Whenever it starts is the right time</li>
              <li>Whatever happens is the only thing that could have</li>
              <li>When it’s over it’s over</li>
            </ul>
          </div>
          <div className="space-y-md">
            <h3 className="mb-sm font-medium text-xl">The Law Of Two Feet</h3>
            <p>“If at any time you find that you are neither learning nor contributing, use you two feet and move to some place more to you liking.”</p>
            <p>
              Such a place might be another group, or even outside into the sunshine. No matter what, don’t sit there feeling miserable. It’s your conference,
              and you’re in charge of it.
            </p>
            <p>
              In OpenSpace there are no leaders, no followers, definitely no talking-heads - only participants. Does this sound strange to you? Come prepared to
              create the event you need - starting with collaboratively building our agenda, full of topics we have passion for.
            </p>
            <p> Don’t worry how this will work - just show up with your passion and Prepare To Be Surprised!</p>
          </div>
        </Dialog>
      )}
      {openModals[GuideLinesTitles.third] && (
        <Dialog onClose={() => handleToggleModal(GuideLinesTitles.third)} isOpen={openModals[GuideLinesTitles.third]} title={GuideLinesTitles.third}>
          <div className="space-y-md ">
            <p>
              SoCraTes Italy follows the Conference Code of Conduct laid out by several conference organisers around the globe. We ask that you read the{' '}
              <a href="http://confcodeofconduct.com/" className="text-accent">
                full version
              </a>{' '}
              before attending. You are required to cooperate with the code throughout the event to help ensure a safe environment for everybody.
            </p>
          </div>
          <div className="space-y-md">
            <p>
              Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, age, sexual orientation,
              disability, physical appearance, body size, race, or religion. We do not tolerate harassment of conference participants in any form. Sexual
              language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference
              participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference
              organisers.
            </p>
          </div>
          <div className="space-y-md">
            <h3 className="mb-sm font-medium text-xl">Scope</h3>
            <p>
              This code of conduct applies to the SoCraTes conference itself and to all digital spaces that are related to the SoCraTes conference, such as the
              wiki and mailing list.
            </p>
          </div>
        </Dialog>
      )}
    </section>
  )
}

export default EventGuideline
