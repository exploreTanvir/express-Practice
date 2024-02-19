const express=require("express")
const { body,validationResult } = require("express-validator")
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("this is home route")
})

app.post("/api/register",

//validation
body("name").trim().notEmpty().withMessage("name is missing"),
(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        })
    }
    next()
}


,(req,res)=>{
    try {
        const {name,email,password,dob}=req.body
        const newUser={
            name,email,password,dob
        }
        res.json({
            message:"this is register page",
            newUser
        })
        
        
    } catch (error) {
        return res.json({
            message:error.message
        })
    }
})

app.listen(3000,(req,res)=>{
    console.log("server is running on the port number 3000")
})