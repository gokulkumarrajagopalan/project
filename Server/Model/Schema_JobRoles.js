const mongoose = require("mongoose");

const JobRolesSchema = new mongoose.Schema({
  JobRoleId: {
    type: Number,
    unique: true,
  },
  JobRole: {
    type: String,
    required: true,
  },
});

JobRolesSchema.pre("save", async function (next) {
  if (!this.isNew) {
    return next();
  }

  try {
    const lastJobRole = await this.constructor.findOne(
      {},
      {},
      { sort: { JobRoleId: -1 } },
    );
    const newJobRoleId = lastJobRole ? lastJobRole.JobRoleId + 1 : 1;
    this.JobRoleId = newJobRoleId;
    next();
  } catch (error) {
    next(error);
  }
});

// Create and export the model
const Schema_JobRoles = mongoose.model("JobRoles", JobRolesSchema);

module.exports = Schema_JobRoles;
