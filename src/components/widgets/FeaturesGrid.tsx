import React, { useEffect, useState } from 'react'
import {
  GridiconsTrophy as Trophy,
  MaterialSymbolsLightMailOutline as Mail,
  MdiLightHeart as Heart,
  MdiLightMessage as MessageSquare,
  PhImagesThin as Images,
  WpfGroup as Users,
} from '~/icons/Icons.tsx'
import SectionIntro from '~components/ui/SectionIntro.tsx'

const features = [
  { title: 'Get Inspired', icon: <Heart />, color: 'text-pink-500' },
  { title: 'Meet New Faces', icon: <Images />, color: 'text-pink-500' },
  { title: 'Fresh Tech Insights', icon: <Mail />, color: 'text-pink-500' },
  { title: 'Networking Session', icon: <Trophy />, color: 'text-pink-500' },
  { title: 'Global Event', icon: <Users />, color: 'text-pink-500' },
  { title: 'Free Swags', icon: <MessageSquare />, color: 'text-pink-500' },
]

const FeatureGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)
  const [columns, setColumns] = useState(3) // Default to 3 columns

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 768) {
        setColumns(3) // md+: 3 columns
      } else {
        setColumns(2) // sm and below: 2 columns
      }
    }

    updateColumns() // Set on mount
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  return (
    <div className="container-custom p-xl">
      <SectionIntro title={'WHY YOU CHOOSE US?'} description={'Global Grand Event on Digital Design'} />
      <div className="grid grid-cols-2 md:grid-cols-3 text-default">
        {features.map((feature, index) => {
          const totalItems = features.length
          const isTopRow = index < columns
          const isBottomRow = index >= totalItems - columns
          const isLeftmost = index % columns === 0
          const isRightmost = index % columns === columns - 1

          return (
            <div
              key={index}
              className={`group p-6 border-[0.5px] border-lighter-contrast flex flex-col items-center text-center transition-[background-color] duration-300
              ${isTopRow ? 'border-t-transparent' : ''}
              ${isBottomRow ? 'border-b-transparent' : ''}
              ${isLeftmost ? 'border-l-transparent' : ''}
              ${isRightmost ? 'border-r-transparent' : ''}
              ${hoveredIndex === index ? 'bg-subtle' : 'bg-white'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}>
              <div className={`text-default mb-3 group-hover:text-accent transition-colors duration-300`}>{feature.icon}</div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-gray-400 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur commodo ligula eget dolor.</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeatureGrid
