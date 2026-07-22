const express = require('express');
const router = express.Router();

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