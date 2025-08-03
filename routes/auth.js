const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register Route
router.post('/register', authController.register);

// Login Route
router.post('/login', authController.login);

// Logout Route (token will be cleared in frontend)
router.post('/logout', authController.logout);

router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:token', authController.resetPassword);

module.exports = router;
