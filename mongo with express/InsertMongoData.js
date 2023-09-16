//source link=https://www.youtube.com/watch?v=rQYZ3JmZsdI&list=PLgH5QX0i9K3p4ckbNCy71LRr_dG0AWGw9


const express=require("express")
const app=new express()
const mongoose=require("mongoose")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  res.send("Welcome to the server")
})

 
// Insert data in Database
// Post:/products =>> Create a  porducts

app.post("/products",async(req,res)=>{

  try { 
   const newDBModel=new MyModel(
    {
     //get data from req body
    title:req.body.title,
    price:req.body.price,
    description:req.body.description,
    rating:req.body.rating
      }
   )

   const productData=await newDBModel.save()
   req.status(201).send(productData)
  }
   catch (error) {
    res.status(500).send(
      {
        message:error.message
        } 
      )
  }
    }
)


var port=3055
app.listen(port,async()=>{
    console.log("Server run success on port number "+ port);
    // for Technic two
    await ConnectDB()
})
