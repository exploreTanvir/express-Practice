//source link=https://www.youtube.com/watch?v=rQYZ3JmZsdI&list=PLgH5QX0i9K3p4ckbNCy71LRr_dG0AWGw9


const express=require("express")
const app=new express()
const mongoose=require("mongoose")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  res.send("Welcome to the server")
})


//Create product Schema

const productSchema= new mongoose.Schema({
  title:{
          type:String,
          required:true
        },
  price:{
    type:Number,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  },
  rating:{
    type:Number,
    required:true
  }
})


//Create product Model
const MyModel=mongoose.model("Teachers",productSchema)


var port=3055
app.listen(port,async()=>{
    console.log("Server run success on port number "+ port);
    // for Technic two
    await ConnectDB()
})
