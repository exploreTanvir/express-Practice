const express=require("express")
app=express()

app.get("/",(req,res)=>{ 
    res.download("./asset/13-Software-Developer-Skills-removebg-preview.png")
})

app.listen(3000,()=>{
    console.log("server is running")
})




