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

## Developer Notes:

### Please note that these are my oppinions and my reasoning behind them.

1. Uses of Classes for Transaction Model and Controller

   Ensures encapsulation and organization:

   - Encapsulation: The use classes allows us to encapsulate related methods and properties together. For instance, all methods related to transaction handling are contained within the TransactionModel class. This makes the code more organized, reusable and easier to manage.
   - Reusable Code: Classes can be instantiated or extended, allowing for reusable code patterns. If you need to create more specific transaction-related functionalities later, you could extend this class or create subclasses.

   Separation of Concerns:

   - Model-Controller Pattern: This follows the Model-View-Controller (MVC) design pattern, where the model handles data interactions, and the controller manages application logic. By separating these concerns, it makes the codebase easier to understand and maintain.

   Scalability:

   - As the application grows, you can easily add more methods to the model or controller classes without affecting existing functionality. This is beneficial for future enhancements or changes.
