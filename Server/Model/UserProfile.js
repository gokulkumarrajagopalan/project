const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  userid: { type: Number, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: String,
  address: String,
  city: String,
  state: String,
  country: String,
  zipCode: String,
  jobTitle: String,
  company: String,
  experienceYears: Number,
  education: [
    {
      degree: { type: String, required: true },
      institution: { type: String, required: true },
      specification: String,
      startDate: String,
      endDate: String,
    },
  ],
  skills: [String],
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
