const express = require('express');
const router = express.Router();

<<<<<<< HEAD
// POST login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password required'
    });
  }

  // Tạm thời: accept all
  res.status(200).json({
    success: true,
    message: 'Login successful',
    token: 'fake-token-' + Date.now()
  });
});

// POST register
router.post('/register', (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields'
    });
  }

  res.status(201).json({
    success: true,
    message: 'Registration successful',
    user: { email, name }
  });
});

module.exports = router;
=======
// Login
router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint' });
});

// Register
router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint' });
});

module.exports = router;
>>>>>>> 760db569e65aa36bd14bff3a9d6899c62a6b0587
