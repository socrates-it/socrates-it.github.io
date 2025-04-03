import { type FC, useEffect } from 'react'
import { useState } from 'react'
import type { MenuItem } from './menu-items'
import { cn } from '~/common/css.ts'
import MenuLink from './MenuLink'

type HProps = {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

const Hamburger: FC<HProps> = ({ isOpen, onClose, onOpen }) => {
  return (
    <div className="xp-4 space-y-1.5 cursor-pointer size-6 translate-y-1" onClick={isOpen ? onClose : onOpen}>
      <span className={`block w-6 h-0.5 bg-light transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
      <span
        className={`block w-4 h-0.5 bg-light transition-all duration-300 ease-in-out ${isOpen ? 'transform rotate-45 absolute w-6' : 'animate-spin'}`}></span>
      <span className={`block w-6 h-0.5 bg-light transition-all duration-300 ease-in-out ${isOpen ? 'transform -rotate-45 absolute' : ''}`}></span>
    </div>
  )
}

type Props = {
  items: MenuItem[]
}
const MobileMenu: FC<Props> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  const onOpen = () => {
    setHasMounted(true)
    setIsOpen(true)
  }
  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="text-page">
      <Hamburger isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <div
        className={cn('w-full mx-auto px-5', 'absolute left-0 right-0 top-15', 'bg-primary', 'z-10 overflow-hidden transition-[height] duration-700', {
          'h-31': isOpen,
          'h-0': !isOpen,
        })}>
        <div className="z-10 ">
          <ul data-open={isOpen} className={` border-t ${isOpen ? 'border-t-page' : 'border-t-transparent'} transition-colors duration-700 py-2`}>
            {items.map(x => {
              return (
                <li key={x.label} className="text-xl border-l-6 pl-2 py-1 border-transparent hover:border-accent transition-colors duration-300">
                  <MenuLink item={x} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
