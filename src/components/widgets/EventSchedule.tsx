import React, { useState } from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'

const eventData: Record<
  string,
  {
    time: string
    title: string
    speaker: string
    description: string
    location: string
  }[]
> = {
  '14 February': [
    {
      time: '10am - 12:30pm',
      title: 'Web Design Principles and Best Practices',
      speaker: 'David Warner',
      description: 'Consectetur adipiscing elit. Quod distinctio impedit sint accusantium ducimus...',
      location: 'Hall 1, Building A, Golden Street, South Africa',
    },
  ],
  '15 February': [
    {
      time: '9am - 11:30am',
      title: 'Advanced UI/UX Design Techniques',
      speaker: 'Sarah Johnson',
      description: 'Exploring the latest trends in UI/UX design with a hands-on approach...',
      location: 'Hall 3, Innovation Hub, London',
    },
    {
      time: '2pm - 4pm',
      title: 'Typography in Digital Media',
      speaker: 'Mark Spencer',
      description: 'How typography impacts user experience and readability...',
      location: 'Room 12, Design Center, New York',
    },
  ],
  '16 February': [
    {
      time: '11am - 1pm',
      title: 'Color Psychology in Branding',
      speaker: 'Jessica Lee',
      description: 'Understanding the role of colors in brand perception...',
      location: 'Main Auditorium, Paris Expo',
    },
  ],
  '17 February': [
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
  const [selectedDate, setSelectedDate] = useState('17 February')

  return (
    <div className="bg-page min-h-screen p-container">
      <SectionIntro title={'Event Schedules'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'} />

      <div className="flex gap-10 max-w-6xl container mx-auto flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="w-full sm:w-1/3">
          {Object.keys(eventData).map(date => (
            <button
              key={date}
              className={`block w-full p-4 text-left font-semibold transition-colors duration-300 cursor-pointer hover:bg-highlight ${selectedDate === date ? 'bg-primary text-white hover:bg-primary' : 'bg-soft text-gray-800'}`}
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
              <p className="mt-2">
                <span className="bg-secondary rounded font-semibold text-white px-2 ">Location: {event.location}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventSchedule
