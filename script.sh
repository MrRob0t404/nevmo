#!/bin/bash

# Create main project directory
cd backend

# Create main folders
mkdir -p src/config
mkdir -p src/controllers
mkdir -p src/models
mkdir -p src/routes
mkdir -p src/middleware
mkdir -p src/utils

# Create necessary files in each folder
touch src/config/db.js
touch src/controllers/userController.js
touch src/controllers/transactionController.js
touch src/models/userModel.js
touch src/models/transactionModel.js
touch src/routes/userRoutes.js
touch src/routes/transactionRoutes.js
touch src/middleware/authMiddleware.js
touch src/utils/jwt.js
touch src/app.js

# Create root-level files
touch .env
touch README.md
touch package.json
touch package-lock.json

# Print success message
echo "Backend file structure for Nevmo has been generated!"

