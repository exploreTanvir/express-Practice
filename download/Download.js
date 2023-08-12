var express=require("express")
app=express()
app.get("/",function(req,res){
    res.send("Hello Express")
})

// Download response
app.get("/four",function(req,res){
    res.download("./download/raju.jpeg")
})
app.listen(8004)
console.log("run success")