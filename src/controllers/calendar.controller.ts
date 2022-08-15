import { NextFunction, Request, Response } from "express";
import { calendarSvcs } from "../services";

class CalendarCtrl {
  /**
   * Get calendar.
   * @method get
   */
  public getCalendar = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { calendarId } = req.params;
    try {
      const payload = await calendarSvcs.getCalendar(calendarId);
      return res.status(200).json(payload);
    } catch (e) {
      return next(e);
    }
  };

  /**
   * Get events.
   * @method get
   */
  public getEvents = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { calendarId } = req.params;
    try {
      const payload = await calendarSvcs.getEvents(calendarId);
      return res.status(200).json(payload);
    } catch (e) {
      return next(e);
    }
  };
}

export const calendarCtrl = new CalendarCtrl();
