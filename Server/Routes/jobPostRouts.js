const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const JobPost = require('../Model/JobPost');
const SavedJob = require('../Model/Savedjobs');

router.get("/listJobPosts", async (req, res) => {
  try {
    const currentDate = new Date();
    const jobPosts = await JobPost.find({ expireon: { $gte: currentDate } })
                                  .sort({ Posted_Date: -1 }); 
    res.json(jobPosts);
  } catch (error) {
    console.error('Error fetching job posts:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/listJobPosts/:jobID", async (req, res) => {
  try {
    const { jobID } = req.params;
    const jobPost = await JobPost.findOne({ jobID });

    if (!jobPost) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json(jobPost);
  } catch (error) {
    console.error('Error fetching job post:', error);
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



router.put('/updateJobPost/:jobID', async (req, res) => {
  const { jobID } = req.params;
  const { role, companyName, skills, qualification, location, salary, workMode, employmentType, experience, description, companyImage, expireon, externalLink, jobLink } = req.body;

  try {
    // Find the job post by jobID
    const jobPost = await JobPost.findOne({ jobID });

    if (!jobPost) {
      return res.status(404).json({ message: 'Job post not found' });
    }

    // Update the job post fields
    jobPost.role = role;
    jobPost.companyName = companyName;
    jobPost.skills = skills;
    jobPost.qualification = qualification;
    jobPost.location = location;
    jobPost.salary = salary;
    jobPost.workMode = workMode;
    jobPost.employmentType = employmentType;
    jobPost.experience = experience;
    jobPost.companyImage = companyImage;
    jobPost.description = description;
    jobPost.expireon = expireon;
    jobPost.externalLink = externalLink;
    jobPost.jobLink = jobLink;

    // Save the updated job post
    const updatedJobPost = await jobPost.save();

    res.status(200).json({ message: 'Job post updated successfully', updatedJobPost });
  } catch (error) {
    console.error('Error updating job post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/deleteJobPost/:jobID', async (req, res) => {
  const { jobID } = req.params;


  try {
    const query = { jobID: parseInt(jobID) };
    
    const result = await JobPost.deleteOne(query);
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Job post not found' });
    }

    res.status(200).json({ message: 'Job post deleted successfully' });
  } catch (error) {
    
    res.status(500).json({ message: 'Server error', error });
  }
});


router.post('/saveJob', async (req, res) => {
  const { userId, jobId } = req.body;

  try {
    let savedJob = await SavedJob.findOne({ userId });

    if (savedJob) {
      if (savedJob.jobId.split(',').includes(jobId.toString())) {
        return res.status(400).json({ message: 'Job already saved' });
      }

      savedJob.jobId = `${savedJob.jobId},${jobId}`;
    } else {
      savedJob = new SavedJob({ userId, jobId });
    }

    await savedJob.save();

    return res.status(200).json({ message: 'Job saved successfully', savedJob });
  } catch (error) {
    console.error('Error saving job:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/savedJobs', async (req, res) => {
  const { userID } = req.query; 

  if (!userID) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {

    const savedJob = await SavedJob.findOne({ userID });
    if (!savedJob) {
      return res.status(404).json({ message: "No saved jobs found" });
    }

    const jobIds = savedJob.jobId.split(',').map(id => parseInt(id.trim()));

    const jobPosts = await JobPost.find({ jobID: { $in: jobIds } }).sort({ Posted_Date: -1 });

    res.json(jobPosts);
  } catch (error) {
    console.error("Error fetching saved jobs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
