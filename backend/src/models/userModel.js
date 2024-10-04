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

/**
 * Finds a user by user id.
 * @param {number} id - The user's username.
 * @returns {Promise<Object>} The found user or null.
 */
const findUserById = async (id) => {
  console.log(typeof id);
  const query = `
  SELECT * FROM users WHERE id = $1;
  `;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

module.exports = {
  createUser,
  findUserByUsername,
  findUserById,
};
