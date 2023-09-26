const express=require("express")
const app=new express()

// number
app.get("/user/:id([0-9]{3})",(req,res)=>{
    const id=req.params.id
    res.send("Student id is : "+ id)
})

// Text
app.get("/user/:name([a-zA-Z]{6})",(req,res)=>{
    const id=req.params.name
    res.send("Student Name is : "+ id)
})
app.get("*",(req,res)=>{
res.send(" This is not a valid route")
})

port=4000
app.listen(port,()=>{
    console.log("Server is running on the port number is "+port)
})