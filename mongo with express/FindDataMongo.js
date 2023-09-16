//source link=https://www.youtube.com/watch?v=rQYZ3JmZsdI&list=PLgH5QX0i9K3p4ckbNCy71LRr_dG0AWGw9


const express=require("express")
const app=new express()
const mongoose=require("mongoose")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  res.send("Welcome to the server")
})


// Query and Projection Operators  Comparison
//  For comparison of different BSON type values, see the specified BSON comparison order.

//query mathod --https://www.mongodb.com/docs/manual/reference/operator/query/




// Get:/products =>> Find all the porducts

app.get("/products",async(req,res)=>{
  try {
    const price=req.query.price
    const rating=req.query.rating
   const findAllData=await MyModel.find(
    {
      $nor:[
        {
          price:{
            $eq:price
          }
        },
        {
          rating:{
            $eq:rating
          }
        }
      ]
    }
    ).limit(5).sort({price:1}).select({price:1,_id:0,rating:1,title:1})
   
   //query mathod --https://www.mongodb.com/docs/manual/reference/operator/query/
   // limit method for how many item i want to find 
   //limit is optional
   // Find method throw us a array
   //Query and Projection Operators  Comparison and logical
   // Select method for selecting spesifiq data item. 
    // countDocuments() for count the data

   if(findAllData){
    res.status(200).send({
      success:true,
      message:"Find one data successfull",
      data:findAllData
    })
   }
   else{
  res.status(404).send(
    {
      message:"Data not found"
    }
    )
   }
  } catch (error) {
    res.status(500).send(
      {
        message:error.message
      }
      )
  }
}
)

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
      }
    )
   }
  } catch (error) {
    res.status(500).send({message:error.message})
  }
})


var port=3055
app.listen(port,async()=>{
    console.log("Server run success on port number "+ port);
    // for Technic two
    await ConnectDB()
})
