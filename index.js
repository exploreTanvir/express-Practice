//source link=https://www.youtube.com/watch?v=rQYZ3JmZsdI&list=PLgH5QX0i9K3p4ckbNCy71LRr_dG0AWGw9


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
  },
  rating:{
    type:Number,
    required:true
  }
})


//Create product Model
const MyModel=mongoose.model("Teachers",productSchema)


// Insert data in Database
// Post:/products =>> Create a  porducts

app.post("/products",async(req,res)=>{

  try { 
   const newDBModel=new MyModel({
     //get data from req body
    title:req.body.title,
    price:req.body.price,
    description:req.body.description,
    rating:req.body.rating
   })

   const productData=await newDBModel.save()
   req.status(201).send(productData)
  }
   catch (error) {
    res.status(500).send({message:error.message})
  }
})





// Query and Projection Operators  Comparison
//  For comparison of different BSON type values, see the specified BSON comparison order.

//query mathod --https://www.mongodb.com/docs/manual/reference/operator/query/




// Get:/products =>> Find all the porducts

app.get("/products",async(req,res)=>{
  try {
   const findAllData=await MyModel.find({$or:[{price:{$gt:5000}},{rating:{$lt:4}}]}).limit(5)
   
   //query mathod --https://www.mongodb.com/docs/manual/reference/operator/query/
   // limit method for how many item i want to find 
   //limit is optional
   // Find method throw us a array
   //Query and Projection Operators  Comparison and logical 


   if(findAllData){
    res.status(200).send(findAllData)
   }
   else{
  res.status(404).send({message:"Data not found"})
   }
  } catch (error) {
    res.status(500).send({message:error.message})
  }
})

// Get:/products:ID =>> Find a specific porducts

app.get("/products/:id",async(req,res)=>{
  try {
    const id=req.params.id
   const findOneData=await MyModel.findOne({price:id},).select({price:1,title:1,_id:0}) //FindOne method throw us a object
   // select method for find specific product from a object
   if(findOneData){
    res.status(200).send({
      success:true,
      message:"Find one data successfull",
      data:findOneData
    })
   }
   else{
  res.status(404).send({
    message:"Data not found"
   })
   }
  } catch (error) {
    res.status(500).send({message:error.message})
  }
})

// put:/products:ID =>> Update a porducts
// put:/products:ID =>> Delete a porducts


var port=3037
app.listen(port,async()=>{
    console.log("Server run success on port number "+ port);
    // for Technic two
    await ConnectDB()
})
