import { Router } from 'express';
const router = Router();
import { homeController } from '../controllers/homeController.js';
import { promoController } from '../controllers/promoController.js';

router.get('/', homeController.index);
router.get('/promos/:id', promoController.promoPage);

export { router };
