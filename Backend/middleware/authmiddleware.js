const jwt=require("jsonwebtoken")
const verifytoken=async(req,res,next)=>{
    try{
    const authheader=req.headers.authorization
    if(!authheader){
        return res.status(400).json({message:"token not there"})
    }
    const token=authheader.split(" ")[1]
    const decode=jwt.verify(token,process.env.SECRET_KEY)
    req.user=decode
    next()
}catch(error){
    res.status(400).json({message:"Invalid token"})
}
}
module.exports=verifytoken