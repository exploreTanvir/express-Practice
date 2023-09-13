const express=require("express")
const app=new express()
const mongoose=require("mongoose")

//Technic one  use then,catch

mongoose.connect('mongodb://127.0.0.1:27017/Student')
.then(()=>console.log("db is connected"))
.catch((error)=>{
    console.log("db is not connected")
    console.log(error)
    process.exit(1)
})

//Technic Two us async,await

const ConnectDB=async()=>{
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Student')
    console.log("db is connected")
  } catch (error) {
    console.log("db is not connected")
    console.log(error.message)
    process.exit(1)
}

}



app.get("/",(req,res)=>{
    res.send("Welcome to the server")
})
var port=3004
app.listen(port,async()=>{
    console.log("Server run success on port number "+ port);
    // for Technic two
    await ConnectDB()
})