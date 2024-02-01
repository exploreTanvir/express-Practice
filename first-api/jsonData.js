const express=require("express")
app=express()
const myJson=[
    {
        "name":"Tanvir",
        "roll":123,
        "address":"jhenaidah"
    },
    {
        "name":"Raju",
        "roll":123,
        "address":"jhenaidah"
    },
    {
        "name":"Rohim",
        "roll":123,
        "address":"jhenaidah"
    },
]

app.get("/",(req,res)=>{ 
    res.status(404).json(myJson)
})

app.listen(3000,()=>{
    console.log("server is running")
})




