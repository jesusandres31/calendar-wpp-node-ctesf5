import cron from "node-cron";
import {
  getAllContacts,
  getAllEventsOfTheDay,
  sendAllMesagges,
} from "../helpers";
import { CRON_EXPRESSION, TIME_ZONE as timezone } from "../constants";

/**
 * cron job
 */
const setupScheduler = async () => {
  cron.schedule(
    CRON_EXPRESSION,
    async () => {
      try {
        // 1) get contacts
        const contacts = await getAllContacts();

        // 2) get events
        const events = await getAllEventsOfTheDay();

        // 3) iterate events and send messages
        const payload = await sendAllMesagges(contacts, events);
        console.log(payload);
      } catch (e) {
        console.log(e);
      }
    },
    { timezone }
  );
};

export { setupScheduler };
