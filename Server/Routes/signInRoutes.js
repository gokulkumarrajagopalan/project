const express = require("express");
const router = express.Router();
const User = require("../Model/User");
const crypto = require("crypto");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const hashedPwd = crypto.createHash('sha256').update(user.uid + password).digest('hex');

    if (hashedPwd !== user.pwd) {
      return res.status(200).json({ message: "Password Invalid", Login : false });
    }
     
  

    
    req.session.user = user;
    // console.log(user);
    // console.log(req.session.user);

    res.status(200).json({ message: "Authentication Successful", user ,Login : true});
  } catch (e) {
    console.error("Error:", e);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/sessioncheck", (req, res) => {
  if(req.session.user){ 
    return res.json({valid : true , email : req.session.user.email, TypeOfUser :req.session.user.TypeOfUser}) 
  }
  else {
    return res.json({ valid : false})
  }
});

module.exports = router;
