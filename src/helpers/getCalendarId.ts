import { Calendar } from '../types';

const calendarIdFijo = process.env.CALENDAR_ID_FIJO || '';
const calendarIdDiario = process.env.CALENDAR_ID_DIARIO || '';

export const getCalendarId = (calendarId: Calendar) => {
  if (calendarId === 'fijo') return calendarIdFijo;
  if (calendarId === 'diario') return calendarIdDiario;
  return '';
};
