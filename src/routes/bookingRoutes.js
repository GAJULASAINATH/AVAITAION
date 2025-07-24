import express from 'express';
import {protectRoute} from '../middlewares/authMiddleware.js'
import {
  createBooking,
  getAllBookings,
  getBookingById,
  deleteBooking
} from '../controllers/bookingController.js';

const router = express.Router();

router.post('/bookings', protectRoute,createBooking);             // Public
router.get('/bookings', protectRoute,getAllBookings);             // Admin 🔒
router.get('/bookings/:id',protectRoute, getBookingById);         // Auth/User 🔒
router.delete('/bookings/:id', protectRoute,deleteBooking);       // Admin 🔒

export default router;
