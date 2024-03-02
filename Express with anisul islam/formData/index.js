const bodyParser = require("body-parser")
const express=require("express")
app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.post("/user",(req,res)=>{
    const name=req.body.name
    const age=req.body.age
    res.send("hello express js")
    res.send(`user name is ${name} and age is ${age}`)
})

app.listen(3000,()=>{
    console.log("server is running")
})




