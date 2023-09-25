const express=require("express")
const router=express.Router()
const bodyParser=require("body-parser")
router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())

// send data from html form
router.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

router.post("/register",(req,res)=>{
    const fullName=req.body.fullName
    const age=req.body.age
   res.send(`<h1>Student full name is : ${fullName} and age is : ${age}</h1>`)
})

// Send json data from body request
router.post("/json",(req,res)=>{
   const name=req.body.name
   const roll=req.body.roll
    res.send(`Student name is ${name} and roll is ${roll}`)
})

module.exports=router