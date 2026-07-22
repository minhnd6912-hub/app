const express = require('express');
const router = express.Router();

// Get all customers
router.get('/', (req, res) => {
  res.json({ message: 'Get all customers' });
});

// Get customer by ID
router.get('/:id', (req, res) => {
  res.json({ message: 'Get customer by ID' });
});

// Create customer
router.post('/', (req, res) => {
  res.json({ message: 'Create customer' });
});

// Update customer
router.put('/:id', (req, res) => {
  res.json({ message: 'Update customer' });
});

// Delete customer
router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete customer' });
});

module.exports = router;
