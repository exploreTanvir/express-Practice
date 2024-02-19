const express=require("express");
const { body, validationResult } = require("express-validator");
const { runValidation } = require("../validation/user.auth");
const { registerUser, loginUser } = require("../controllers/user.controllers");
const { userRegistration, userLogin } = require("../validation/auth");
const router=express.Router()


router.post("/register",userRegistration, runValidation,registerUser)





router.post("/login",userLogin,runValidation,loginUser)

module.exports=router