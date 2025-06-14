import { EventState } from './types.ts'
import type { MetaData } from '~/types'

export const eventState: EventState = EventState.REGISTRATION_OPEN
export const eventDate = new Date('2025-10-02').toLocaleDateString('it-IT')

export const availableSeats = 80

export const eventLocation = {
  address: 'Viale Amerigo Vespucci, 22, 47921 Rimini RN, Italy',
  venue: 'Hotel Ambasciatori',
}

export type MenuItem = {
  label: string
  url: string
  class?: string
  variant?: 'chip' | 'link'
}

export const prependBasePath = (subPath: string) => `${import.meta.env.BASE_URL}${subPath}`.replace('//', '/')

export const menuItems: MenuItem[] = [
  { label: 'About', url: prependBasePath(`/#about`) },
  { label: 'Schedule', url: prependBasePath(`/#schedule`) },
  { label: 'Sponsors', url: prependBasePath(`/#sponsors`) },
  { label: 'Register', url: prependBasePath(`/register`) },
]

export const filteredMenuItems = menuItems.filter(menuItem => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (eventState === EventState.REGISTRATION_OPEN) {
    return true
  } else {
    return menuItem.label !== 'Register'
  }
})

export const defaultTitle = 'SoCraTes Italy'
export const defaultMetadata: MetaData = { title: defaultTitle, ignoreTitleTemplate: true }
