import express from 'express';
import { searchFlights } from '../controllers/searchController.js';

const router = express.Router();
router.post('/search-flights', searchFlights);
export default router;
