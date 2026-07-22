const express = require('express');
const router = express.Router();

// Get all staff
router.get('/', (req, res) => {
  res.json({ message: 'Get all staff' });
});

// Get staff by ID
router.get('/:id', (req, res) => {
  res.json({ message: 'Get staff by ID' });
});

// Create staff
router.post('/', (req, res) => {
  res.json({ message: 'Create staff' });
});

// Update staff
router.put('/:id', (req, res) => {
  res.json({ message: 'Update staff' });
});

module.exports = router;
