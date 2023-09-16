//source link=https://www.youtube.com/watch?v=rQYZ3JmZsdI&list=PLgH5QX0i9K3p4ckbNCy71LRr_dG0AWGw9


const express=require("express")
const app=new express()
const mongoose=require("mongoose")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  res.send("Welcome to the server")
})


// put:/products:ID =>> Update a porducts

app.put("/UpdateItem",async(req,res)=>{
  try {
    const id=req.params.id
    const UpdateData=await MyModel.updateOne(
      {
        rating:id
      },
     {$set: {
        price:req.body.price,
        rating:req.body.price
        
      }
  }
    )
      if(UpdateData){
       res.status(201).send(
        {
          success:true,
          message:"Update Data Successful",
          data:UpdateData
        }
       )
      }
      else{
       res.status(404).send(
        {
          message:"Find data failed"
        }
       )
      }

  } catch (error) {
    res.status(404).send({
      message:"Bal hosse na kn"
    })
  }
})




var port=3055
app.listen(port,async()=>{
    console.log("Server run success on port number "+ port);
    // for Technic two
    await ConnectDB()
})
