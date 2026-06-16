const bcrypt=require("bcryptjs")
const User=require("../models/User")
const jwt=require("jsonwebtoken")
exports.loginuser=async(req,res)=>{
    try{
   const { email, password } = req.body;

console.log("Login Email:", email);

const user = await User.findOne({ email });

console.log("User:", user);
    if(!user){
        return res.status(400).json({message:"user not found"})
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({message:"Invalid password"})
    }
    const token=jwt.sign(
        {id:user.id},
        process.env.SECRET_KEY,
        {expiresIn: "2h"}
    )
    res.status(201).json({message:"user logged in successfully",token,user})
}catch(error){
    res.status(400).json({message:error.message})
} 
}