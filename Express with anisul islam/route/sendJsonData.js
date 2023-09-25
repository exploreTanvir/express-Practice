const express=require("express")
const router=express.Router()
const bodyParser=require("body-parser")
router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())

router.post("/json",(req,res)=>{
   const name=req.body.name
   const roll=req.body.roll
    res.send(`Student name is ${name} and roll is ${roll}`)
})

module.exports=router