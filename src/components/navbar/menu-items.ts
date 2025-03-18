export type MenuItem = {
    label: string
    url: string
    class?: string
    variant?: "chip" | "link"
}

export const menuItems: MenuItem[] = [
    { label: "About", url: "/" },
    { label: "Schedule", url: "/servizi/" },
    { label: "Sponsors", url: "/approccio/" },
]
