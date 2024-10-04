const pool = require("../config/db");

/**
 * Creates a new user.
 * @param {Object} user - The user object with username, password, and optional balance.
 * @returns {Promise<Object>} The created user.
 */
const createUser = async (user) => {
  const query = `
  INSERT INTO users (username, password, balance, "createdAt", "updatedAt")
  VALUES ($1, $2, $3, NOW(), NOW())
  RETURNING id, username, balance, "createdAt";
  `;
  const values = [user.username, user.password, user.balance || 0];
  const { rows } = await pool.query(query, values);
  console.log("createUser", rows);
  return rows[0];
};

/**
 * Finds a user by username.
 * @param {string} username - The user's username.
 * @returns {Promise<Object>} The found user or null.
 */
const findUserByUsername = async (username) => {
  const query = `
  SELECT * FROM users WHERE username = $1;
  `;
  const { rows } = await pool.query(query, [username]);
  return rows[0];
};

module.exports = {
  createUser,
  findUserByUsername,
};
