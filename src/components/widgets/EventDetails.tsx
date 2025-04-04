import React, { Fragment, useEffect, useState } from 'react'

import {
  MdiLightHeart as Heart,
  WpfGroup as Users,
  MaterialSymbolsLightMailOutline as Mail,
  GridiconsTrophy as Trophy,
  MdiLightMessage as MessageSquare,
  PhImagesThin as Images,
} from '~/assets/icons/Icons.tsx'

const EventDetails = () => {
  const details = [
    {
      icon: <Heart />,
      title: 'WST. CONFERENCE CENTER',
      subtitle: 'SAN FRANCISCO, CA',
    },
    {
      icon: <Users />,
      title: 'FEBRUARY 14 - 19, 2023',
      subtitle: '09:00 AM – 05:00 PM',
    },
    {
      icon: <Trophy />,
      title: '343 AVAILABLE SEATS',
      subtitle: 'HURRY UP! FEW TICKETS ARE LEFT',
    },
    {
      icon: <Mail />,
      title: 'FREE LUNCH & SNACKS',
      subtitle: 'DON’T MISS IT',
    },
  ]

  return (
    <div className="bg-green-800 text-white p-custom">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {details.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-3">{item.icon}</div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm mt-1 opacity-90">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventDetails
