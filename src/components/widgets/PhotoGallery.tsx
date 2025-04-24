import 'yet-another-react-lightbox/styles.css'
// import "yet-another-react-lightbox/plugins/thumbnails.css"
import 'react-photo-album/columns.css'

import React, { useState } from 'react'
import Lightbox, { type SlideImage } from 'yet-another-react-lightbox'
import PhotoAlbum, { type Photo, type ResponsiveParameter } from 'react-photo-album'

import socratesPhotos from '../../../public/images/processed/images.json'
const updatedUrlPhotos = socratesPhotos.map(photo => {
  return { src: `${import.meta.env.BASE_URL}/${photo.src}`, alt: photo.alt }
})

import { shuffleFY } from '~/common/array.ts'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import { cn } from '~/common/css.ts'
type DLPhoto = Photo & SlideImage

interface GridImageProps {
  src: string
  alt: string
}

const noOfColumns: ResponsiveParameter<number> = containerWidth => {
  if (containerWidth < 1024) return 2
  if (containerWidth < 1280) return 3
  return 4
}

const shuffledTeamPhotos = shuffleFY(updatedUrlPhotos)

const DLPhotoAlbum: React.FC = () => {
  const images: GridImageProps[] = [
    { src: 'https://placehold.co/400x400/EEE/31343C', alt: 'Placeholder 1' },
    { src: 'https://placehold.co/400x400/EEE/31343C', alt: 'Placeholder 2' },
    { src: 'https://placehold.co/400x400/EEE/31343C', alt: 'Placeholder 3' },
    { src: 'https://placehold.co/400x400/EEE/31343C', alt: 'Placeholder 4' },
    { src: 'https://placehold.co/400x400/EEE/31343C', alt: 'Placeholder 5' },
    { src: 'https://placehold.co/400x400/EEE/31343C', alt: 'Placeholder 6' },
  ]
  return (
    <div className="px-md md:px-xl pt-11 md:pt-23 pb-14 md:pb-26 bg-white">
      <SectionIntro title={'memories'} description={'Shared laughs, lessons learned, good times together'} />

      <div className="max-w-6xl mx-auto flex flex-col">
        {/*<PhotoAlbum*/}
        {/*  layout="columns"*/}
        {/*  columns={noOfColumns}*/}
        {/*  padding={10}*/}
        {/*  spacing={20}*/}
        {/*  photos={shuffledTeamPhotos}*/}
        {/*  onClick={({ index }) => setIndex(index)}*/}
        {/*  render={{*/}
        {/*    image: props => <img {...props} src={props.src} alt={props.alt} className=" shadow bg-light" />,*/}
        {/*  }}*/}
        {/*/>*/}

        {/*<Lightbox*/}
        {/*  styles={{ root: { '--yarl__color_backdrop': 'rgba(0, 0, 0, .8)' } }}*/}
        {/*  slides={shuffledTeamPhotos}*/}
        {/*  open={index >= 0}*/}
        {/*  index={index}*/}
        {/*  close={() => setIndex(-1)}*/}
        {/*  plugins={[]}*/}
        {/*  controller={{ closeOnBackdropClick: true }}*/}
        {/*/>*/}
        <div
          className={cn(
            'grid gap-10',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', // Responsive grid layout
          )}>
          {updatedUrlPhotos.map((image, index) => (
            <div className="flex justify-center items-center">
              <img src={image.src} alt={image.alt} className="w-3/4 sm:w-full object-cover aspect-4/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DLPhotoAlbum
