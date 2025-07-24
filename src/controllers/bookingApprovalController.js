import Booking from '../models/Booking.js';

//WWE
export const getPendingBookings = async (req, res) => {
  try {
    const pending = await Booking.find({ booking_status: 'pending' });
    res.status(200).json(pending);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pending bookings' });
  }
};

//WWE
export const approveBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { booking_status: 'confirmed', rejection_reason: '' },
      { new: true }
    );
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.status(200).json({ message: 'Booking approved', booking });
  } catch (err) {
    res.status(500).json({ error: 'Approval failed' });
  }
};

//WWE
export const rejectBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { booking_status: 'rejected'},
      { new: true }
    );
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.status(200).json({ message: 'Booking rejected', booking });
  } catch (err) {
    res.status(500).json({ error: 'Rejection failed' });
  }
};
