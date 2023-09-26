const express=require("express")
const bodyParser=require("body-parser")
const app=new express()


app.use(express.static("public"))

// static middleware

app.get("/static",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

PORT=process.env.PORT ||2000
app.listen(PORT,()=>{
    console.log(`Server is running on the port number : ${PORT}`)
})
