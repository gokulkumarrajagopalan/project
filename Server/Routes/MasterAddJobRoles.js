const express = require("express");
const router = express.Router();
const Schema_JobRoles = require("../Model/Schema_JobRoles");
const Schema_Skills = require("../Model/Schema_Skills");

// Route to add a new Job Role
router.post("/", async (req, res) => {
  try {
    const { JobRole } = req.body;
    const newJobRole = new Schema_JobRoles({ JobRole });
    await newJobRole.save();
    res.status(201).json({ message: "Job Roles Inserted Successfully" });
  } catch (e) {
    console.log("Error: While inserting Job Roles", e);
    res.status(400).json({ message: "Internal server error" });
  }
});

// Route to add new Skills
router.post("/AddMasterSkills", async (req, res) => {
  try {
    const { Skills } = req.body;
    const newSkills = new Schema_Skills({ Skills });
    await newSkills.save();
    res.status(201).json({ message: "Skills Inserted Successfully" });
  } catch (e) {
    console.log("Failed to save the data", e);
    res.status(400).json({ message: "Failed to save the data" });
  }
});

module.exports = router;
