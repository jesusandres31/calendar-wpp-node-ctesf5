import { NextFunction, Request, Response } from 'express';
import { createMessage } from '../utils';
import { whatsAppSvcs } from '../services';

class WhatsAppCtrl {
  /**
   * Get whatsapp contacts.
   * @method get
   */
  public getWhatsAppContacts = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const payload = await whatsAppSvcs.getWhatsAppContacts();
      return res.status(200).json(payload);
    } catch (e) {
      return next(e);
    }
  };

  /**
   * Send message.
   * @method get
   */
  public sendWhatsAppMessage = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const { name, number, time } = req.body;
    try {
      const message = createMessage(name, time);
      const payload = await whatsAppSvcs.sendWhatsAppMessage(message, number);
      return res.status(200).json(payload);
    } catch (e) {
      return next(e);
    }
  };
}

export const whatsAppCtrl = new WhatsAppCtrl();
