import { EventState } from '~/common/types.ts'

export const eventState: EventState = EventState.ComingSoon

export const eventDate = new Date('2025-10-02').toLocaleDateString('it-IT')

export const availableSeats = 80

export const eventLocation = {
  address: 'Viale Amerigo Vespucci, 22, 47921 Rimini RN, Italy',
  venue: 'Hotel Ambasciatori',
}
