var express=require("express")
app=express()
app.get("/",function(req,res){
    res.send("Hello Express")
})

// Set Cookies
app.get("/six",function(req,res){
    res.cookie("Name","Tanvir")
    res.cookie("City","Jhenaidah")
    res.cookie("Roll",532987)
    res.status(202).end("Set cookie success ")
})

app.listen(8005)
console.log("run success")