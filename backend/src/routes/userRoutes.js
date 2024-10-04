const express = require("express");
const {
  registerUser,
  loginUser,
  users,
  getUserProfile,
} = require("../controllers/userController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @route   POST /register
 * @desc    Register a new user
 * @access  Public
 */
router.post("/register", registerUser);

/**
 * @route   POST /login
 * @desc    Log in a user
 * @access  Public
 */
router.post("/login", loginUser);

// Test route - to delete
router.get("/user", users);

/**
 * @route   GET /me
 * @desc    Get user information from JWT token
 * @access  Public
 */
router.get("/me", authenticateToken, getUserProfile);

module.exports = router;
