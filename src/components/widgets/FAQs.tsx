import React from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'

const faqs = [
  {
    question: 'How much is this going to cost?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.',
  },
  {
    question: 'What is the difference between the basic and pro plans?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.',
  },
  {
    question: 'Do you have student or non-profit discounts?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.',
  },
  {
    question: 'How is the price determined?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.',
  },
  {
    question: 'Have more questions?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.',
  },
]

export default function FAQ() {
  return (
    <div className="max-w-6xl mx-auto p-container">
      <SectionIntro title={'Frequently asked questions'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} />
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <p className="text-subtitle">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
