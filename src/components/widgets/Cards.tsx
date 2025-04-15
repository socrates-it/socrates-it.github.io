import React, { Fragment, useState } from 'react'
import CardContent from '~/components/ui/card/CardContent.tsx'
import Dialog from '~/components/ui/dialog/Dialog.tsx'
import DialogContent from '~/components/ui/dialog/DialogContent.tsx'
import { MajesticonsOpen } from '~/assets/icons/Icons.tsx'
import SectionIntro from '~components/ui/SectionIntro.tsx'

const projects = [
  {
    title: 'Our Values',
    description: 'SoCraTes fosters an inclusive community.',
    sections: [
      <>
        <h3>Inclusiveness</h3>
        <p>
          A primary goal of SoCraTes conference is to be inclusive to the largest number of contributors, with the most varied and diverse backgrounds possible.
        </p>
      </>,
      <>
        <h3>Safe Environment</h3>
        <p>
          We are committed to providing a friendly, safe, and welcoming environment for all, regardless of gender, sexual orientation, programming language,
          ability, ethnicity, socioeconomic status, and religion (or lack thereof).
        </p>
      </>,
      <>
        <h3>Positive Participation</h3>
        <p>We invite all those who participate in the SoCraTes conference and community to help us create safe and positive experiences for everyone.</p>
      </>,
      <>
        <h3>Be welcoming, friendly, and patient</h3>
        <br />
        Be respectful. Not all of us will agree with each other all the time, but disagreement is no excuse for poor behavior and poor manners. We might all
        experience some frustration now and then, but we cannot allow that frustration to turn into a personal attack.
      </>,
      <>
        <h3>Be kind and professional</h3>
        <br />
        Be aware of the effect your words may have on others. We are a community of professionals and we conduct ourselves professionally. Be kind to others. Do
        not insult or put down other participants. Harassment and other exclusionary behavior aren’t acceptable.
      </>,
      <>
        <p>
          <span className="italic">Credits</span>: These values are inspired by
          <a
            href="https://www.djangoproject.com/conduct/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary underline hover:text-secondary-dark">
            Django Code of Conduct
          </a>{' '}
          and{' '}
          <a href="http://citizencodeofconduct.org/" target="_blank" rel="noopener noreferrer" className="text-secondary underline hover:text-secondary-dark">
            Citizenship Code of Conduct
          </a>
          .{' '}
        </p>
        <br />
      </>,
    ],
    src: '/images/canyon.jpg',
    alt: 'canyon.jpg',
  },
  {
    title: 'Open Space',
    description: "Un'app mobile per la gestione del tempo e della produttività.",
    sections: [
      <>
        SoCraTes IT will be run as a three-day Open Space, facilitated by the outstanding facilitator from{' '}
        <a href="https://connexxo.com" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
          Connexxo
        </a>
        . We love working in self-organizing teams – well, Open Space is a simple technique for creating a self-organizing conference!
      </>,
      <>It runs on “four principles and one law” and has been used by thousands around the globe:</>,
      <ul className="list-disc list-inside">
        <li>Whoever comes is the right people</li>
        <li>Whenever it starts is the right time</li>
        <li>Whatever happens is the only thing that could have</li>
        <li>When it’s over it’s over</li>
      </ul>,
      <>
        <strong>The Law of Two Feet</strong>: “If at any time you find that you are neither learning nor contributing, use your two feet and move to some place
        more to your liking.”
      </>,
      <>
        Such a place might be another group, or even outside in the sunshine. No matter what, don’t sit there feeling miserable. It’s your conference, and
        you’re in charge of it.
      </>,
      <>
        In Open Space there are no leaders, no followers, definitely no talking-heads – only participants. Does this sound strange? Come prepared to create the
        event you need – starting by collaboratively building our agenda, full of topics we have passion for.
      </>,
      <>
        Don’t worry how this will work – just show up with your passion and <strong>Prepare To Be Surprised!</strong>
      </>,
    ],
    src: '/images/fiori.jpg',
    alt: 'fiori.jpg',
  },
  {
    title: 'Code of Conduct',
    description: 'Un sito web interattivo per la visualizzazione di dati in tempo reale.',
    sections: [
      <>
        SoCraTes IT follows the{' '}
        <a
          href="https://confcodeofconduct.com/" // Replace with your actual link if different
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary underline hover:text-secondary-dark">
          Conference Code of Conduct
        </a>{' '}
        laid out by several conference organisers around the globe. We ask that you read the full version before attending. You are required to cooperate with
        the code throughout the event to help ensure a safe environment for everybody.
      </>,
      <>
        Our conference is dedicated to providing a harassment-free experience for everyone, regardless of gender, age, sexual orientation, disability, physical
        appearance, body size, race, or religion. We do not tolerate harassment of participants in any form. Sexual language and imagery is not appropriate for
        any conference venue, including talks, workshops, parties, social media, and other online platforms. Participants violating these rules may be
        sanctioned or expelled without refund at the discretion of the organisers.
      </>,
      <>
        <strong>Scope</strong>
        <br />
        This code of conduct applies to the SoCraTes conference itself and to all related digital spaces, such as the wiki and mailing list.
      </>,
    ],
    src: '/images/foresta.jpg',
    alt: 'foresta.jpg',
  },
]

const Cards = () => {
  const [openModals, setOpenModals] = useState(Object.fromEntries(projects.map(p => [p.title, false])))

  function handleOpenModal(project: { title: string; description: string; src: string; alt: string }) {
    setOpenModals(prev => ({ ...prev, [project.title]: true }))
  }

  return (
    <div className="p-custom">
      <SectionIntro title={'About This Cards'} description={'Global Grand Event on Digital Design'} />
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {projects.map((project, index) => (
          <Fragment key={project.title}>
            <div key={index} className="group shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-102">
              <div
                className="cursor-pointer relative w-full h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}/${project.src})` }}
                onClick={() => handleOpenModal(project)}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/50 to-light/50 flex items-center justify-center transition-opacity duration-300">
                  <MajesticonsOpen className="size-20 text-white font-bold text-lg" />
                </div>
              </div>
              <CardContent project={project} openModal={handleOpenModal} />
            </div>
            {openModals[project.title] && <Dialog onClose={() => setOpenModals(prev => ({ ...prev, [project.title]: false }))} sections={project.sections} />}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Cards
