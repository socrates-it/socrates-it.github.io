import { useEffect, useState } from 'react'
import type { FC } from 'react'
import { cn } from '../../common/css'
import type { MenuItem } from './menu-items.ts'

type Props = {
  item: MenuItem
  onClose?: () => void
}
const MenuLink: FC<Props> = ({ item, onClose }) => {
  const [path, setPath] = useState('ON_THE_SERVER')
  const isActive = isActiveLink(path, item.url)
  const isChip = item.variant === 'chip'
  const isLink = !isChip

  useEffect(() => {
    setPath(window.location.pathname)
  }, [])

  return (
    <a
      className={cn(
        'relative whitespace-nowrap',
        'before:transition-all before:duration-150',
        "before:content-[''] before:absolute before:block",
        'before:w-full before:h-[4px] before:bg-dl2-600',
        'before:-bottom-2 before:scale-x-0',
        { 'before:hover:scale-x-100': isLink },
        { 'before:scale-x-100': isActive && isLink },
        // className,
      )}
      href={item.url}
      onClick={() => {
        if (onClose) onClose()
      }}>
      {isChip ? (
        <span className={cn('inline-block py-1 px-3 whitespace-nowrap rounded-3xl bg-dl2-300 text-dl2-800 text-[85%]')}>{item.label}</span>
      ) : (
        item.label
      )}
    </a>
  )
}

const isActiveLink = (path: string, itemPath: string) => {
  if (path === '/') return itemPath === '/'
  return itemPath.endsWith(path)
}

export default MenuLink
