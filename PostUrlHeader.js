var express=require("express")
var app=express()
app.post("/",function(req,res){
    var username=req.header("username")
    var password=req.header("password")
    res.send("User Name : "+username+" Password : "+password)
})
app.listen(6000,function(){
    console.log("run success")
})