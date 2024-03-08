// Routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../Model/User"); // Corrected path

// Get all users
router.get("/list_userdetail", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new user
router.post("/save_usersData", async (req, res) => {
  try {
    const { email } = req.body; // Extract email from the request body
    const newUser = new User({ email }); // Create a new User instance with email only
    const savedUser = await newUser.save();
    res.status(201).json({ message: 'User email saved successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
