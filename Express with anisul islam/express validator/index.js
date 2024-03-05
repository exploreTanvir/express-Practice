const express=require("express")
const router=require("./route/router")
const dotenv=require("dotenv").config()

const app=new express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)

app.get("/",(req,res)=>{
    res.send("This is get Request")
})






const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is running on the port number ${PORT}`)
})
