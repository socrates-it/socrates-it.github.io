import React, { useEffect } from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import { IconParkSolidDoubleBed, IconParkSolidSingleBed } from '~/icons/Icons.tsx'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import ContactForm from '~components/widgets/ContactForm.tsx'

export default function MailchimpForm() {
  const mailChimp_U = import.meta.env.PUBLIC_MAILCHIMP_U
  const mailChimp_ID = import.meta.env.PUBLIC_MAILCHIMP_ID

  const postUrl = `https://socrates-conference.us20.list-manage.com/subscribe/post?u=${mailChimp_U}&id=${mailChimp_ID}`

  return (
    <div className="flex flex-col items-center justify-center p-custom">
      <SectionIntro title="Join SoCraTes 2025" description="Fill the form and subscribe to SoCraTes IT" />

      <div className="max-w-2xl w-full bg-light rounded-lg p-xl shadow-lg">
        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => <ContactForm status={status} message={message} onValidated={formData => subscribe(formData)} />}
        />

        <div className="space-y-12 pb-custom">
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
