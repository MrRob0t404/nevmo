# Nevmo Backend File Structure

The following outlines the directory structure for the Nevmo backend, which uses **Express.js** and **PostgreSQL**.

```
backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── userController.js       # Business logic for user-related operations
│   │   └── transactionController.js # Business logic for transaction-related operations
│   ├── models/
│   │   ├── userModel.js
│   │   └── transactionModel.js
│   ├── routes/
│   │   ├── userRoutes.js           # API routes for user operations
│   │   └── transactionRoutes.js    # API routes for transaction operations
│   ├── middleware/
│   │   └── authMiddleware.js       # Middleware for authentication via JWT
│   ├── utils/
│   │   └── jwt.js                  # Utility function to handle JWT generation and verification
│   └── app.js
├── .env.example
├── package.json
├── package-lock.json
└── README.md
```
