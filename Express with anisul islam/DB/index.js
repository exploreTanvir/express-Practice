const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())

// create schema
const ProductSchema=mongoose.Schema({
    title:{
        typeof:String,
    },
    price:Number,
    desc:String,
    createdTime:{
        typeof:Date,
    }
})


//model
const productModel=mongoose.model("Students",ProductSchema)


//connect to db

const connectDB=async()=>{
 
try {
    await  mongoose.connect('mongodb://127.0.0.1:27017/Schools');
    console.log("Connected")
} catch (error) {
    console.log("not connect")
    
    process.exit(1)
}
}

app.get("/",(req,res)=>{
    res.send("hello guys")
})

app.post("/uploadData",(req,res)=>{
    try {
       const title=req.body.title
       const price=req.body.price
       const desc=req.body.desc
       
        const product=new productModel({
            title:title,
            price:price,
            desc:desc
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
        const findProduct=await productModel.find()
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
        const findOneProduct=await productModel.find({_id:id})
        res.send(findOneProduct)
        
    } catch (error) {
        res.send("something is wrong")
    }
})

app.listen(3002,async()=>{
    console.log("server is running on the port number 3002")
    await connectDB()
})

