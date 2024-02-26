const signup = (req,res) => {
    res.status(201).json("SignUp sucessfully..!");
}

const getbill = (req,res) => {
    res.status(201).json("getbill sucessfully..!");
}
module.exports ={
    signup,
    getbill
}
