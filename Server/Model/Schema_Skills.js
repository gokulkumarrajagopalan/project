const mongoose = require("mongoose");

const JobRolesSchema = new mongoose.Schema({
  SkillId: {
    type: Number,
    unique: true,
  },
  Skills: {
    type: String,
    required: true,
  },
});

JobRolesSchema.pre("save", async function (next) {
  if (!this.isNew) {
    return next();
  }

  try {
    const lastSkill = await this.constructor.findOne(
      {},
      {},
      { sort: { SkillId: -1 } },
    );
    const newSkillId = lastSkill ? lastSkill.SkillId + 1 : 1;
    this.SkillId = newSkillId;
    next();
  } catch (error) {
    next(error);
  }
});

const Schema_Skills = mongoose.model("Skills", JobRolesSchema);

module.exports = Schema_Skills;
