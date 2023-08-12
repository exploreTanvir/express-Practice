var express=require("express")
app=express()
app.get("/",function(req,res){
    res.send("Hello Express")
})

// status code response
app.get("/two",function(req,res){
    res.status(201).send("Status code success")
})
app.listen(8005)
console.log("run success")