import SectionIntro from '~components/ui/SectionIntro.tsx'

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center justify-center p-custom">
      <SectionIntro title="Drop A Message" description="Global Grand Event on Digital Design" />
      <div className="max-w-2xl w-full bg-light rounded-lg p-xl shadow-lg">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 bg-muted border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-muted border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 bg-muted border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full p-3 bg-muted border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"></textarea>
          <button type="submit" className="w-full btn-primary">
            SEND US NOW
          </button>
        </form>
      </div>
    </div>
  )
}
