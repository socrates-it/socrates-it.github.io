import React from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import { cn } from '~/common/css.ts'
import PricingSection from '~components/widgets/PricingSection.tsx'
import { prependBasePath } from '~/common/constants.ts'

type Sponsor = { name: string; image: string; alt: string; url: string; type: 'square' | 'rectangle' }
const sponsors: Sponsor[] = [
  { name: 'doubleloop', image: '/images/sponsors/doubleloop.png', alt: 'doubleloop', url: 'https://doubleloop.io/', type: 'rectangle' },
  { name: 'Connexxo', image: '/images/sponsors/connexxo.png', alt: 'Connexxo', url: 'https://www.connexxo.com', type: 'rectangle' },
  { name: 'CodicePlastico', image: '/images/sponsors/codiceplastico.png', alt: 'CodicePlastico', url: 'https://codiceplastico.com/it/', type: 'rectangle' },
  { name: 'QMates', image: '/images/sponsors/qmates.jpg', alt: 'QMates', url: 'https://qmates.tech/', type: 'rectangle' },
]
const supporters: Sponsor[] = [{ name: 'Intré', image: '/images/sponsors/intre.png', alt: 'Intré', url: 'http://www.intre.it', type: 'rectangle' }]

export default function Sponsors() {
  return (
    <>
      <div id="sponsors" className="px-md md:px-xl pt-12 md:pt-24 pb-14 md:pb-16 text-center bg-accent">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center">
          <div className="w-full sm:w-2/5 flex">
            <SectionIntro
              title={'sponsors'}
              color={'lightest'}
              description="Grateful for the generous commitment that powers this event"
              dimensions={'text-3xl md:text-4xl'}
              position={'text-left w-3/4'}
            />
          </div>
          <div className="w-full sm:w-3/5">
            <div className="flex-col">
              {supporters.length > 0 && (
                <div className="mb-10">
                  <h3 className="font-bold capitalize text-white text-2xl md:text-3xl">Sponsors</h3>
                </div>
              )}
              <div className="grid grid-cols-3 rounded-lg gap-10 justify-items-center">
                {sponsors.map((sponsor, index) => (
                  <SponsorSection key={index} index={index} {...sponsor} />
                ))}
              </div>
            </div>
            {supporters.length > 0 && (
              <div className="flex-col mt-10">
                <div className="mb-10">
                  <h3 className="font-bold capitalize text-white text-2xl md:text-3xl">Supporters</h3>
                </div>
                <div className="grid grid-cols-3 rounded-lg gap-10 justify-items-center">
                  {supporters.map((sponsor, index) => (
                    <SponsorSection key={index} index={index} {...sponsor} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div id="sponsors-program" className="px-md md:px-xl pb-14 md:pb-26 text-center bg-contrast">
        <PricingSection />
        <div className="mt-20 md:mt-30 text-white">
          <p className="text-xl mb-2">
            Download the{' '}
            <a href={prependBasePath('/pdf/Socrates%20IT%202024%20-%20sponsorship%20info.pdf')} target="_blank" className="text-secondary">
              sponsorship prospect
            </a>
            .
          </p>
          <p className="text-md text-subtitle">
            Feel free to contact us at <span className="italic text-secondary">socrates.italia@gmail.com</span> for any further detail.
          </p>
        </div>
        <div className="mt-10">
          <a href="mailto:socrates-it@googlegroups.com">
            <button className="btn-primary capitalize">become a sponsor</button>
          </a>
        </div>
      </div>
    </>
  )
}

function SponsorSection({ index, ...sponsor }: Sponsor & { index: number }) {
  return (
    <div className="size-full  flex flex-col items-center justify-center">
      <a key={index} href={sponsor.url} className="size-full flex justify-center items-start">
        <div className={cn('bg-white size-full rounded-lg shadow-md', 'flex items-center justify-center p-xs mb-xs')}>
          <Logo {...sponsor} />
        </div>
      </a>
      <div className="h-full text-light">{sponsor.name}</div>
    </div>
  )
}

function Logo(sponsor: Sponsor) {
  if (sponsor.type === 'rectangle')
    return (
      <div
        className={cn('rounded-4xl h-16 sm:h-20 w-32 sm:w-40 bg-contain bg-center bg-no-repeat')}
        style={{ backgroundImage: `url(${prependBasePath(sponsor.image)})` }}
      />
    )
  if (sponsor.type === 'square')
    return (
      <div
        className={cn('rounded-4xl size-16 sm:size-20 bg-contain bg-center bg-no-repeat')}
        style={{ backgroundImage: `url(${prependBasePath(sponsor.image)})` }}
      />
    )
}
