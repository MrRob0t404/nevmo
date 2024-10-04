const pool = require("../config/db");

/**
 * Creates a new user.
 * @param {Object} user - The user object with name, email, and password.
 * @returns {Promise<Object>} The created user.
 */
const createUser = async (user) => {
  const query = `
    INSERT INTO users (name, email, password, created_at)
    VALUES ($1, $2, $3, NOW())
    RETURNING id, name, email, created_at;
  `;
  const values = [user.name, user.email, user.password];
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

module.exports = {
  createUser,
  findUserByUsername,
};
