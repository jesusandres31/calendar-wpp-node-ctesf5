import { calendar_v3 } from "googleapis";
import { whatsAppSvcs } from "../services";
import { formatName, formatTime } from "../utils";

/**
 * send all mesages
 */
export const sendAllMesagges = async (
  contacts: IContact[],
  events: calendar_v3.Schema$Event[]
) => {
  const responses = [];
  for (const event of events) {
    const playerFullName = event.summary;
    const startDate = event.start?.dateTime;
    if (playerFullName && startDate) {
      const name = formatName(playerFullName);
      const time = formatTime(startDate);
      const number = contacts.find(
        (contact) => contact.name === playerFullName
      )?.number;

      if (number) {
        const payload = await whatsAppSvcs.sendWhatsAppMessage(
          name,
          number,
          time
        );
        responses.push(payload);
      }
    }
  }
  return responses;
};
