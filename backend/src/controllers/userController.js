const bcrypt = require("bcryptjs");
const { createUser, findUserByEmail } = require("../models/userModel");
const { generateToken } = require("../utils/jwt");

const users = async (req, res) => {
  try {
    return res.status(201).json({
      user: "THIS IS A TEST. ROUTES ARE WORKING FINE :)",
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

/**
 * Registers a new user.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await createUser({ name, email, password: hashedPassword });

    // Generate JWT token
    const token = generateToken(user.id);

    return res.status(201).json({
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

/**
 * Logs in a user.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = generateToken(user.id);

    return res.json({
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  registerUser,
  loginUser,
  users,
};
