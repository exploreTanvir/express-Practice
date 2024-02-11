const express=require("express")
const app=new express()
PORT=3000

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


app.listen(PORT,()=>{
    console.log(`Server is running on the port number : ${PORT}`)
})
