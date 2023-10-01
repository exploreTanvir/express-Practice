const express=require("express")
const morgan=require("morgan")
const dotenv=require("dotenv").config()
const app=new express()


// use of morgan middleware
app.use(morgan("dev"))


app.get("/",(req,res)=>{
    res.send("this is a get request")
})
app.post("/",(req,res)=>{
    res.send("this is a post request")
})



const PORT=process.env.PORT
app.listen(PORT,(req,res)=>{
    console.log(`server is running on the port number ${PORT}`)
})

