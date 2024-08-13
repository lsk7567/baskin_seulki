import express from 'express';
import * as controller from '../controller/StoreDeliveryController.js'

const router = express.Router();

router
    .get('/flavor',controller.getFlavor)

export default router;