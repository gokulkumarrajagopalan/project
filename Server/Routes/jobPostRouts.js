const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const JobPost = require('../Model/JobPost');
const SavedJob = require('../Model/Savedjobs');

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
    console.log(newJobPost);
    await newJobPost.save();

    res.status(201).json({ message: 'Job post created successfully' });
  } catch (error) {
    console.error('Error creating job post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/saveJob', async (req, res) => {
  const { userId, jobId } = req.body;

  try {
    // Find the saved job for the user
    let savedJob = await SavedJob.findOne({ userId });

    if (savedJob) {
      // If the job is already saved, do nothing
      if (savedJob.jobId.split(',').includes(jobId.toString())) {
        return res.status(400).json({ message: 'Job already saved' });
      }

      // Otherwise, append the new jobId to the existing string
      savedJob.jobId = `${savedJob.jobId},${jobId}`;
    } else {
      // If no saved jobs exist for the user, create a new document
      savedJob = new SavedJob({ userId, jobId });
    }

    await savedJob.save();

    return res.status(200).json({ message: 'Job saved successfully', savedJob });
  } catch (error) {
    console.error('Error saving job:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
