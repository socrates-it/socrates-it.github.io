import React, { type JSX, useState } from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import {
  FluentConferenceRoom20Regular,
  FluentDrinkMargarita20Regular,
  FluentMdl2CoffeeScript,
  FluentMdl2EatDrink,
  FluentMdl2Group,
  FluentMdl2Lightbulb,
  FluentMdl2WavingHand,
  FluentPersonVoice16Regular,
} from '~/icons/Icons.tsx'

const eventData: Record<
  string,
  {
    time: string
    title: string
    description: string
    icon: JSX.Element
  }[]
> = {
  'October 2': [
    {
      time: '3:00pm - 7:30pm',
      title: 'Welcome in!',
      description: 'We kick off SoCraTes IT with a good beer and networking activities',
      icon: <FluentMdl2WavingHand className="size-6" />,
    },
    {
      time: '7:30pm - 9:00pm',
      title: 'Dinner time',
      description: 'We have a good dinner all together',
      icon: <FluentMdl2EatDrink className="size-6" />,
    },
    {
      time: '9:00pm - open end',
      title: 'After dinner',
      description: 'We do a team-building game to know each others',
      icon: <FluentDrinkMargarita20Regular className="size-6" />,
    },
  ],
  'October 3': [
    {
      time: '8:00am - 9:00am',
      title: 'Wake up, lazy guys!',
      description: 'Time to have a breakfast',
      icon: <FluentMdl2CoffeeScript className="size-6" />,
    },
    {
      time: '9:00am - 9:30am',
      title: 'Official opening',
      description: 'Introduction to the spirit of SoCraTes IT and the Open Space',
      icon: <FluentConferenceRoom20Regular className="size-6" />,
    },
    {
      time: '9:30am - 10:00am',
      title: 'Marketplace',
      description: 'Time for everyone to write down their proposals and pick a slot',
      icon: <FluentMdl2Lightbulb className="size-6" />,
    },
    {
      time: '10:00am - 1:00pm',
      title: 'Sessions',
      description: '1 hour sessions',
      icon: <FluentMdl2Group className="size-6" />,
    },
    {
      time: '1:00pm - 2:00pm',
      title: 'Lunch',
      description: 'Time to refuel',
      icon: <FluentMdl2EatDrink className="size-6" />,
    },
    {
      time: '2:00pm - 5:30pm',
      title: 'Sessions',
      description: '1 hour sessions',
      icon: <FluentMdl2Group className="size-6" />,
    },
    {
      time: '5:30pm - 7:30pm',
      title: 'Evening news',
      description: 'We recap the first day and we share your impression',
      icon: <FluentPersonVoice16Regular className="size-6" />,
    },
    {
      time: '7:30pm - open end',
      title: 'Dinner',
      description: 'Time to give energy to your brain',
      icon: <FluentMdl2EatDrink className="size-6" />,
    },
  ],
  'October 4': [
    {
      time: '8:00am - 9:00am',
      title: 'The early bird gets the worm!',
      description: 'Time to have a breakfast',
      icon: <FluentMdl2CoffeeScript className="size-6" />,
    },
    {
      time: '9:00am - 10:00am',
      title: 'Marketplace',
      description: 'Time for everyone to write down their proposals and pick a slot',
      icon: <FluentMdl2Lightbulb className="size-6" />,
    },
    {
      time: '10:00am - 1:00pm',
      title: 'Sessions',
      description: '1 hour sessions',
      icon: <FluentMdl2Group className="size-6" />,
    },
    {
      time: '1:00pm - 2:00pm',
      title: 'Lunch',
      description: 'Time to refuel',
      icon: <FluentMdl2EatDrink className="size-6" />,
    },
    {
      time: '2:00pm - 4:00pm',
      title: 'Sessions',
      description: '1 hour sessions',
      icon: <FluentMdl2Group className="size-6" />,
    },
    {
      time: '4:00pm - 5:00pm',
      title: 'Official closing',
      description: 'We recap all the days and share our impression',
      icon: <FluentPersonVoice16Regular className="size-6" />,
    },
    {
      time: '7:30pm - open end',
      title: 'Goodbye to the next edition!',
      description: "Time flies when you're having fun",
      icon: <FluentMdl2WavingHand className="size-6" />,
    },
  ],
}

const EventSchedule = () => {
  const [selectedDate, setSelectedDate] = useState('October 2')

  return (
    <div id="schedule" className="min-h-screen pt-11 md:pt-23 pb-14 md:pb-26 px-md md:px-xl bg-lightest">
      <SectionIntro title={'event schedule'} color="contrast" />

      <div className="flex gap-10 max-w-6xl mx-auto flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="w-full sm:w-1/3">
          {Object.keys(eventData).map(date => (
            <button
              key={date}
              className={`block w-full p-4 text-left font-semibold transition-colors duration-300 cursor-pointer  ${selectedDate === date ? 'bg-accent hover:bg-accent text-white ' : 'bg-white text-black  hover:bg-light'}`}
              onClick={() => setSelectedDate(date)}>
              {date}
            </button>
          ))}
        </div>

        {/* Event Details */}
        <div className="w-full space-y-4 sm:w-2/3">
          {eventData[selectedDate].map((event, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded-lg transition-colors duration-300">
              <div className="flex items-center gap-4">
                <div className="size-12 bg-secondary text-white rounded-full flex justify-center items-center">{event.icon}</div>
                <div className="space-y-0">
                  <p className="text-sm text-lightest-contrast">{event.time}</p>
                  <h3 className="text-lg text-contrast font-bold">{event.title}</h3>
                </div>
              </div>
              <p className="text-lightest-contrast mt-3">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventSchedule
