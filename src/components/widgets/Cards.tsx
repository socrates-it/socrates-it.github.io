import React, { Fragment, useState } from 'react'
import CardContent from '~/components/ui/card/CardContent.tsx'
import Dialog from '~/components/ui/dialog/Dialog.tsx'
import DialogContent from '~/components/ui/dialog/DialogContent.tsx'
import { MajesticonsOpen } from '~/assets/icons/Icons.tsx'

const projects = [
  {
    title: 'Progetto Alpha',
    description: "Un'innovativa piattaforma di e-learning con funzionalità avanzate.",
    src: 'src/assets/images/canyon.jpg',
    alt: 'canyon.jpg',
  },
  {
    title: 'Progetto Beta',
    description: "Un'app mobile per la gestione del tempo e della produttività.",
    src: 'src/assets/images/fiori.jpg',
    alt: 'fiori.jpg',
  },
  {
    title: 'Progetto Gamma',
    description: 'Un sito web interattivo per la visualizzazione di dati in tempo reale.',
    src: 'src/assets/images/foresta.jpg',
    alt: 'foresta.jpg',
  },
]

const Cards = () => {
  const [openModals, setOpenModals] = useState(Object.fromEntries(projects.map(p => [p.title, false])))

  function handleOpenModal(project: { title: string; description: string; src: string; alt: string }) {
    setOpenModals(prev => ({ ...prev, [project.title]: true }))
  }

  return (
    <Fragment>
      <div className="text-black py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black uppercase">About This Events</h2>
        <div className="mt-2 flex justify-center">
          <div className="w-12 h-[2px] bg-[#9b1c31] translate-x-1 translate-y-0.5"></div>
          <div className="w-12 h-[2px] bg-[#9b1c31] -translate-x-1 -translate-y-0.5"></div>
        </div>
        <p className="text-gray-400 text-lg mt-3">Global Grand Event on Digital Design</p>
      </div>
      <div className="container mx-auto max-w-6xl px-5 xl:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 p-6 bg-yellow-400">
        {projects.map((project, index) => (
          <Fragment key={project.title}>
            <div key={index} className="group shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-102">
              <div
                className="cursor-pointer relative w-full h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.src})` }}
                onClick={() => handleOpenModal(project)}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/50 to-purple-600/50 flex items-center justify-center transition-opacity duration-300">
                  <MajesticonsOpen className="size-20 text-white font-bold text-lg" />
                </div>
              </div>
              <CardContent project={project} openModal={handleOpenModal} />
            </div>
            {openModals[project.title] && <Dialog onClose={() => setOpenModals(prev => ({ ...prev, [project.title]: false }))} project={project} />}
          </Fragment>
        ))}
      </div>
    </Fragment>
  )
}

export default Cards
