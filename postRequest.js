var express=require("express")
var app=express()
app.post("/",function(req,res){
    res.send("this is simple post method")
})

app.listen(5002,function(){
    console.log("run success")
})