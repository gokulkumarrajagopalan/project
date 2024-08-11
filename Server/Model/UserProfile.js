const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  userid: {
    type: Number,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  company: {
    type: String,
  },
  experienceYears: {
    type: Number,
  },
  education: {
    type: String,
  },
  skills: {
    type: [String],
  },
  resume: {
    type: String, 
  },
  profilePicture: {
    type: String, 
  },
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
