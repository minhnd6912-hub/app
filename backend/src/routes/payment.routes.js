const express = require('express');
const router = express.Router();

<<<<<<< HEAD
let payments = [];

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: payments
  });
});

router.post('/', (req, res) => {
  try {
    const { appointmentId, amount, method } = req.body;

    const newPayment = {
      id: Date.now(),
      appointmentId,
      amount,
      method,
      status: 'pending',
      createdAt: new Date()
    };

    payments.push(newPayment);

    res.status(201).json({
      success: true,
      data: newPayment
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
>>>>>>> 760db569e65aa36bd14bff3a9d6899c62a6b0587
