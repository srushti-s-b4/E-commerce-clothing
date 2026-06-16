const express=require("express")
const dotenv=require("dotenv")
const connectdb=require("./config/db")
dotenv.config()
const app=express()
const cors=require("cors")
const PORT=process.env.PORT || 6000
connectdb()
app.use(express.json())
app.use(cors())
app.use("/api",require("./routes/authroutes"))
app.listen(PORT,()=>{
    console.log("server is running");
})