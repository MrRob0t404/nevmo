const jwt = require("jsonwebtoken");

// Middleware to verify the JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "No token provided, authorization denied" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token is invalid" });
    }

    req.user = user; // Attach the decoded user info to the request object
    next(); // Move to the next middleware/controller
  });
};

module.exports = authenticateToken;
