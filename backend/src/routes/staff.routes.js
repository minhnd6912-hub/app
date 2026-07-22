const express = require('express');
const router = express.Router();

<<<<<<< HEAD
let staff = [];

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: staff
  });
});

router.post('/', (req, res) => {
  try {
    const { name, position, specialization } = req.body;

    const newStaff = {
      id: Date.now(),
      name,
      position,
      specialization,
      createdAt: new Date()
    };

    staff.push(newStaff);

    res.status(201).json({
      success: true,
      data: newStaff
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
=======
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
>>>>>>> 760db569e65aa36bd14bff3a9d6899c62a6b0587
