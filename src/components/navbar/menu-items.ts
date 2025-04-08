import { basePath } from '../../../astro.config.mjs'

export type MenuItem = {
  label: string
  url: string
  class?: string
  variant?: 'chip' | 'link'
}

export const menuItems: MenuItem[] = [
  { label: 'About', url: `${basePath}/about` },
  { label: 'Schedule', url: `${basePath}/servizi/` },
  { label: 'Sponsors', url: `${basePath}/approccio/` },
]
