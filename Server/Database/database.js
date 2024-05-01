// database.js
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const dbUrl =
      "mongodb+srv://codegarbages:2nj6YXZ2WcuRmYWW@cluster-name.qmmazxc.mongodb.net/CodeGarbagesServer";
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(dbUrl, connectionParams);
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = connectToDatabase;
