import SectionIntro from '~components/ui/SectionIntro.tsx'

const GoogleMap = () => {
  return (
    <div className="p-custom">
      <SectionIntro title="WHERE DO WE MEET" description="Get indications" />
      <iframe
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184362.47556991986!2d11.076162979177434!3d43.779839746557656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a680d2d6ad%3A0x93d57917efc72a03!2sFirenze%20FI!5e0!3m2!1sit!2sit!4v1743497017680!5m2!1sit!2sit"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="container-custom"></iframe>
    </div>
  )
}
export default GoogleMap
