import React from 'react'

interface CardContentProps {
  project: { title: string; description: string; src: string; alt: string }
  openModal: (project: { title: string; description: string; src: string; alt: string }) => void
}
const CardContent = ({ project, openModal }: CardContentProps) => {
  return (
    <div className="p-6 flex flex-col h-[200px] justify-between bg-light">
      <div className="overflow-hidden">
        <h3 className="text-xl font-semibold truncate">{project.title}</h3>
        <p className="text-gray-600 line-clamp-2">{project.description}</p>
      </div>
      <div>
        <button className="btn-primary px-4" onClick={() => openModal(project)}>
          Read more
        </button>
      </div>
    </div>
  )
}

export default CardContent
