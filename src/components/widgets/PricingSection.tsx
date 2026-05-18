import React from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import { cn } from '~/common/css.ts'

type Plan = {
  name: string
  price: string
  priceClassName?: string
  features: { label: string; withoutTick?: boolean }[]
}
const plans: Plan[] = [
  {
    name: 'Sponsor',
    price: '€1250 + VAT',
    features: [
      { label: 'Your logo on the website' },
      { label: 'Mentions on our social media channels' },
      { label: 'Your name in the thank you email to participants of SoCraTes Italy' },
      { label: 'A mention at the beginning and end of the conference' },
      { label: 'Your merchandise available to everyone at the conference' },
    ],
  },
  {
    name: 'Fan',
    price: 'Pay what you like',
    priceClassName: 'bg-lightest-contrast text-2xl',
    features: [
      {
        label:
          'Our goal is to reduce the final ticket price for all attendees. Feel free to contribute as you wish! Contact us to agree what we can do for you!',
        withoutTick: true,
      },
    ],
  },
]

export default function PricingSection() {
  return (
    <div className="text-default text-center px-md md:px-xl pt-12 md:pt-24">
      <SectionIntro title="sponsorship program" description="Find a plan that fits your business best" color="lightest" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn('rounded-lg p-6 text-left bg-light', {
              'bg-lightest': index % 2 === 0,
              'bg-secondary': index % 2 === 1,
            })}>
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className={cn('text-3xl text-white font-bold mt-2 text-center p-3 rounded-lg', plan.priceClassName ?? 'bg-primary')}>{plan.price}</p>

            {index !== 2 ? (
              <>
                <h4 className="mt-6 font-semibold">What's included:</h4>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={cn('flex items-center', {
                        'text-default': index % 2 === 0,
                      })}>
                      {feature.withoutTick ? '' : '✅ '}
                      <span className="ml-2">{feature.label}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="mt-6">{plan.features[0].label}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
