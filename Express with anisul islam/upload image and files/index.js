const express=require("express")
const multer=require("multer")
const dotenv=require("dotenv").config()
const app=new express()

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
app.post("/upload",upload.single("image"),(req,res)=>{
    res.status(201).send("File is uploaded")
})


const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is runnig on the port number ${PORT}`)
})