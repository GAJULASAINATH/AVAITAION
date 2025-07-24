import express from 'express';
import { estimateFlightPrice } from '../controllers/priceController.js';

const router = express.Router();

router.post('/estimate-price', estimateFlightPrice);

export default router;
