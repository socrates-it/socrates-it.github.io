import type { FC } from "react"
import { useState } from "react"
import type { MenuItem } from "./menu-items"
import { cn } from "~/common/css.ts"
import MenuLink from "./MenuLink"

type HProps = {
    isOpen: boolean
    onClose: () => void
    onOpen: () => void
}
const Hamburger: FC<HProps> = ({ isOpen, onClose, onOpen }) => {
    return (
        <div className="xp-4 space-y-1.5 cursor-pointer w-6 h-6" onClick={isOpen ? onClose : onOpen}>
            <span
                className={`block w-6 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : ''
                }`}
            ></span>
            <span
                className={`block w-4 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out ${
                    isOpen ?  'transform rotate-45 absolute w-6' : 'animate-spin'
                }`}
            ></span>
            <span
                className={`block w-6 h-0.5 bg-gray-400 transition-all duration-300 ease-in-out ${
                    isOpen ? 'transform -rotate-45 absolute' : ''
                }`}
            ></span>
        </div>
    )
}

const scrollLockCss = ["overflow-hidden", "overscroll-contain"]

type Props = {
    items: MenuItem[]
}
const MobileMenu: FC<Props> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false)
    const onOpen = () => {
        document.body.classList.add(...scrollLockCss)
        setIsOpen(true)
    }
    const onClose = () => {
        document.body.classList.remove(...scrollLockCss)
        setIsOpen(false)
    }

    return (
        <div className="text-gray-950">
            <Hamburger isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            {isOpen && (
                <div
                    className={cn(
                        "container mx-auto px-10 mt-[24px]",
                        "animate-fade fade-in fade-out duration-150 zoom-in",
                        "absolute left-0 right-0", // Center the div
                        "bg-yellow-400",
                        "z-10",
                    )}
                >
                    <div className={cn(
                        "animate-fade fade-in fade-out duration-150 zoom-in",
                        "bg-blue-400",
                        "z-10",
                    )}>
                        <ul data-open={isOpen} className={cn("text-3xl space-y-4 py-2", "animate-in fade-in duration-1000", "bg-green-400")}>
                            <li className={cn("font-bold")}>Menu</li>
                            {items.map((x) => {
                                return (
                                    <li key={x.label}>
                                        <MenuLink item={x}/>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MobileMenu
