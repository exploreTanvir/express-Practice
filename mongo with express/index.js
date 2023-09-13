const express=require("express")
const app=new express()
const mongoose=require("mongoose")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  res.send("Welcome to the server")
})

//Technic one  use then,catch for connect with database

// mongoose.connect('mongodb://127.0.0.1:27017/Schools')
// .then(()=>console.log("db is connected"))
// .catch((error)=>{
//     console.log("db is not connected")
//     console.log(error)
//     process.exit(1)
// })

//Technic Two us async,await for connect with database

const ConnectDB=async()=>{
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Schools')
    console.log("db is connected")
  } catch (error) {
    console.log("db is not connected")
    console.log(error.message)
    process.exit(1)

  }
}


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
  }
})


//Create product Model
const MyModel=mongoose.model("Teachers",productSchema)


// Save data in Database

app.post("/products",async(req,res)=>{

  try { 
   const newDBModel=new MyModel({
     //get data from req body
    title:req.body.title,
    price:req.body.price,
    description:req.body.description
   })

   const productData=await newDBModel.save()
   req.status(201).send(productData)
  } catch (error) {
    res.status(500).send({message:error.message})
  }
})

var port=3017
app.listen(port,async()=>{
    console.log("Server run success on port number "+ port);
    // for Technic two
    await ConnectDB()
})