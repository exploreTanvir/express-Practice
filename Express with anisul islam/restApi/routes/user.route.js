const express=require("express")
const router=express.Router()
const {getAllUsers,createUser, updateUser, deleteUser} = require("../controllers/user.controllers")


//show all user 
router.get("/",getAllUsers)
//push new user
router.post("/",createUser)
//update user
router.put("/:id",updateUser)
//delete user
router.delete("/:id",deleteUser)


module.exports=router