const express=require("express")
app=express()

app.get("/bangladesh",(req,res)=>{
    res.status(202).redirect("http://localhost:3000/india")
})
app.get("/india",(req,res)=>{ 
    res.status(202).send("This is India")
})

app.listen(3000,()=>{
    console.log("server is running")
})




