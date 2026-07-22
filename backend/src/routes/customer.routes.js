const express = require('express');
const router = express.Router();

<<<<<<< HEAD
// In-memory database
let customers = [];

// GET all customers
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: customers
  });
});

// POST create customer
router.post('/', (req, res) => {
  try {
    const { name, phone, email, address, dob } = req.body;

    if (!name || !phone || !email || !address || !dob) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    const newCustomer = {
      id: Date.now(),
      name,
      phone,
      email,
      address,
      dob,
      createdAt: new Date()
    };

    customers.push(newCustomer);

    res.status(201).json({
      success: true,
      message: 'Customer created successfully',
      data: newCustomer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// GET customer by id
router.get('/:id', (req, res) => {
  const customer = customers.find(c => c.id === parseInt(req.params.id));
  
  if (!customer) {
    return res.status(404).json({
      success: false,
      message: 'Customer not found'
    });
  }

  res.status(200).json({
    success: true,
    data: customer
  });
});

// UPDATE customer
router.put('/:id', (req, res) => {
  const customer = customers.find(c => c.id === parseInt(req.params.id));
  
  if (!customer) {
    return res.status(404).json({
      success: false,
      message: 'Customer not found'
    });
  }

  Object.assign(customer, req.body);

  res.status(200).json({
    success: true,
    message: 'Customer updated successfully',
    data: customer
  });
});

// DELETE customer
router.delete('/:id', (req, res) => {
  const index = customers.findIndex(c => c.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Customer not found'
    });
  }

  const deleted = customers.splice(index, 1);

  res.status(200).json({
    success: true,
    message: 'Customer deleted successfully',
    data: deleted[0]
  });
});

module.exports = router;
=======
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
>>>>>>> 760db569e65aa36bd14bff3a9d6899c62a6b0587
