const express=require("express")
app=express()

app.get("/user/:id/user/:name",(req,res)=>{
    const id=req.params.id
    const name=req.params.name
    // res.send("hello express js")
    res.send(`user name is ${name} and id is ${id}`)
})

app.listen(3000,()=>{
    console.log("server is running")
})




