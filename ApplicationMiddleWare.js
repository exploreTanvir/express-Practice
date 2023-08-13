//Browser only access Get() not other
//T0 access other we should be used postman to test



var express=require("express")
app=express()

app.use(function(req,res,next){
    console.log(" Hello i'm Application level middleware");   
    next()
})

app.get("/",function(req,res){
    res.send("Hello Express This is Home")
})
app.get("/contact",function(req,res){
    res.send("Hello Express This is contact")
})
app.get("/about",function(req,res){
    res.send("Hello Express This is About")
})
app.post("/portfolio",function(req,res){
    res.send("Hello Express This is Portfolio")
})

app.listen(8017,function(){
    console.log("run success")
})
