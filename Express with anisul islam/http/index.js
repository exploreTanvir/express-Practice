let express=require("express")
let app=express()
const userRouter=require("./routes/user.route")
app.use("/user",userRouter)

app.use((req,res)=>{
    res.send("error route not found  ")
})
app.listen(3000,()=>{
    console.log("server run successfully")
})