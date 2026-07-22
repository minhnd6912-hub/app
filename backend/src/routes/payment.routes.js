const express = require('express');
const router = express.Router();

// Get all payments
router.get('/', (req, res) => {
  res.json({ message: 'Get all payments' });
});

// Create payment
router.post('/', (req, res) => {
  res.json({ message: 'Create payment' });
});

// Update payment status
router.put('/:id', (req, res) => {
  res.json({ message: 'Update payment' });
});

module.exports = router;
