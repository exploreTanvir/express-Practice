const express=require("express")
const router=express.Router()

router.get("/query",(req,res)=>{
    const id=req.query.id
    const age=req.query.age
    res.send(`Student id is ${id} and age is ${age}`)
})


module.exports=router