const express=require("express")
app=express()

app.get("/",(req,res)=>{
    
    res.status(404).send("Home page")
})
app.delete("/about",(req,res)=>{
    res.send("About page")
})
app.put("/contact",(req,res)=>{
    res.send("Contact page")
})
app.post("/portfolio",(req,res)=>{
    res.send("Portfolio page")
})

app.listen(3000,()=>{
    console.log("server is running")
})




