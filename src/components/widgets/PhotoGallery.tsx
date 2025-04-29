import React from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import { cn } from '~/common/css.ts'

interface PhotoGalleryProps {
  photos: { src: string; alt: string }[]
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  return (
    <div className="px-md md:px-xl pt-11 md:pt-23 pb-14 md:pb-26 bg-white">
      <SectionIntro title={'memories'} description={'Shared laughs, lessons learned, good times together'} />

      <div className="max-w-6xl mx-auto flex flex-col">
        <div className={cn('grid gap-10', 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3')}>
          {photos.map(image => (
            <div key={image.src} className="flex justify-center items-center">
              <img src={image.src} alt={image.alt} className="w-3/4 sm:w-full object-cover aspect-4/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery
