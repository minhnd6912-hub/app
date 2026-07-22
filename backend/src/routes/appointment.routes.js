const express = require('express');
const router = express.Router();

// Get all appointments
router.get('/', (req, res) => {
  res.json({ message: 'Get all appointments' });
});

// Get appointment by ID
router.get('/:id', (req, res) => {
  res.json({ message: 'Get appointment by ID' });
});

// Create appointment
router.post('/', (req, res) => {
  res.json({ message: 'Create appointment' });
});

// Update appointment
router.put('/:id', (req, res) => {
  res.json({ message: 'Update appointment' });
});

// Cancel appointment
router.delete('/:id', (req, res) => {
  res.json({ message: 'Cancel appointment' });
});

module.exports = router;
