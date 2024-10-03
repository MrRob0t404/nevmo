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
 * Finds a user by email.
 * @param {string} email - The user's email.
 * @returns {Promise<Object>} The found user or null.
 */
const findUserByEmail = async (email) => {
  const query = `
    SELECT * FROM users WHERE email = $1;
  `;
  const { rows } = await pool.query(query, [email]);
  return rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
};
