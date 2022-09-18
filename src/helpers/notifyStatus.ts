import { whatsAppSvcs } from '../services';
import { NOTIF_GROUP_ID } from '../constants';
import { ISendAllMsgRes } from 'interfaces';

/**
 * notify
 */
export const notifyStatus = async (
  notMatchingContacts: string[],
  responses: ISendAllMsgRes[],
) => {
  if (responses.length === 0 && notMatchingContacts.length === 0) {
    console.log('no events today');
  } else {
    if (notMatchingContacts.length !== 0) {
      let message = '';
      if (notMatchingContacts.length === 1) {
        message = `No se encontro el contacto ${notMatchingContacts}. Y no se pudo notificar su turo. ❌`;
      } else {
        const names = notMatchingContacts.join(', ');
        message = `No se encontraron los contactos ${names}. Y no se pudo notificar sus turos. ❌`;
      }
      await whatsAppSvcs.sendWhatsAppMessage(message, NOTIF_GROUP_ID);
    } else {
      const message = `Todos los turnos fueron notificados correctamente. ✔️`;
      await whatsAppSvcs.sendWhatsAppMessage(message, NOTIF_GROUP_ID);
    }
  }
};
