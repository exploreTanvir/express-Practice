var express=require("express")
var app=express()
app.get("/",function(req,res){
    var firstname=req.header('firstname')
    var lastname=req.header('lastname')
    var Accept=req.params('Accept')
    res.end(Accept)
    res.end(firstname+" "+lastname)
})
app.listen(7503,function(){
    console.log("run success");
})