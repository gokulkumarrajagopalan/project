// server.js

const express = require("express");
const connectToDatabase = require("./Database/database");
const userRoutes = require("./Routes/userRoutes");
const cors = require("cors");

const app = express();

// Connect to database
connectToDatabase();

// Middleware to parse JSON bodies
app.use(express.json());

//cors
app.use(cors());

// Routes
app.use("/users", userRoutes);

// Start the server
const PORT = process.env.PORT || 3700;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
