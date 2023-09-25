const express=require("express")
const router=express.Router()


router.get("/headers",(req,res)=>{
    const id=req.header("id")  // go to postman and set header key and value
    const age=req.header("age")
    res.send(`Student id is ${id} and Student age is ${age}`)

})

module.exports=router