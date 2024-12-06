const jwt = require("jsonwebtoken");

// Secret key for signing the tokens
const JWT_SECRET = "YourSecretKey$2024#";

/**
 * Generates a JWT token for a given user payload.
 * @param {Object} payload - The payload to include in the JWT (e.g., user data).
 * @param {String} expiresIn - Expiration time for the token (default: "1h").
 * @returns {String} - The signed JWT token.
 */
const generateToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

/**
 * Verifies a JWT token.
 * @param {String} token - The JWT token to verify.
 * @returns {Object} - The decoded token if valid.
 * @throws {Error} - If the token is invalid or expired.
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new Error("Invalid or expired token");
  }
};

module.exports = { generateToken, verifyToken };
