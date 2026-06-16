const mongoose=require("mongoose")
const connectdb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected");
    } catch (error) {
        console.log("something went wrong");
    }
}
module.exports=connectdb