var MyModel=require("../Models/Schema")



exports.Starting=(req,res)=>{
  res.send("Welcome to the server")
}



// Insert data in Database
exports.InsertData=async(req,res)=>{

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


// Find All data in Database
exports.FindAllData=async(req,res)=>{
    try {
      const price=req.query.price
      const rating=req.query.rating
     const findAllData=await MyModel.find(
      {


// Query and Projection Operators  Comparison
//  For comparison of different BSON type values, see the specified BSON comparison order.

//query mathod --https://www.mongodb.com/docs/manual/reference/operator/query/




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

// Find One data in Database
exports.FindOneData=async(req,res)=>{
    try {
    const id=req.params.id
   const findOneData=await MyModel.findOne({price:id},).select({price:1,title:1,_id:1}) //FindOne method throw us a object
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
}

// Update data in Database
exports.UpdateData=async(req,res)=>{
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
        message:"Update failed"
      })
    }
  }

  // Delete data in Database
exports.DeleteData=async(req,res)=>{
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
  }