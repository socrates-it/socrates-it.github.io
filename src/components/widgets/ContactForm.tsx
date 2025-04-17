import React, { type FormEvent, useEffect, useRef, useState } from 'react'

interface ContactFormProps {
  status: 'error' | 'success' | 'sending' | null
  message: string | Error | null
  onValidated: (formData: any) => void
}

export default function ContactForm({ status, message, onValidated }: ContactFormProps) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    email &&
      firstName &&
      lastName &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      })
  }

  useEffect(() => {
    if (status === 'success') {
      setEmail('')
      setFirstName('')
      setLastName('')
    }
  }, [status])

  return (
    <div>
      <form className="space-y-6" onSubmit={e => handleSubmit(e)}>
        <p className="text-sm">After submitting you will receive an email with the hotel registration form.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-muted border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 bg-muted border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 bg-muted border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
            onChange={e => setLastName(e.target.value)}
            value={lastName}
            required
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
      <div
        className={`
      h-0 my-lg transition-all duration-300
      ${status && 'h-16'}
    `}>
        {status && (
          <div
            className={`
      p-sm my-custom rounded-lg border text-sm transition-all duration-300
      ${status === 'sending' ? 'bg-muted text-muted-foreground border-transparent animate-pulse' : ''}
      ${status === 'success' ? 'bg-green-100 text-green-800 border-green-200' : ''}
      ${status === 'error' ? 'bg-red-100 text-red-800 border-red-200' : ''}
    `}>
            {status === 'sending' && 'Sending...'}
            {status === 'error' && message && <span dangerouslySetInnerHTML={{ __html: message }} />}
            {status === 'success' && message && <span dangerouslySetInnerHTML={{ __html: message }} />}
          </div>
        )}
      </div>
    </div>
  )
}
