import React, { useState } from 'react'

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
    <div className="bg-gray-50 min-h-screen p-10">
      <div className="text-default py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-heading uppercase">Event Schedules</h2>
        <div className="mt-2 flex justify-center">
          <div className="w-12 h-[2px] bg-primary translate-x-1 translate-y-0.5"></div>
          <div className="w-12 h-[2px] bg-primary -translate-x-1 -translate-y-0.5"></div>
        </div>
        <p className="text-subtitle text-lg mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>

      <div className="flex mt-10 gap-10 max-w-6xl mx-auto">
        {/* Sidebar */}
        <div className="w-1/3">
          {Object.keys(eventData).map(date => (
            <button
              key={date}
              className={`block w-full p-4 text-left font-semibold transition-colors duration-300 cursor-pointer hover:bg-accent ${selectedDate === date ? 'bg-primary text-white hover:bg-primary' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setSelectedDate(date)}>
              {date}
            </button>
          ))}
        </div>

        {/* Event Details */}
        <div className="w-2/3">
          {eventData[selectedDate].map((event, index) => (
            <div key={index} className="bg-gray-200 p-6 mb-4 rounded-lg shadow-lg transition-colors duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                <div>
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
