const express=require("express")
const multer=require("multer")
const app=express()
require("dotenv").config()
PORT=process.env.PORT||3001

//file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name=Date.now()+"-"+file.originalname
      cb(null,name)
    }
  })
  
  const upload = multer({ storage: storage })

app.get("/",(req,res)=>{
    res.send("this is home route")
})
app.get("/upload",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post("/upload",upload.single("image"),(req,res)=>{
    res.send("File is uploaded")
})


app.listen(PORT,()=>{
    console.log(`server is running on the port number ${PORT}`)
})


