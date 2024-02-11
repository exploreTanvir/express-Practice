const express=require("express")
const userRouter=require("./routes/user.route")
const app=express()
app.use(userRouter)
app.use(express.urlencoded({extended:true}))
require("dotenv").config()
const PORT=process.env.PORT||3001

app.use(express.urlencoded({extended:true}))






app.listen(PORT,()=>{
    console.log(`the server is running on the port number ${PORT}`)
})