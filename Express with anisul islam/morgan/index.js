const express=require("express")
const morgan=require("morgan")
const app=express()

app.use(morgan("dev"))

app.get("/user",(req,res)=>{
    res.send("this is user page")
})
app.post("/user",(req,res)=>{
    res.status(201).send("create a user")
})


app.listen(3000,()=>{
    console.log("server is running on the port nb 3000")
})