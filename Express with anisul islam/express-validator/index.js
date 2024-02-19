const express=require("express")
const { body,validationResult } = require("express-validator")
const router = require("./routes/user.route")
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api",router)

app.get("/",(req,res)=>{
    res.send("this is home route")
})




app.listen(3000,(req,res)=>{
    console.log("server is running on the port number 3000")
})