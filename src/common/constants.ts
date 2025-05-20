import { EventState } from './types.ts'

export const eventState: EventState = EventState.REGISTRATION_OPEN
export const eventDate = new Date('2025-10-02').toLocaleDateString('it-IT')

export const availableSeats = 80

export const eventLocation = {
  address: 'Viale Amerigo Vespucci, 22, 47921 Rimini RN, Italy',
  venue: 'Hotel Ambasciatori',
}
const base_path = import.meta.env.PUBLIC_BASE_PATH
export const BASE_PATH = `/${base_path}/`

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

export const filteredMenuItems = menuItems.filter(menuItem => {
  if (eventState === EventState.REGISTRATION_OPEN) {
    return true
  } else {
    return menuItem.label !== 'Register'
  }
})
