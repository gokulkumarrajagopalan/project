// const jwt = require("jsonwebtoken");

// // Secret key for signing the tokens
// const JWT_SECRET = "YourSecretKey$2024#";

// /**
//  * Verifies a JWT token and attaches user data to the request.
//  * @param {Object} req - The request object.
//  * @param {Object} res - The response object.
//  * @param {Function} next - The next middleware function.
//  */
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).json({ message: "Authorization header missing" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded; // Attach user data to the request
//     next();
//   } catch (err) {
//     console.error("Token verification failed:", err);
//     return res.status(403).json({ message: "Invalid or expired token" });
//   }
// };

// module.exports = authenticateToken;
