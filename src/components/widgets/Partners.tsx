import React from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import { cn } from '~/common/css.ts'
import { MajesticonsOpen } from '~/assets/icons/Icons.tsx'

const partners = [
  {
    name: 'Socrates Conference CH',
    image: 'images/socrates-conference-switzerland.webp',
    alt: 'socrates-conference-switzerland',
    url: 'https://www.socrates-ch.org/',
  },
  { name: 'Socrates Day CH', image: 'images/socrates-day-switzerland.webp', alt: 'socrates-day-switzerland', url: 'https://socrates-day.ch/' },
  { name: 'Socrates UK', image: 'images/socrates-uk.png', alt: 'socrates-uk', url: 'http://socratesuk.org/' },
  { name: 'Socrates BE', image: 'images/socrates-be.png', alt: 'socrates-be', url: 'https://socratesbe.org/' },
  { name: 'Socrates Germany', image: 'images/socrates-germany.png', alt: 'socrates-germany', url: 'https://www.socrates-conference.de/home' },
  { name: 'Socrates France', image: 'images/socrates-france.png', alt: 'socrates-france', url: 'https://socrates-fr.github.io/' },
  { name: 'Socrates Austria', image: 'images/socrates-austria.svg', alt: 'socrates-austria', url: 'https://socrates-conference.at/' },
  { name: 'JSCraftCamp', image: 'images/jscraftcamp.png', alt: 'jscraftcamp', url: 'https://jscraftcamp.org/' },
  { name: 'Code Freeze', image: 'images/code-freeze.svg', alt: 'code-freeze', url: 'https://codefreeze.fi/' },
]

export default function Partners() {
  return (
    <div className="p-custom text-center bg-soft dark:bg-contrast">
      <SectionIntro title={'Partners'} description={'Global Grand Event on Digital Design\n'} />

      <div className="grid grid-cols-3 rounded-lg md:grid-cols-4 lg:grid-cols-5 gap-xl container-custom justify-items-center">
        {partners.map((partner, index) => (
          <a key={index} href={partner.url} className="size-20">
            <div
              className={cn(
                'bg-light size-full border border-light-contrast rounded-lg shadow-md dark:bg-light-contrast dark:border-light dark:text-light',
                'flex items-center justify-center ',
              )}>
              <div
                className={cn('rounded-4xl size-16 sm:size-20 bg-contain bg-center bg-no-repeat')}
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}/${partner.image})` }}
              />
            </div>
            <div className="italic mt-xs text-xs sm:text-sm">{partner.name}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
