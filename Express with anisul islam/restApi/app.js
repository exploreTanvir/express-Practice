const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const app=express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.use((req,res)=>{
   res.send(`<h1>something is wrong here!</h1>`)
})

module.exports=app