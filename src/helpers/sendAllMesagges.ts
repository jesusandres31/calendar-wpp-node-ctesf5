import { calendar_v3 } from 'googleapis';
import { whatsAppSvcs } from '../services';
import { formatName, formatTime, trimString } from '../utils';
import { IContact } from '../interfaces';

/**
 * send all mesages
 */
export const sendAllMesagges = async (
  contacts: IContact[],
  events: calendar_v3.Schema$Event[],
) => {
  const responses = [];
  // iterate through each event
  for (const event of events) {
    const playerFullName = event.summary;
    const startDate = event.start?.dateTime;
    if (playerFullName && startDate) {
      // find contact if "event title" and "contact name" matchs
      const contact = contacts.find(
        contact => trimString(contact.name) === trimString(playerFullName),
      );
      if (contact) {
        const number = contact.number;
        if (number) {
          const name = formatName(playerFullName);
          const time = formatTime(startDate);
          const payload = await whatsAppSvcs.sendWhatsAppMessage(
            name,
            number,
            time,
          );
          responses.push(payload);
        }
      }
    }
  }
  return responses;
};

/**
 * test fot sendAllMesagges
 */
export const testSendAllMesagges = async (
  contacts: IContact[],
  events: calendar_v3.Schema$Event[],
) => {
  const responses = [];
  // iterate through each event
  for (const event of events) {
    const playerFullName = event.summary;
    const startDate = event.start?.dateTime;
    if (playerFullName && startDate) {
      // find contact if "event title" and "contact name" matchs
      const contact = contacts.find(
        contact => trimString(contact.name) === trimString(playerFullName),
      );
      if (contact) {
        const number = contact.number;
        if (number) {
          const name = formatName(playerFullName);
          const time = formatTime(startDate);
          responses.push({ name, time, number });
        }
      }
    }
  }
  return responses;
};
