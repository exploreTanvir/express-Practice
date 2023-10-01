const express=require("express")
const { registerUser, loginUser } = require("../controllers/controller")
const { runValidation } = require("../validation/valid")
const { userRegistrationValidation, userLoginValidation } = require("../validation/auth")
const router=express.Router()

router.post("/register",userRegistrationValidation,runValidation,registerUser)



// User login
router.post("/login",userLoginValidation,runValidation,loginUser)



module.exports=router