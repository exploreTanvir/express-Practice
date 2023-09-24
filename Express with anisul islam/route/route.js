const express=require("express")
const app=new express()

//HTTP method and route

app.get("/",(req,res)=>{
    res.send("I am a get request at home route")
})
app.get("/about",(req,res)=>{
    res.send("I am a get request at about route")
})

app.post("/",(req,res)=>{
    res.send("I am a post request at home route")
})

app.put("/",(req,res)=>{
    res.send("I am a put request at home route")
})

app.delete("/",(req,res)=>{
    res.send("I am a delete request at home route ")
})



module.exports=app