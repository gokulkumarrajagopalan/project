const express = require("express");
const router = express.Router();
const UserProfile = require("../Model/UserProfile");

router.post("/createProfile", async (req, res) => {
  const {
    userid,
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
    resume,
    profilePicture,
  } = req.body;

  try {
    const userId = req.session.user.uid;

    let profile = await UserProfile.findOne({ userid: userId });

    if (profile) {
     
      profile = await UserProfile.findOneAndUpdate(
        { userid: userId },
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
          resume,
          profilePicture,
        },
        { new: true }
      );
    } else {
      // Create a new profile
      profile = new UserProfile({
        userid: userId,
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
        resume,
        profilePicture,
      });

      await profile.save();
    }

    res.status(200).json({ message: "Profile saved successfully", profile });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getProfile", async (req, res) => {
  try {
    const userId = req.session.user.uid;

    const profile = await UserProfile.findOne({ userid: userId });

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.status(200).json({ profile });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
