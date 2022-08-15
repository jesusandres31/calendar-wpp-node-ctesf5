import { SERVER_CONTACT } from "../constants";
import { whatsAppSvcs } from "../services";

/**
 * get all contacts (name and number)
 */
export const getAllContacts = async () => {
  const allContacs = await whatsAppSvcs.getWhatsAppContacts();
  const contacts = allContacs
    .map((contact) => ({
      name: contact.name,
      number: contact.id._serialized,
      server: contact.id.server,
    }))
    .filter(
      ({ name, number, server }) => name && number && server === SERVER_CONTACT
    );

  return contacts;
};
