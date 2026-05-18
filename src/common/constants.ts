import { EventState } from './types.ts'
import type { MetaData } from '~/types'

export const eventState: EventState = EventState.ANNOUNCEMENT_LIST
const startDate = new Date('2026-09-17')
export const eventStartDate = startDate.toLocaleDateString('it-IT')
export const eventEndDate = new Date('2026-09-19').toLocaleDateString('it-IT')
export const eventYear = `${startDate.getFullYear()}`

export const availableSeats = 80

export const eventLocation = {
  address: 'Viale Amerigo Vespucci, 22, 47921 Rimini RN, Italy',
  venue: 'Hotel Ambasciatori',
  city: 'Rimini',
  maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2866.7065039823165!2d12.5801044!3d44.0687688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cc377163d5c69%3A0x342e6d3ad7ed633a!2sHotel%20Ambasciatori!5e0!3m2!1sen!2sit!4v1744970000131!5m2!1sen!2sit',
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
