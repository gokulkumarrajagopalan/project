const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto'); 
const User = require("../Model/User"); 

//router.use(cors());
// Get all users
router.get("/list_userdetail", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new user
router.post("/save_usersData", async (req, res) => {
  try {

    const uniqueId = uuidv4();
    const TypeOfUser = 'C';
    const Active = 1 ; 

    //console.log("Unique ID:", uniqueId);
    
    const { email , pwd } = req.body; 

    const hashedPwd = crypto.createHash('sha256').update(uniqueId + pwd).digest('hex');

    const newUser = new User({ email , uid :uniqueId ,pwd : hashedPwd ,Active ,TypeOfUser });
    const savedUser = await newUser.save();
    res.status(201).json({ message: 'User email saved successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
