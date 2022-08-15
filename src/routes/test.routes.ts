import { Router } from "express";
import {
  getAllContacts,
  getAllEventsOfTheDay,
  sendAllMesagges,
} from "../helpers";

const router = Router();

/**
 * Get test script.
 * @method get
 */
router.route("/test").get(async (req, res, next) => {
  try {
    // 1) get contacts
    const contacts = await getAllContacts();

    // 2) get events
    const events = await getAllEventsOfTheDay();

    // 3) iterate events and send messages
    const payload = await sendAllMesagges(contacts, events);

    return res.status(200).json({ events, contacts, payload });
  } catch (e) {
    return next(e);
  }
});

export default router;
