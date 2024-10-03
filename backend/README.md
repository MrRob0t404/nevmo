nevmo-backend/
│
├── src/
│   ├── config/
│   │   └── db.js       # Database connection
│   ├── controllers/
│   │   ├── userController.js  # User-related logic
│   │   └── transactionController.js  # Transaction-related logic
│   ├── models/
│   │   ├── userModel.js      # User model
│   │   └── transactionModel.js  # Transaction model
│   ├── routes/
│   │   ├── userRoutes.js     # Routes for user operations
│   │   └── transactionRoutes.js  # Routes for transaction operations
│   ├── middleware/
│   │   └── authMiddleware.js  # Authentication middleware
│   ├── utils/
│   │   └── jwt.js  # Utility for handling JWT
│   └── app.js  # Express app setup
├── .env
└── package.json

