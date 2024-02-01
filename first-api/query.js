const express=require("express")
app=express()

app.get("/",(req,res)=>{
    
    const firstname=req.query.firstname
    const lastname=req.query.lastname
    res.end(firstname+" "+lastname)
})


app.listen(3000,()=>{
    console.log("server is running")
})




