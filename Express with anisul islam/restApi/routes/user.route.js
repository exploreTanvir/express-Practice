const express=require("express")
const router=express.Router()
const {getAllUsers,createUser, updateUser} = require("../controllers/user.controllers")


//show all user 
router.get("/",getAllUsers)
//push new user
router.post("/",createUser)
//update user
router.put("/:id",updateUser)


module.exports=router