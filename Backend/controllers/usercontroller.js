const User=require("../models/User")
const bcrypt=require("bcryptjs")
exports.createuser=async(req,res)=>{
    try{
    const {firstname,lastname,email,password}=req.body
    const exist=await User.findOne({email})
    if(exist){
        return res.status(400).json({message:"user already exist"})
    }
    const Salt=await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(password,Salt)
    const new_user = await User.create({
    firstname,
    lastname,
    email,
    password: hashpassword
});
    res.status(201).json({message:"User registered successfully"})
    }catch(error){
        res.status(400).json({message:error.message})
    }
}
