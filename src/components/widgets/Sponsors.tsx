import React from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'

const sponsors = [
  { name: 'Techno', image: 'src/assets/icons/astro.svg' },
  { name: 'Studio', image: 'src/assets/icons/astro.svg' },
  { name: 'Rofhalatan', image: 'src/assets/icons/astro.svg' },
  { name: 'Education', image: 'src/assets/icons/astro.svg' },
]

export default function Sponsors() {
  return (
    <div className="bg-light text-default p-container text-center">
      <SectionIntro title={'Sponsors'} description={'Global Grand Event on Digital Design\n'} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto pb-20">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="border border-gray-700 rounded-lg p-6 flex justify-center items-center h-40">
            <img src={sponsor.image} alt={sponsor.name} className="max-h-full max-w-full opacity-75" />
          </div>
        ))}
      </div>

      <div>
        <p className="text-xl mb-2">Download the sponsorship prospect.</p>
        <p className="text-md text-subtitle">
          Feel free to contact us at
          <span className="italic text-secondary"> socrates.italia@gmail.com </span>
          for any further detail.
        </p>
      </div>

      <div className="mt-10">
        <button className="btn-primary">BECOME A SPONSOR</button>
      </div>
    </div>
  )
}
