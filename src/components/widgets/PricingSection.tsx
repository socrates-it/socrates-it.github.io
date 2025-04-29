import React, { useState } from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import { cn } from '~/common/css.ts'

const plans = [
  {
    name: 'Supporter',
    price: '€500 + VAT',
    features: [
      'Your logo on the website',
      'Mentions on Twitter',
      'Your name in the thank you email to participants of SoCraTes IT',
      'A mention at the beginning and end of the conference',
    ],
  },
  {
    name: 'Sponsor',
    price: '€1000 + VAT',
    features: ['Everything in Basic, plus:', 'Your merchandise available to everyone at the conference'],
  },
  {
    name: 'Fan',
    price: 'Pay what you like',
    features: [
      'Our goal is to reduce the final ticket price for all attendees. Feel free to contribute as you wish! Contact us to agree what we can do for you!',
    ],
  },
]

export default function PricingSection() {
  return (
    <div className="text-default text-center px-md md:px-xl pt-12 md:pt-24">
      <SectionIntro title="sponsorship program" description="Find a plan that fits your business best" color="lightest" />
      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn('rounded-lg p-6 text-left bg-light', {
              'bg-lightest': index === 0 || index === 2,
              'bg-secondary': index === 1,
            })}>
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p
              className={cn('text-3xl text-white font-bold mt-2 text-center p-3 rounded-lg', {
                'bg-primary': index === 0 || index === 1,
                'bg-lightest-contrast text-2xl': index === 2,
              })}>
              {plan.price}
            </p>
            {/*<button*/}
            {/*  className={cn('mt-6', {*/}
            {/*    'btn-primary': index === 0 || index === 2,*/}
            {/*    'btn-secondary': index === 1,*/}
            {/*  })}>*/}
            {/*  Schedule A Call →*/}
            {/*</button>*/}

            {index !== 2 ? (
              <>
                <h4 className="mt-6 font-semibold">What's included:</h4>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={cn('flex items-center', {
                        'text-default': index === 0 || index === 2,
                      })}>
                      ✅ <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="mt-6 font-semibold">
                Our goal is to reduce the final ticket price for all attendees. Feel free to contribute as you wish! Contact us to agree what we can do for you!
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
