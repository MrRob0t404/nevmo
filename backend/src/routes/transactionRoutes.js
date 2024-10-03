const express = require("express");
const TransactionController = require("../controllers/transactionController");

const router = express.Router();

/**
 * @route POST /transactions
 * @desc Create a new transaction
 * @access Private
 */
router.post("/", TransactionController.createTransaction);

/**
 * @route GET /transactions/:id
 * @desc Get all transactions for a user
 * @access Private
 */
router.get("/:id", TransactionController.getUserTransactions);

module.exports = router;
