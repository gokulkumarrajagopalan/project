const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: {
    type: Number,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  uid: {
    type: String,
    unique: true,
  },
  created_Date: {
    type: Date,
    default: Date.now,
  },
  pwd: String,
  TypeOfUser: String,
  RoleType: String,
  Active: Number,
});

// Pre-save hook to generate and assign a unique number to each new user
userSchema.pre("save", async function (next) {
  if (!this.isNew) {
    return next();
  }

  try {
    const lastUser = await this.constructor.findOne({}, {}, { sort: { 'userid': -1 } });
    const newNumber = lastUser ? lastUser.userid + 1 : 1;
    this.userid = newNumber;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
