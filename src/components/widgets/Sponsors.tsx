import React from 'react'

const sponsors = [
  { name: 'Techno', image: '/path-to-techno-logo.png' },
  { name: 'Studio', image: '/path-to-studio-logo.png' },
  { name: 'Rofhalatan', image: '/path-to-rofhalatan-logo.png' },
  { name: 'Education', image: '/path-to-education-logo.png' },
]

export default function Sponsors() {
  return (
    <div className="bg-gray-900 text-white py-16 text-center">
      <h2 className="text-4xl font-bold">SPONSORS</h2>
      <div className="w-16 h-1 bg-pink-600 mx-auto mt-2 mb-6"></div>
      <p className="text-lg text-gray-400 mb-8">Global Grand Event on Digital Design</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="border border-gray-700 rounded-lg p-6 flex justify-center items-center h-40">
            <img src={sponsor.image} alt={sponsor.name} className="max-h-full max-w-full opacity-75" />
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">BECOME A SPONSOR</button>
      </div>
    </div>
  )
}
