const express=require("express")
const mongoose=require("mongoose")
const app=express()

const connectDB=async()=>{
 
try {
    await  mongoose.connect("mongodb://127.0.01:27017/students")
    console.log("Connected")
} catch (error) {
    console.log("not connect")
    console.log(error.message)
    process.exit(1)
}

}




app.listen(3002,async()=>{
    console.log("server is running on the port number 3000")
    await connectDB()
})

app.get("/",(req,res)=>{
    res.send("hello guys")
})