import React, { type ReactNode, useEffect } from 'react'

interface DialogProps {
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
  title: string
}
const Dialog = ({ children, isOpen, onClose, title }: DialogProps) => {
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center px-custom bg-black/50" onClick={onClose}>
      <div className="max-w-6xl max-h-[80%] bg-white rounded-lg shadow-lg py-md pt-5 overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="w-full px-md pb-xl flex h-10 justify-between ">
          <h2 className="mb-lg font-bold text-2xl">{title}</h2>
          <button className="size-4 cursor-pointer" onClick={onClose}>
            <span className="block w-6 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out transform rotate-45 translate-y-1.5 -translate-x-0.5 absolute" />
            <span className="block w-6 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out transform -rotate-45 translate-y-1.5 -translate-x-0.5 absolute" />
          </button>
        </div>
        <div className="space-y-lg overflow-y-auto flex-grow pt-sm px-md">{children}</div>
      </div>
    </div>
  )
}

export default Dialog
