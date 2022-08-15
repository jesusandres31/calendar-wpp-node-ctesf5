import { calendar_v3 } from "googleapis";
import { getAllCalendars } from "../helpers";
import { calendarSvcs } from "../services";

/**
 * get evets from all calendars
 */
export const getAllEventsOfTheDay = async () => {
  const events: calendar_v3.Schema$Event[] = [];
  const calendarLabels = getAllCalendars();

  for (const calendar of calendarLabels) {
    const payload = await calendarSvcs.getEventsCalendarById(calendar);
    if (payload && payload.length > 0) events.push(payload[0]);
  }

  return events;
};
