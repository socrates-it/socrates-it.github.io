import {type FC, useEffect} from "react"
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

type Props = {
    items: MenuItem[]
}
const MobileMenu: FC<Props> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [hasMounted, setHasMounted] = useState(false);

    const onOpen = () => {
        setHasMounted(true);
        setIsOpen(true)
    }
    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <div className="text-gray-950">
            <Hamburger isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                <div
                    className={cn(
                        "container mx-auto px-10 mt-[24px]",
                        "absolute left-0 right-0",
                        "bg-yellow-400 ",
                        "z-10 transition-all duration-300 ease-in-out",
                        {
                            "hidden": !hasMounted,
                            "visible": hasMounted && isOpen,
                            "animate-fade-in": hasMounted && isOpen,
                            "animate-fade-out": hasMounted && !isOpen
                        }
                    )}
                >
                    <div className={cn(
                        "bg-blue-400",
                        "z-10",
                    )}>
                        <ul data-open={isOpen} className="text-3xl space-y-4 py-2 bg-green-400 ">
                            <li className="font-bold">Menu</li>
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
        </div>
    )
}

export default MobileMenu
