import SectionIntro from '~components/ui/SectionIntro.tsx'
import { IconParkSolidDoubleBed, IconParkSolidSingleBed } from '~/assets/icons/Icons.tsx'

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center justify-center p-custom">
      <SectionIntro title="Join SoCraTes 2025" description="Fill the form and subscribe to SoCraTes IT" />

      <div className="max-w-2xl w-full bg-light rounded-lg p-xl shadow-lg">
        <form className="space-y-6">
          <p className="text-sm">After submitting you will receive an email with the hotel registration form.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-muted border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 bg-muted border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 bg-muted border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
            />
          </div>

          <div className="space-y-4 text-sm text-dark">
            <div>
              <strong>Permissions</strong>
              <p className="mt-1">
                I wish to receive email communications from SoCraTes IT, including news about our conferences. We use Mailchimp as our marketing platform. By
                clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing.{' '}
                <a href="https://mailchimp.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Learn more about Mailchimp's privacy practices here.
                </a>
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="privacy" required className="mt-1" />
              <label htmlFor="privacy" className="text-sm">
                Yes, I declare to have read and understood SoCraTes IT’s Privacy Policy.
              </label>
            </div>
          </div>

          <button type="submit" className="uppercase w-full btn-primary">
            register
          </button>
        </form>

        <div className="space-y-12 py-custom">
          {/* Included Section */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-xl font-bold">What is included in the cost?</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-dark">
              <li>
                <strong>Two nights full-board:</strong> breakfast, lunch, dinner and snack buffet all day (vegetarian and gluten-free food included!)
              </li>
              <li>Use of the congress rooms</li>
              <li>
                The hotel has both twin and double rooms. If there is someone you are willing to share the room with, feel free to book the double room. If you
                don’t know anyone, don’t worry: sign in to the{' '}
                <a href="https://softwarecrafters.slack.com/messages/italian" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Software Crafters #italian channel
                </a>{' '}
                on Slack and find a suitable roommate.
              </li>
              <li>City tax</li>
            </ul>
          </div>

          {/* Rooms Section */}
          <div>
            {/*<h3 className="bg-primary text-light text-center text-xl rounded-t-lg p-sm font-semibold  uppercase">Rooms</h3>*/}
            <div className="grid md:grid-cols-2 mx-auto">
              <div className="bg-light hover:bg-subtle flex flex-col items-center justify-center">
                <h4 className="font-medium">Shared double room</h4>
                <IconParkSolidDoubleBed className="text-primary" />
                <p className="mt-2 text-subtitle italic">from € 260 per attendee</p>
              </div>

              <div className="bg-light flex flex-col items-center text-center">
                <h4 className="font-medium">Single room</h4>
                <IconParkSolidSingleBed className="text-primary" />
                <p className="mt-2 text-subtitle italic">from € 320 per attendee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
