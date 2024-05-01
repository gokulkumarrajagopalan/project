const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.clearCookie("mySessionCookie"); // Clear the session cookie
      res.status(200).send("Logged out successfully");
    }
  });
});

module.exports = router;
