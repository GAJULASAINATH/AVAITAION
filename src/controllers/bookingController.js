import Booking from '../models/Booking.js';

//WWE
export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    const saved = await booking.save();
    res.status(201).json({message:"You have successfully booked the jet!!",saved});
  } catch (err) {
    res.status(400).json({ error: 'Booking failed', details: err.message });
  }
};

//WWE
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};

//WWE
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    // Optional: Check if user owns booking or is admin
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get booking' });
  }
};

//WWE
export const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Booking cancelled' });
  } catch (err) {
    res.status(500).json({ error: 'Cancellation failed' });
  }
};
