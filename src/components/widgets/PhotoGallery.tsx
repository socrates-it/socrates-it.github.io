import 'yet-another-react-lightbox/styles.css'
// import "yet-another-react-lightbox/plugins/thumbnails.css"
import 'react-photo-album/columns.css'

import React, { useState } from 'react'
import Lightbox, { type SlideImage } from 'yet-another-react-lightbox'
import PhotoAlbum, { type Photo, type ResponsiveParameter } from 'react-photo-album'

import socratesPhotos from '../../../public/images/processed/images.json'
const updatedUrlPhotos = socratesPhotos.map(photo => {
  return { ...photo, src: `${import.meta.env.BASE_URL}/${photo.src}` }
})

import { shuffleFY } from '~/common/array.ts'
import SectionIntro from '~components/ui/SectionIntro.tsx'
type DLPhoto = Photo & SlideImage

const noOfColumns: ResponsiveParameter<number> = containerWidth => {
  if (containerWidth < 1024) return 2
  if (containerWidth < 1280) return 3
  return 4
}

const shuffledTeamPhotos = shuffleFY(updatedUrlPhotos)

const DLPhotoAlbum: React.FC = () => {
  const [index, setIndex] = useState(-1)

  console.log(shuffledTeamPhotos)
  return (
    <div className="p-custom">
      <SectionIntro title={'MEMORIES'} description={'Shared laughs, lessons learned, good times together.'} />

      <div className="max-w-6xl mx-auto flex flex-col p-xl">
        <PhotoAlbum
          layout="columns"
          columns={noOfColumns}
          padding={20}
          spacing={20}
          photos={shuffledTeamPhotos}
          onClick={({ index }) => setIndex(index)}
          render={{
            image: props => <img {...props} src={props.src} alt={props.alt} className="p-10 shadow bg-light dark:bg-contrast" />,
          }}
        />

        <Lightbox
          styles={{ root: { '--yarl__color_backdrop': 'rgba(0, 0, 0, .8)' } }}
          slides={shuffledTeamPhotos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[]}
          controller={{ closeOnBackdropClick: true }}
        />
      </div>
    </div>
  )
}

export default DLPhotoAlbum
