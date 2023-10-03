const { error } = require("console")
const express=require("express")
const dotenv=require("dotenv").config()
const mongoose=require("mongoose")
const { stringify } = require("querystring")
const app=new express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())


const ConnectDB=async()=>{
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
    console.log("Database is connected")
  } catch (error) {
    console.log("Database is not connected")
    console.log(error.message)
    process.exit(1)
  }
   
}

// product Schema
const schema=mongoose.Schema({
    title:{type:String,
        required:true
    },
    price:{type:Number,
        required:true
    },
    description:{type:String,
        required:true 
    },
    date:{type:Date,
        default:Date.now()
    },
})
// product model
const myModel=mongoose.model("products",schema)

app.get("/",(req,res)=>{
    res.send("Server is running")
})

// Insert data

app.post("/porduct",async(req,res)=>{
    try {
       const newMyModel=new myModel({
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
       })
       const newData=await newMyModel.save()
        res.status(201).send(newData)
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})


// find data 
app.get("/porduct",async(req,res)=>{
    try {
        const price=req.query.price
        const item=await myModel.find({
            price:{$eq:price}
        })
    if(item){
        res.status(200).json(item)
    }
    else{
        res.status(404).send({
            message:"Products not found"
        })
    }
    } catch (error) {
    }
})


// find data with a specific id
app.get("/porduct/:price",async(req,res)=>{
    try {
        const price=req.params.price
        const item=await myModel.find(
            {
                price:price
            }
        ).limit(2)
    if(item){
        res.status(200).json(item)
    }
    else{
        res.status(404).send({
            message:"Products not found"
        })
    }
    } catch (error) {
        res.status(500).json({error})
    }
})



const PORT=process.env.PORT
app.listen(PORT,async()=>{
    console.log(`Server is running on the port number ${PORT}`)
    await ConnectDB()
})