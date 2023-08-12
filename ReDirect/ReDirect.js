var express=require("express")
app=express()
app.get("/Bangladesh",function(req,res){
    res.redirect("http://localhost:8005/India")
})
app.get("/India",function(req,res){
    res.send("Hello This is india")
})


app.listen(8005)
console.log("run success")