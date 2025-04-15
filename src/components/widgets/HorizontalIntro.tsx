import React from 'react'

export default function HorizontalIntro() {
  return (
    <div className="p-custom">
      <div className="flex flex-col md:flex-row items-stretch justify-between p-6 md:p-8 gap-6 md:gap-8 max-w-6xl mx-auto">
        {/* Left - Quote */}
        <div className="md:w-1/2 text-2xl md:text-4xl text-center font-bold text-primary dark:text-light leading-snug flex items-center justify-center">
          "Great things happen when we come together."
        </div>

        {/* Right - Description */}
        <div className="md:w-1/2 dark:text-light text-sm md:text-base leading-relaxed space-y-4">
          <p>
            SoCraTes is an informal “unconference” where everyone helps shape the agenda. Each day starts with a Marketplace where participants pitch sessions
            and ideas.
          </p>
          <p>It’s three days of sharing, learning, and experimenting around software, Agile, and collaboration—with no rigid schedule.</p>
          <p>Beyond sessions, it’s about fun too: hikes, games, chats, and new friendships in a relaxed, creative setting.</p>
        </div>
      </div>
    </div>
  )
}
