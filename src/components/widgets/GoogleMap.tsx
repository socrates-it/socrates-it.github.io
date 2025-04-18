import SectionIntro from '~components/ui/SectionIntro.tsx'

const GoogleMap = () => {
  return (
    <div className="p-custom">
      <SectionIntro title="WHERE DO WE MEET" description="Get indications" />
      <iframe
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2866.7065039823165!2d12.5801044!3d44.0687688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cc377163d5c69%3A0x342e6d3ad7ed633a!2sHotel%20Ambasciatori!5e0!3m2!1sen!2sit!4v1744970000131!5m2!1sen!2sit"
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
