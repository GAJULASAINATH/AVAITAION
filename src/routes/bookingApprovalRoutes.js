import express from 'express';
import {protectRoute} from '../middlewares/authMiddleware.js'
import {
  getPendingBookings,
  approveBooking,
  rejectBooking
} from '../controllers/bookingApprovalController.js';

const router = express.Router();

router.get('/approvals/bookings/pending',protectRoute, getPendingBookings);       // 🔒 Admin
router.post('/approvals/bookings/:id/approve',protectRoute, approveBooking);      // 🔒 Admin
router.post('/approvals/bookings/:id/reject',protectRoute, rejectBooking);        // 🔒 Admin

export default router;
