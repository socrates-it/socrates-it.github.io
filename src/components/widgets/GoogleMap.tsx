import SectionIntro from '~components/ui/SectionIntro.tsx'
import { eventLocation } from '~/common/constants.ts'

const GoogleMap = () => {
  return (
    <div className="px-md md:px-xl pt-11 md:pt-23 pb-14 md:pb-26 bg-lightest">
      <div className="max-w-6xl mx-auto">
        <SectionIntro title="where do we meet" description="Get indications" />
        <iframe
          title="google map"
          src={eventLocation.maps}
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="container-custom"></iframe>
      </div>
    </div>
  )
}
export default GoogleMap
