require('dotenv').config();
const express = require("express");
const router = express.Router();
const AWS = require('aws-sdk');
const multer = require('multer');
const UserProfile = require("../Model/UserProfile");

// Configure AWS S3 with credentials from environment variables
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// Set up multer for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Function to upload files to S3
async function uploadFileToS3(fileBuffer, fileName, folder) {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `${folder}/${fileName}`,
    Body: fileBuffer
  };

  try {
    const data = await s3.upload(params).promise();
    console.log(`File uploaded successfully at ${data.Location}`);
    return data.Location;
  } catch (err) {
    console.error('Error uploading file:', err);
    throw err;
  }
}
router.post("/createProfile/:userId", async (req, res) => {
  const {
    firstName,
    lastName,
    phone,
    address,
    city,
    state,
    country,
    zipCode,
    jobTitle,
    company,
    experienceYears,
    education,
    skills,
  } = req.body;

  const { userId } = req.params;

  try {
    let profile = await UserProfile.findOne({ userId }); // Corrected to use `userId`

    if (profile) {
      // Update existing profile
      profile = await UserProfile.findOneAndUpdate(
        { userId },
        {
          firstName,
          lastName,
          phone,
          address,
          city,
          state,
          country,
          zipCode,
          jobTitle,
          company,
          experienceYears,
          education,
          skills,
        },
        { new: true }
      );
      return res
        .status(200)
        .json({ message: "Profile updated successfully", profile });
    } else {
      // Create new profile
      profile = new UserProfile({
        userId, // Corrected to include `userId`
        firstName,
        lastName,
        phone,
        address,
        city,
        state,
        country,
        zipCode,
        jobTitle,
        company,
        experienceYears,
        education,
        skills,
      });

      await profile.save();
      return res
        .status(201)
        .json({ message: "Profile created successfully", profile });
    }
  } catch (error) {
    console.error("Error creating/updating profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get User Profile
router.get("/getProfile/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const profile = await UserProfile.findOne({ userId }); // Corrected to use `userId`

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.status(200).json({ profile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
