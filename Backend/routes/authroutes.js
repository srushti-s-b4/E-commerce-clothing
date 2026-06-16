const express=require("express")
const router=express.Router()
const { loginuser }=require("../controllers/logincontroller")
const { createuser }=require("../controllers/usercontroller")
const verifytoken=require("../middleware/authmiddleware")
const { addcart }=require("../controllers/Cartcontrollers")
const {getCart}=require("../controllers/Cartcontrollers")
const {removeFromCart}=require("../controllers/Cartcontrollers")
router.post("/signup",createuser)
router.post("/login",loginuser)
router.get("/profile",verifytoken,(req,res)=>{
      res.json({
        message: "Profile Data",
        user: req.user
      })
})
router.post("/add",addcart)
router.get("/:userId", getCart);
router.delete("/remove",removeFromCart)
module.exports=router
