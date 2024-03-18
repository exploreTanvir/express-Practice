const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// create schema
const ProductSchema=mongoose.Schema({
    title:String,
    price:Number,
    rating:Number,
    desc:String,
    createdTime:{
        typeof:Date,
    }
})


//model
const productModel=mongoose.model("products",ProductSchema)


//connect to db

const connectDB=async()=>{
 
try {
    await  mongoose.connect('mongodb://127.0.0.1:27017/hello');
    console.log("Connected")
} catch (error) {
    console.log("not connect")
    process.exit(1)
}
}

app.get("/",(req,res)=>{
    res.send("Hello guys")
})

app.post("/uploadData",(req,res)=>{
    try {
       const title=req.body.title
       const price=req.body.price
       const desc=req.body.desc
       const rating=req.body.rating
       
        const product=new productModel({
            title:title,
            price:price,
            desc:desc,
            rating:rating
        })
        const productData=product.save()
        res.send(product)
    } catch (error) {
        console.log(error.massage)
    }
})



//find all Data

app.get("/findData",async(req,res)=>{
    try {
        const findProduct=await productModel.find().sort({price:1})
        if(findProduct){
            res.send(findProduct)
        }
        else{
            res.send("product not found")
        }
    } catch (error) {
        res.send("something is wrong")
    }
})

//find Data with query operator

app.get("/findQData",async(req,res)=>{
    try {
        const findProduct=await productModel.find({$or:[{$eq:{rating:4}},{$eq:{price:1000}}]})
        if(findProduct){
            res.send(findProduct)
        }
        else{
            res.send("product not found")
        }
    } catch (error) { 
        res.send("something is wrong")
    }
})

//find specific data 

app.get("/findData:id",async(req,res)=>{
    try {
        const id=req.params.id
        const findOneProduct=await productModel.findOne({_id:id})
        res.send(findOneProduct)   
    } catch (error) {
        res.send("something is wrong")
    }
})


//Delete data from db

app.delete("deleteData/:id",async(req,res)=>{
    try {
        const id=req.params.id
        const productDeleteData=await productModel.findByIdAndDelete({_id:id})
        if(productDeleteData){
            res.send(productDeleteData)
        }
        else{
            res.send("product not found")
        }
    } catch (error) {
        res.send("something is wrong")
    }
})


// update data 

app.put("/updateData/:id",async(req,res)=>{
    try {
        const id=req.params.id
        const title=req.body.title
        const desc=req.body.desc
        const rating=req.body.rating
      const updatedProduct= await productModel.findByIdAndUpdate({_id:id},{
        $set:{
            title:title,
            desc:desc,
            rating:rating
            }
       })
       if(updatedProduct){
        res.send(updatedProduct)
       }
       else{
        res.send("wrong")
       }
    } catch (error) {
        res.send("something is wrong")
    }
})

app.listen(3002,async()=>{
    console.log("server is running on the port number 3002")
    await connectDB() 
})

