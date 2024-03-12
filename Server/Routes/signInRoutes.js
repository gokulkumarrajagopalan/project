const express = require("express");
const router = express.Router();
const User = require("../Model/User");
const crypto = require("crypto");

// Middleware for handling sessions
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const hashedPwd = crypto.createHash('sha256').update(user.uid + password).digest('hex');

    if (hashedPwd !== user.pwd) {
      return res.status(401).json({ error: "Password Invalid" });
    }

    // Store user information in session
    req.session.user = user;
    console.log(req.session.user );

    res.status(200).json({ message: "Authentication Successful", user });
  } catch (e) {
    console.error("Error:", e);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
