import { Router } from "express";
import { calendarCtrl } from "../controllers";

const router = Router();

/**
 * Get calendar.
 * @method get
 */
router.route("/calendar/:calendarId").get(calendarCtrl.getCalendar);

/**
 * Get events.
 * @method get
 */
router.route("/events/:calendarId").get(calendarCtrl.getEvents);

export default router;
