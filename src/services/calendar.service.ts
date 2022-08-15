import { getStartOfDay, getEndOfDay } from "../utils";
import { getCalendarId } from "../helpers";
import { calendar } from "../libs";
import { Calendar } from "../types";
import { calendar_v3 } from "googleapis";

class CalendarSvcs {
  /**
   * Get calendar.
   * @method get
   */
  public getCalendar = async (
    calendarId: string
  ): Promise<calendar_v3.Schema$Events> => {
    const payload = await calendar.calendars.get({
      calendarId: getCalendarId(calendarId as Calendar),
    });
    return payload.data;
  };

  /**
   * Get events.
   * @method get
   */
  public getEvents = async (
    calendarId: string
  ): Promise<calendar_v3.Schema$Events> => {
    const payload = await calendar.events.list({
      calendarId: getCalendarId(calendarId as Calendar),
      timeMin: getStartOfDay(),
      timeMax: getEndOfDay(),
      singleEvents: true,
      orderBy: "startTime",
    });
    return payload.data;
  };

  /**
   * Get events by calendar ID.
   * @method get
   */
  public getEventsCalendarById = async (
    calendarId: string
  ): Promise<calendar_v3.Schema$Event[] | undefined> => {
    const payload = await calendar.events.list({
      calendarId,
      timeMin: getStartOfDay(),
      timeMax: getEndOfDay(),
      singleEvents: true,
      orderBy: "startTime",
    });
    return payload.data.items;
  };
}

export const calendarSvcs = new CalendarSvcs();
