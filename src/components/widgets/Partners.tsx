import React from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import { cn } from '~/common/css.ts'
import { prependBasePath } from '~/common/constants.ts'

const partners = [
  {
    name: 'Socrates Conference CH',
    image: '/images/socrates-conference-switzerland.webp',
    alt: 'socrates-conference-switzerland',
    url: 'https://www.socrates-ch.org/',
  },
  { name: 'Socrates Day CH', image: '/images/socrates-day-switzerland.webp', alt: 'socrates-day-switzerland', url: 'https://socrates-day.ch/' },
  { name: 'Socrates UK', image: '/images/socrates-uk.png', alt: 'socrates-uk', url: 'http://socratesuk.org/' },
  { name: 'Socrates BE', image: '/images/socrates-be.png', alt: 'socrates-be', url: 'https://socratesbe.org/' },
  { name: 'Socrates Germany', image: '/images/socrates-germany.png', alt: 'socrates-germany', url: 'https://www.socrates-conference.de/home' },
  { name: 'Socrates France', image: '/images/socrates-france.png', alt: 'socrates-france', url: 'https://socrates-fr.github.io/' },
  { name: 'Socrates Austria', image: '/images/socrates-austria.svg', alt: 'socrates-austria', url: 'https://socrates-conference.at/' },
  { name: 'JSCraftCamp', image: '/images/jscraftcamp.svg', alt: 'jscraftcamp', url: 'https://jscraftcamp.org/' },
  { name: 'Code Freeze', image: '/images/code-freeze.svg', alt: 'code-freeze', url: 'https://codefreeze.fi/' },
]

export default function Partners() {
  return (
    <div className="px-md md:px-xl pt-12 md:pt-24 pb-14 md:pb-26 text-center bg-lightest">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full sm:w-2/5 flex ">
          <SectionIntro
            title={'partners'}
            description="We're proud to collaborate with and be supported by a vibrant community"
            dimensions={'text-3xl md:text-4xl'}
            margin={'mb-xl sm:mb-0'}
            position={'text-left w-3/4'}
          />
        </div>
        <div className="w-full sm:w-3/5">
          <div className="grid grid-cols-3 rounded-lg gap-10 justify-items-center">
            {partners.map((partner, index) => (
              <div className="size-full  flex flex-col items-center justify-center">
                <a key={index} href={partner.url} className="size-full flex justify-center items-start">
                  <div className={cn('bg-white w-full rounded-lg shadow-md', 'flex items-center justify-center p-xs mb-xs')}>
                    <div
                      className={cn('rounded-4xl size-16 sm:size-20 bg-contain bg-center bg-no-repeat')}
                      style={{ backgroundImage: `url(${prependBasePath(partner.image)})` }}
                    />
                  </div>
                  {/*<div className="italic text-xs sm:text-sm">{partner.name}</div>*/}
                </a>
                <div className="h-full">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
