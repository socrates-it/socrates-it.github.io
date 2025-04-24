export const BASE_PATH = '/socrates-2025/'

export type MenuItem = {
  label: string
  url: string
  class?: string
  variant?: 'chip' | 'link'
}

export const menuItems: MenuItem[] = [
  { label: 'About', url: `${BASE_PATH}#about` },
  { label: 'Schedule', url: `${BASE_PATH}#schedule` },
  { label: 'Sponsors', url: `${BASE_PATH}#sponsors` },
  { label: 'Register', url: `${BASE_PATH}register` },
]
