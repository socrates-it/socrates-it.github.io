import React, { useState } from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'

const eventData: Record<
  string,
  {
    time: string
    title: string
    description: string
  }[]
> = {
  'October 2': [
    {
      time: '3:00 pm',
      title: 'Welcome In!',
      description: 'We kick off SoCraTes IT with a good beer and networking activities',
    },
  ],
  'October 3': [
    {
      time: '9am - 11:30am',
      title: 'Advanced UI/UX Design Techniques',
      description: 'Exploring the latest trends in UI/UX design with a hands-on approach...',
    },
    {
      time: '2pm - 4pm',
      title: 'Typography in Digital Media',
      description: 'How typography impacts user experience and readability...',
    },
  ],
  'October 4': [
    {
      time: '11am - 1pm',
      title: 'Color Psychology in Branding',
      description: 'Understanding the role of colors in brand perception...',
    },
  ],
  'October 5': [
    {
      time: '10am - 12:30pm',
      title: 'Web Design Principles and Best Practices',
      speaker: 'David Warner',
      description: 'Consectetur adipiscing elit. Quod distinctio impedit sint accusantium ducimus...',
      location: 'Hall 1, Building A, Golden Street, South Africa',
    },
    {
      time: '2pm - 4pm',
      title: 'Interactive Web Animations',
      speaker: 'Lisa Brown',
      description: 'Using CSS & JS to create smooth, engaging animations for modern web apps...',
      location: 'Tech Lab, Silicon Valley',
    },
  ],
}

const EventSchedule = () => {
  const [selectedDate, setSelectedDate] = useState('October 2')

  return (
    <div className="min-h-screen p-custom">
      <SectionIntro title={'EVENT SCHEDULE'} />

      <div className="flex gap-10 container-custom flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="w-full sm:w-1/3">
          {Object.keys(eventData).map(date => (
            <button
              key={date}
              className={`block w-full p-4 text-left font-semibold transition-colors duration-300 cursor-pointer hover:bg-highlight dark:hover:bg-gray-400 ${selectedDate === date ? 'bg-primary text-white hover:bg-primary dark:bg-lighter-contrast dark:hover:bg-lighter-contrast' : 'bg-soft text-gray-800'}`}
              onClick={() => setSelectedDate(date)}>
              {date}
            </button>
          ))}
        </div>

        {/* Event Details */}
        <div className="w-full sm:w-2/3">
          {eventData[selectedDate].map((event, index) => (
            <div key={index} className="bg-light p-6 mb-4 rounded-lg shadow-lg transition-colors duration-300">
              <div className="flex items-center gap-4">
                <div className="min-w-12 size-12 bg-gray-500 rounded-full"></div>
                <div className="space-y-4 sm:space-y-2">
                  <p className="text-sm text-gray-400">{event.time}</p>
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <p className="text-gray-500">{event.speaker}</p>
                </div>
              </div>
              <p className="text-gray-400 mt-3">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventSchedule
