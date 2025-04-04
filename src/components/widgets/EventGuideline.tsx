import React from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'

const EventGuideline = () => {
  return (
    <section className="text-default p-custom">
      <SectionIntro title={'Event Guideline'} description={'Global Grand Event on Digital Design'} />

      <div className="container-custom flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 pb-4 md:p-0 md:pr-md">
          <img src={`${import.meta.env.BASE_URL}/images/canyon.jpg`} alt="Event Presentation" className="rounded-lg shadow-lg" />
        </div>

        <div className="md:w-1/2 md:pl-md">
          <p className="text-gray-300 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>

          <h3 className="text-xl font-semibold mb-4">Check List</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔</span> Lorem Ipsum is simply dummy
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔</span> Ipsum passages, and more recently
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔</span> PageMaker including versions
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔</span> Lorem Ipsum is simply dummy
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default EventGuideline
