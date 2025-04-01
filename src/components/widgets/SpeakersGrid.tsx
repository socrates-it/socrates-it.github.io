import React, { type JSX } from 'react'
import { MdiGithub, MdiLinkedin, RiBlueskyFill } from '~/assets/icons/Icons.tsx'
import SectionIntro from '~components/ui/SectionIntro.tsx'

const teamMembers = [
  {
    name: 'Jonathon Doe',
    role: 'Product Designer, Tesla',
    image: 'src/assets/images/canyon.jpg',
    socials: { github: 'https://github.com/', linkedin: 'https://linkedin.com/', bluesky: 'https://bluesky.com/' },
  },
  {
    name: 'Patric Green',
    role: 'Front-end Developer, Dropbox',
    image: 'src/assets/images/fiori.jpg',
    socials: { github: 'https://github.com/', linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Paul Kowalsky',
    role: 'Lead Developer, Google',
    image: 'src/assets/images/foresta.jpg',
    socials: { github: 'https://github.com/', linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Jhon Doe',
    role: 'UI/UX Designer, Apple',
    image: 'src/assets/images/fiori.jpg',
    socials: { github: 'https://github.com/', linkedin: 'https://linkedin.com/', bluesky: 'https://bluesky.com/' },
  },
]

const iconMap: Record<string, JSX.Element> = {
  github: <MdiGithub className="size-full" />,
  linkedin: <MdiLinkedin className="size-full" />,
  bluesky: <RiBlueskyFill className="size-full" />,
}

export default function SpeakersGrid() {
  return (
    <div className="bg-highlight p-container">
      <SectionIntro title={"Who's Speaking?\n"} description={'Global Grand Event on Digital Design'} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl container mx-auto overflow-hidden">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group overflow-hidden shadow-lg hover:scale-98 transition-transform duration-300">
            {/* Image */}
            <div className="w-full h-72">
              {/* Overlay */}
              <div
                className="w-full h-full transition-transform bg-cover bg-center duration-300 bg-opacity-80 p-4"
                style={{ backgroundImage: `url(${member.image})` }}></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-gray-900/50 transition-colors duration-300" />
              <div className="relative bottom-full -translate-y-10 labg-transparent p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ul className="flex justify-end space-x-2">
                  {Object.entries(member.socials).map(([key, url]) => (
                    <li key={key} className="size-8 bg-primary rounded text-page">
                      <a href={url} target="_blank" rel="noopener noreferrer" className="w-full">
                        {iconMap[key]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative w-4/5 bottom-32 bg-light py-4 flex flex-col grow p-2">
                <div className="bg-light">{member.name}</div>
                <div className="bg-light text-xs text-gray-500">{member.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
