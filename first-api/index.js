const express=require("express")
app=express()

app.get("/",(req,res)=>{
    res.send("hello express js")
})

app.listen(3000,()=>{
    console.log("server is running")
})




