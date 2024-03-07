const express=require("express")
const mongoose=require("mongoose")
const app=express()

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
const productModel=mongoose.model("product",ProductSchema)

const connectDB=async()=>{
 
try {
    await  mongoose.connect('mongodb://127.0.0.1:27017/hello');
    console.log("Connected")
} catch (error) {
    console.log("not connect")
    
    process.exit(1)
}

}


app.listen(3002,async()=>{
    console.log("server is running on the port number 3002")
    await connectDB()
})

app.get("/",(req,res)=>{
    res.send("hello guys")
})