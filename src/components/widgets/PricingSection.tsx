import React, { useState } from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import { cn } from '~/common/css.ts'

const plans = [
  {
    name: 'Basic',
    price: '$49',
    description: 'Start building your team and hire the most talented workers in the world.',
    features: ['Unlimited placeholder texts', 'Consectetur adipiscing elit', 'Excepteur sint occaecat cupidatat', 'Officia deserunt mollit anim'],
    buttonColor: 'bg-gray-800',
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'Start building your team and hire the most talented workers in the world.',
    features: [
      'Everything in Basic, plus:',
      'Unlimited placeholder texts',
      'Consectetur adipiscing elit',
      'Excepteur sint occaecat cupidatat',
      'Officia deserunt mollit anim',
      'Excepteur sint occaecat cupidatat',
    ],
    buttonColor: 'bg-blue-600',
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    description: 'Start building your team and hire the most talented workers in the world.',
    features: [
      'Everything in Pro, plus:',
      'Unlimited placeholder texts',
      'Consectetur adipiscing elit',
      'Excepteur sint occaecat cupidatat',
      'Officia deserunt mollit anim',
    ],
    buttonColor: 'bg-gray-800',
  },
]

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('Monthly')

  return (
    <div className="py-16 text-default text-center px-10">
      <SectionIntro title="Get Tickets" description="Find a plan that fits your business best" />

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn('rounded-lg p-6 text-left bg-light', {
              ' bg-light': index === 0,
              'bg-primary text-white': index === 1,
              'bg-gray-200': index === 2,
            })}>
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-4xl  font-bold mt-2">{plan.price}</p>
            <p className=" mt-2">{plan.description}</p>
            <button
              className={cn('mt-6', {
                'btn-primary': index === 0 || index === 2,
                'btn-secondary': index === 1,
              })}>
              Schedule A Call →
            </button>

            <h4 className="mt-6 font-semibold">Features include:</h4>
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
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <p className="text-lg font-light italic text-gray-300">
          "The service helped me find the perfect match. Two clear benefits I gained are a good assessment of my needs and a pool of reliable potential
          talents."
        </p>
        <p className="mt-4 font-semibold text-gray-400">Patrick Mills - CEO, BaseNet</p>
      </div>
    </div>
  )
}
