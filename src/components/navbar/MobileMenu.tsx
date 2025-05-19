import { type FC, useEffect } from 'react'
import { useState } from 'react'
import { cn } from '~/common/css.ts'
import MenuLink from './MenuLink'
import type { MenuItem } from '~/common/constants.ts'

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
        className={cn('w-full mx-auto px-5', 'absolute left-0 right-0 top-20', ' ', 'z-10 overflow-hidden transition-all duration-700', {
          'bg-primary h-40 border-t border-t-page': isOpen,
          'bg-transparent h-0 border-t border-transparent': !isOpen, // still apply border-t for height consistency
        })}>
        <div className="z-10 ">
          <ul data-open={isOpen} className={`transition-colors duration-700 py-2`}>
            {items.map(x => {
              return (
                <li
                  key={x.label}
                  className={cn('text-xl border-l-6 pl-2 py-1 border-transparent hover:border-accent transition-colors duration-300', {
                    'text-light': isOpen,
                    'text-transparent': !isOpen, // still apply border-t for height consistency
                  })}>
                  <MenuLink item={x} onClose={onClose} />
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
