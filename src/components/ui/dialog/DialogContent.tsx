import React, { Fragment } from 'react'

interface DialogContentProps {
  content: { title: string; description: string }
}
const DialogContent = ({ content }: DialogContentProps) => (
  <Fragment>
    <span className="text-sm text-gray-500 uppercase tracking-wide">Web Development</span>
    <h3 className="text-xl font-semibold mt-1">{content.title}</h3>
    <p className="text-gray-600 mt-2">{content.description}</p>
    <div className="mt-3 flex justify-center space-x-2">
      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">React</span>
      <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Node.js</span>
    </div>
  </Fragment>
)

export default DialogContent
