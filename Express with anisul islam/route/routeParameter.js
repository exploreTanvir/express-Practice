const express=require("express")
const router=express.Router()


router.get("/id/:id/age/:age",(req,res)=>{
    const id=req.params.id
    const age=req.params.age
    res.send(`Student id is ${id} and Student age is ${age}`)

})

module.exports=router