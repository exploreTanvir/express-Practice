var express=require("express")
app=express()
app.get("/",function(req,res){
    res.send("Hello Express")
})

// JSON response
app.get("/three",function(req,res){
    var MYJSON=[
        {"name":"Tanvir",
    "Roll":532987,
"City":"Jhenaidah"},
{
    "name":"Raju",
    "Roll":532988,
"City":"Magura"
},{
    "Name":"Rohim",
    "Roll":532990,
    "City":"Dhaka"
}
]
    res.json(MYJSON)
})
app.listen(8006)
console.log("run success")