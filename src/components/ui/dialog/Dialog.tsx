import React, { type JSX } from 'react'

interface DialogProps {
  onClose: () => void
  sections: JSX.Element[]
}
const Dialog = ({ onClose, sections }: DialogProps) => {
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="w-1/2 h-2/3 p-6 bg-white rounded-lg shadow-lg overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="w-full h-10 flex justify-end ">
          <button className="size-4 cursor-pointer" onClick={onClose}>
            <span className="block w-6 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out transform rotate-45 -translate-x-1 absolute" />
            <span className="block w-6 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out transform -rotate-45 -translate-x-1 absolute" />
          </button>
        </div>
        {sections.map((block, index) => (
          <div key={index} className=" overflow-y-auto">
            {block}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dialog
