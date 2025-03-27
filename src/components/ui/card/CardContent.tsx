import React, { Fragment, useState } from 'react'

interface CardContentProps {
  project: { title: string; description: string; src: string; alt: string }
  openModal: (project: { title: string; description: string; src: string; alt: string }) => void
}
const CardContent = ({ project, openModal }: CardContentProps) => {
  return (
    <div className="p-6 flex flex-col h-[200px] justify-between bg-red-400">
      <div className="overflow-hidden">
        <h3 className="text-xl font-semibold truncate">{project.title}</h3>
        <p className="text-gray-600 line-clamp-2">{project.description}</p>
      </div>
      <div>
        <button className="cursor-pointer bg-blue-600 px-4 py-2 rounded-lg" onClick={() => openModal(project)}>
          Read more
        </button>
      </div>
    </div>
  )
}

export default CardContent
