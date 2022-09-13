import { Router } from 'express';
import calendarRoutes from './calendar.routes';
import qrRoutes from './qr.routes';
import whatsappRoutes from './whatsapp.routes';
import test from './test.routes';

const router = Router();

router.use('/api', calendarRoutes, qrRoutes, whatsappRoutes, test);

export default router;
