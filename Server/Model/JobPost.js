const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema({

jobID: {
  type: Number,
 // required: true,
},
role: {
  type: String,
  // required: true,
},
companyName: {
  type: String,
  // required: true,
},
skills: {
  type: String,
  // required: true, 
},
qualification: {
  type: String,
  // required: true, 
},
location: {
  type: String,
  // required: true, 
},
salary: {
  type: String,
  // required: true, 
},
workMode: {
  type: [String], 
  // required: true, 
},
employmentType: {
  type: [String], 
  // required: true, 
},
experience: {
  type: String,
  // required: true, 
},
description: {
  type: String,
  // required: true,
},
companyImage: String,
Posted_Date: {
  type: Date,
  default: Date.now,
  index: true ,
},
expireon: {
  type: Date,
  // required: true, 
},
externalLink: {
  type: Boolean,
  default: false,
},
jobLink: String,
});


jobPostSchema.pre("save", async function(next) {
  if (!this.isNew) {
    return next();
  }

  try {
    const lastJobID = await this.constructor.findOne({}, {}, { sort: { jobID: -1 } });
    const newNumber = lastJobID ? lastJobID.jobID + 1 : 1;
    this.jobID = newNumber;
    next();
  } catch (error) {
    next(error);
  }
});


const JobPost  = mongoose.model("JobPost", jobPostSchema);
module.exports = JobPost ;