const TransactionModel = require("../models/transactionModel");

/**
 * Transaction Controller to handle transaction-related operations.
 */
class TransactionController {
  /**
   * Create a new transaction.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static async createTransaction(req, res) {
    const { senderId, receiverId, amount } = req.body;

    try {
      const transaction = await TransactionModel.createTransaction(
        senderId,
        receiverId,
        amount
      );
      res.status(201).json(transaction);
    } catch (error) {
      res.status(500).json({ error: "Failed to create transaction." });
    }
  }

  /**
   * Get all transactions for a user.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static async getUserTransactions(req, res) {
    const userId = req.params.id;

    try {
      const transactions = await TransactionModel.getUserTransactions(userId);
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve transactions." });
    }
  }
}

module.exports = TransactionController;
