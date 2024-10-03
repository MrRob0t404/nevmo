const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

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

module.exports = router;
