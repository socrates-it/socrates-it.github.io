import React from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'

const sponsors = [
  { name: 'Techno', image: 'src/icons/astro.svg' },
  { name: 'Studio', image: 'src/icons/astro.svg' },
  { name: 'Rofhalatan', image: 'src/icons/astro.svg' },
  { name: 'Education', image: 'src/icons/astro.svg' },
]

export default function Sponsors() {
  return (
    <div className="p-custom text-center bg-soft dark:bg-contrast">
      <SectionIntro title={'SPONSORS'} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-md container-custom pb-20">
        {sponsors.map((sponsor, index) => (
          <div>
            <div
              key={index}
              className="shadow-md dark:shadow-light/20 border bg-light border-light-contrast rounded-lg p-6 flex justify-center items-center h-40">
              <img src={sponsor.image} alt={sponsor.name} className="max-h-full max-w-full opacity-75" />
            </div>
            <div className="italic text-xs sm:text-sm dark:text-light">{sponsor.name}</div>
          </div>
        ))}
      </div>

      <div>
        <p className="text-xl mb-2 dark:text-light">Download the sponsorship prospect.</p>
        <p className="text-md text-subtitle dark:text-light">
          Feel free to contact us at
          <span className="italic text-primary"> socrates.italia@gmail.com </span>
          for any further detail.
        </p>
      </div>

      <div className="mt-10">
        <button className="btn-primary">
          <a href="mailto:socrates-it@googlegroups.com">BECOME A SPONSOR</a>
        </button>
      </div>
    </div>
  )
}
