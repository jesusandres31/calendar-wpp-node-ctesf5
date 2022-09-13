import { calendar_v3 } from 'googleapis';
import { getAllCalendars } from '../helpers';
import { calendarSvcs } from '../services';

/**
 * get evets from all calendars
 */
export const getAllEventsOfTheDay = async () => {
  const allEvents: calendar_v3.Schema$Event[] = [];
  const calendarLabels = getAllCalendars();

  // for each calendar
  for (const calendar of calendarLabels) {
    const events = await calendarSvcs.getEventsCalendarById(calendar);

    if (events && events.length > 0) {
      // for each event in the calendar
      for (const event of events) {
        allEvents.push(event);
      }
    }
  }

  return allEvents;
};
