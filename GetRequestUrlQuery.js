var express=require("express")
var app=express()
app.get("/",function(req,res){
    firstname=req.query.firstname
    middlename=req.query.middlename
    lastname=req.query.lastname
    res.send(firstname+" "+middlename+" "+lastname)
})
app.listen(7001,function(){
    console.log("run success")
})
