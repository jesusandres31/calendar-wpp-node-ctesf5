import { createMessage } from '../utils';
import WAWebJS from 'whatsapp-web.js';
import { client } from '../libs';

class WhatsappSvcs {
  /**
   * Get whatsapp contacts.
   * @method get
   */
  public getWhatsAppContacts = async (): Promise<WAWebJS.Contact[]> => {
    const payload = await client.getContacts();
    return payload;
  };

  /**
   * Send message.
   * @method get
   */
  public sendWhatsAppMessage = async (
    message: string,
    number: string,
  ): Promise<WAWebJS.Message> => {
    const payload = await client.sendMessage(number, message);
    return payload;
  };
}

export const whatsAppSvcs = new WhatsappSvcs();
