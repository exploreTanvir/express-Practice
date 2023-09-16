//source link=https://www.youtube.com/watch?v=rQYZ3JmZsdI&list=PLgH5QX0i9K3p4ckbNCy71LRr_dG0AWGw9


const express=require("express")
const app=new express()
const mongoose=require("mongoose")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  res.send("Welcome to the server")
})

// put:/products:ID =>> Delete a porducts

app.delete("/products/:id",async(req,res)=>{
    try {
    const id=req.params.id
   const findOneData=await MyModel.deleteOne({price:id},)
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
