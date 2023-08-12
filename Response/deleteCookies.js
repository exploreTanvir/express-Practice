var express=require("express")
app=express()
app.get("/",function(req,res){
    res.send("Hello Express")
})

// delete Cookies
app.get("/seven",function(req,res){
    res.clearCookie("Name")
    res.status(202).end("Delete cookie success ")
})

app.listen(8005)
console.log("run success")