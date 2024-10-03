const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Generates a JWT token.
 * @param {string} userId - The user ID to include in the token.
 * @returns {string} The generated JWT token.
 */
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = {
  generateToken,
};
