const express=require("express")
const mongoose=require("mongoose")
const multer=require("multer")
const dotenv=require("dotenv").config()
const app=new express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// connect to database
const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/uploadDB")
        console.log("DB is connected")
    } catch (error) {
        console.log("DB is not connected")
        console.log(error)
        process.exit(1)
    }
}


// create schema

const newSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"user name is required"]
        },
        image:{
            type:String,
            required:[true,"user image is required"]
        }
    }
)

const newModel=mongoose.model("upload",newSchema)

//upload files

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename:function(req,file,callback){
        const name=file.originalname
        callback(null,name)
    }
  })
  
  const upload = multer({ storage: storage })

app.get("/upload",(req,res)=>{
    res.sendFile(__dirname+"/view/index.html")
})
app.post("/upload",upload.single("image"),async(req,res)=>{
   try {
    const newMymodel=new newModel({
        name:req.body.name,
        image:req.file.filename
    })
    await newMymodel.save()
    res.status(201).send(newMymodel)
   } catch (error) {
    res.status(500).send(error)
   }
})


const PORT=process.env.PORT
app.listen(PORT,async()=>{
    console.log(`Server is runnig on the port number ${PORT}`)
    await connectDB()
})