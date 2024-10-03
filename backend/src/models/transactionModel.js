const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/**
 * Transaction model for managing transactions in the database.
 */
class TransactionModel {
  /**
   * Create a new transaction.
   * @param {number} senderId - The ID of the sender.
   * @param {number} receiverId - The ID of the receiver.
   * @param {number} amount - The amount of money to be transferred.
   * @returns {Promise<Object>} - The created transaction.
   */
  static async createTransaction(senderId, receiverId, amount) {
    const query = `
      INSERT INTO transactions (sender_id, receiver_id, amount, timestamp)
      VALUES ($1, $2, $3, NOW())
      RETURNING *;
    `;
    const values = [senderId, receiverId, amount];

    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  /**
   * Get all transactions for a user.
   * @param {number} userId - The ID of the user.
   * @returns {Promise<Array>} - List of transactions.
   */
  static async getUserTransactions(userId) {
    const query = `
      SELECT * FROM transactions
      WHERE sender_id = $1 OR receiver_id = $1
      ORDER BY timestamp DESC;
    `;
    const values = [userId];

    const { rows } = await pool.query(query, values);
    return rows;
  }
}

module.exports = TransactionModel;
