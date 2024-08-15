const mongoose = require('mongoose');

const SavedJobSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    jobId: {
        type: String, // Changed from ObjectId to String
        required: true,
    },
});

const SavedJob = mongoose.model('SavedJob', SavedJobSchema);

module.exports = SavedJob;
