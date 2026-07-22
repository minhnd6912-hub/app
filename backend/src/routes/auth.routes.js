const express = require('express');
const router = express.Router();

// Login
router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint' });
});

// Register
router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint' });
});

module.exports = router;
