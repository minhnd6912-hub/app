const express = require('express');
const router = express.Router();

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