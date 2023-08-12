var express=require("express")
const multer = require("multer")
var upload=multer()

app=express()
app.use(upload.array())
app.use(express.static("public"))
app.get("/",function(req,res){
    res.send("Hello Express")
})


app.post("/",function(req,res){
    var JSONData=req.body
    res.send(JSON.stringify(JSONData))
})
app.listen(8007,function(){
    console.log("run success")
})
