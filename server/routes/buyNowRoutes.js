const express = require('express');
const router = express.Router();
const BuyNow = require('../models/BuyNow');

// CREATE - Submit a new booking
router.post('/', async (req, res) => {
  try {
    const newBooking = new BuyNow(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ - Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await BuyNow.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ - Get single booking by ID
router.get('/:id', async (req, res) => {
  try {
    const booking = await BuyNow.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE - Update a booking
router.patch('/:id', async (req, res) => {
  try {
    const updatedBooking = await BuyNow.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(updatedBooking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE - Delete a booking
router.delete('/:id', async (req, res) => {
  try {
    const deletedBooking = await BuyNow.findByIdAndDelete(req.params.id);
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Additional useful routes:

// GET bookings by user (assuming you have a user reference)
router.get('/user/:userId', async (req, res) => {
  try {
    const bookings = await BuyNow.find({ userId: req.params.userId });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET active bookings (not cancelled or completed)
router.get('/status/active', async (req, res) => {
  try {
    const activeBookings = await BuyNow.find({
      status: { $in: ['pending', 'confirmed'] }
    });
    res.json(activeBookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;