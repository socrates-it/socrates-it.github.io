export type MenuItem = {
  label: string
  url: string
  class?: string
  variant?: 'chip' | 'link'
}

export const BASE_PATH = import.meta.env.BASE_URL

export const menuItems: MenuItem[] = [
  { label: 'About', url: `${BASE_PATH}/about` },
  { label: 'Schedule', url: `${BASE_PATH}/servizi` },
  { label: 'Sponsors', url: `${BASE_PATH}/approccio` },
]
