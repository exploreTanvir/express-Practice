const express=require("express")
const bodyParser = require("body-parser")
app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post("/register",(req,res)=>{
    res.send("success")
})

app.listen(3000,()=>{
    console.log("server is running")
})




