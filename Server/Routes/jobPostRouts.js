const express = require('express');
const router = express.Router();
const JobPost = require('../Model/JobPost');

router.get("/listJobPosts", async (req, res) => {
  try {
    const currentDate = new Date();
    const jobPosts = await JobPost.find({ expireon: { $gte: currentDate } }); 
    res.json(jobPosts);
  } catch (error) {
    console.error('Error fetching job posts:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post('/savejobpost', async (req, res) => {
  try {
    const { role, companyName, skills, qualification, location, salary, workMode, employmentType, experience, description, companyImage, expireon, externalLink, jobLink } = req.body;

    const newJobPost = new JobPost({
      role,
      companyName,
      skills,
      qualification,
      location,
      salary,
      workMode,
      employmentType,
      experience,
      companyImage,
      description,
      expireon,
      externalLink, 
      jobLink,
    });

    await newJobPost.save();

    res.status(201).json({ message: 'Job post created successfully' });
  } catch (error) {
    console.error('Error creating job post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;
