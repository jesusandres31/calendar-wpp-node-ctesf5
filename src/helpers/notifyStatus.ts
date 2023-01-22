import { whatsAppSvcs } from '../services';
import { NOTIF_GROUP_ID } from '../constants';
import { ISendAllMsgRes } from '../interfaces';
import { logger } from '../libs';

/**
 * notify
 */
export const notifyStatus = async (
  notMatchingContacts: string[],
  responses: ISendAllMsgRes[],
) => {
  let message = 'Todos los turnos fueron notificados correctamente. ✔️';

  if (responses.length === 0 && notMatchingContacts.length === 0) {
    message = 'No hay eventos hoy. ✔️';
    return;
  }

  // get names of not matching contacts
  let names = notMatchingContacts.join(', ');

  if (notMatchingContacts.length === 1) {
    message = `No se encontro el contacto ${names}. Y no se pudo notificar su turno. ❌`;
  }

  if (notMatchingContacts.length > 1) {
    message = `No se encontraron los contactos ${names}. Y no se pudo notificar sus turnos. ❌`;
  }

  const res = await whatsAppSvcs.sendWhatsAppMessage(message, NOTIF_GROUP_ID);
  /* logger.info(res.body); */
};
