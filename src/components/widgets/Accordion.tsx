import React, { useState } from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import { MdiLightHeart, MynauiChevronDownCircle, PhImagesThin, WpfGroup } from '~/assets/icons/Icons.tsx'
import { cn } from '~/common/css.ts'

const accordionData = [
  { icon: <MdiLightHeart />, title: 'Get Inspired', content: 'Explore creative ideas and insights to spark your imagination.' },
  { icon: <WpfGroup />, title: 'Meet New Faces', content: 'Connect with like-minded professionals and expand your network.' },
  { icon: <PhImagesThin />, title: 'Free Swags', content: 'Enjoy exclusive merchandise and gifts from our sponsors.' },
]

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<null | number>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <SectionIntro title={'About This Events'} description={'Global Grand Event on Digital Design'} />
      <div>
        {accordionData.map((item, index) => (
          <div key={index} className="shadow-lg group">
            <button
              className={cn(
                'h-20 w-full text-heading text-lg font-semibold p-4 cursor-pointer ',
                'border border-primary group-first:rounded-t-2xl transition-colors duration-300',
                'flex justify-between items-center ',
                'bg-highlight',
                { 'border-b-primary': openIndex === index, 'border-b-transparent': openIndex !== index },
              )}
              onClick={() => toggleAccordion(index)}>
              <div className="flex items-center justify-between">
                <div className="mr-2">{item.icon}</div>
                {item.title}
              </div>
              <div className="size-4  flex items-center justify-between">
                <div className="w-full h-0.5 bg-default" />
                <div
                  className={`w-0.5 h-full bg-default -translate-x-2 transition-opacity duration-75 ${openIndex !== index ? 'opacity-100' : 'opacity-0 '}`}
                />
              </div>
            </button>
            <div
              className={cn(
                'border-x border-x-primary group-last:border-b group-last:border-b-primary',
                'transition-[height] overflow-hidden text-default duration-300',
                'flex justify-between items-center ',
                'bg-light border-t-0',
                { 'h-20 ': openIndex === index, 'h-0': openIndex !== index },
              )}>
              <p
                className={cn('relative pl-4 transition-colors duration-100', {
                  'text-default': openIndex === index,
                  'text-transparent': openIndex !== index,
                })}>
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
