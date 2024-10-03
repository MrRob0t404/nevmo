// src/app.js

const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

dotenv.config();

const app = express();
app.use(express.json());

// Define routes
app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
