import React from 'react'

export default function HorizontalIntro() {
  return (
    <div className="py-xl md:py-4xl px-custom bg-lightest">
      <div className="flex  flex-col md:flex-row items-stretch justify-between gap-6 md:gap-8 max-w-6xl mx-auto">
        {/* Left - Quote */}
        <div className="md:w-1/2 text-2xl md:text-4xl text-center font-bold text-primary flex items-center justify-center px-lg pl-lg md:px-0 md:pl-lg ">
          "Shaping software through curiosity and connection."
        </div>

        {/* Right - Description */}
        <div className="md:w-1/2 text-sm md:text-base leading-relaxed space-y-4 px-lg pr-lg md:px-0 md:pr-lg">
          <p>
            SoCraTes is an informal “unconference” where everyone helps shape the agenda. Each day starts with a Marketplace where participants pitch sessions
            and ideas.
          </p>
          <p>
            Everyone is encouraged to participate, whether by leading a session or joining discussions. The event promotes inclusivity and respect supported by
            a code of conduct.
          </p>
          <p>
            By actively participating in social experiences like playing games and joining casual hangouts, we will gain insights into the functionalities of
            software.
          </p>
        </div>
      </div>
    </div>
  )
}
