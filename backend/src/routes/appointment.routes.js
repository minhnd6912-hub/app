const express = require('express');
const router = express.Router();

// In-memory database (tạm thời)
let appointments = [];

// GET all appointments
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: appointments
  });
});

// POST create appointment
router.post('/', (req, res) => {
  try {
    const { customerName, phone, date, time, service, staff } = req.body;

    if (!customerName || !phone || !date || !time || !service || !staff) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    const newAppointment = {
      id: Date.now(),
      customerName,
      phone,
      date,
      time,
      service,
      staff,
      createdAt: new Date()
    };

    appointments.push(newAppointment);

    res.status(201).json({
      success: true,
      message: 'Appointment created successfully',
      data: newAppointment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// GET appointment by id
router.get('/:id', (req, res) => {
  const appointment = appointments.find(a => a.id === parseInt(req.params.id));
  
  if (!appointment) {
    return res.status(404).json({
      success: false,
      message: 'Appointment not found'
    });
  }

  res.status(200).json({
    success: true,
    data: appointment
  });
});

// UPDATE appointment
router.put('/:id', (req, res) => {
  const appointment = appointments.find(a => a.id === parseInt(req.params.id));
  
  if (!appointment) {
    return res.status(404).json({
      success: false,
      message: 'Appointment not found'
    });
  }

  Object.assign(appointment, req.body);

  res.status(200).json({
    success: true,
    message: 'Appointment updated successfully',
    data: appointment
  });
});

// DELETE appointment
router.delete('/:id', (req, res) => {
  const index = appointments.findIndex(a => a.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Appointment not found'
    });
  }

  const deleted = appointments.splice(index, 1);

  res.status(200).json({
    success: true,
    message: 'Appointment deleted successfully',
    data: deleted[0]
  });
});

module.exports = router;