var express=require("express")
app=express()

//String resonse
app.get("/one",function(req,res){
    res.send("Hello Express")
})

app.listen(8010)
console.log("run success")