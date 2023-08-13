var express=require("express")
const multer = require("multer")
var upload=multer()

app=express()

var storage=multer.diskStorage(  
    {destination:function(req,file,callback){
        callback(null,"./uploaded File")},
        filename:function(req,file,callback){
            callback(null,file.originalname)
        }
    }
)
var upload=multer({storage:storage}).single("myfile")

app.post("/",function(req,res){
    upload(req,res,function(error){
        if(error){
            res.send('Upload file Failed');
        }
        else{
            res.send('Upload file success');
        }
    })
})
app.listen(8013,function(){
    console.log("run success")
})
