var express=require("express")
app=express()
app.get("/",function(req,res){
    res.send("Hello Express")
})
// Response Header
app.get("/five",function(req,res){
    res.append("Name","Tanvir")
    res.append("City","Jhenaidah")
    res.append("Roll",532987)
    res.status(201).end()
    res.send("This is Response Header ") 
})

app.listen(8005)
console.log("run success")