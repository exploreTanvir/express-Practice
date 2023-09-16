//source link=https://www.youtube.com/watch?v=rQYZ3JmZsdI&list=PLgH5QX0i9K3p4ckbNCy71LRr_dG0AWGw9


const express=require("express")
const app=new express()
const mongoose=require("mongoose")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  res.send("Welcome to the server")
})

//Technic one  use then,catch for connect with database

// mongoose.connect('mongodb://127.0.0.1:27017/Schools')
// .then(()=>console.log("db is connected"))
// .catch((error)=>{
//     console.log("db is not connected")
//     console.log(error)
//     process.exit(1)
// })

//Technic Two us async,await for connect with database

const ConnectDB=async()=>{
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Schools')
    console.log("db is connected")
  } catch (error) {
    console.log("db is not connected")
    console.log(error.message)
    process.exit(1)

  }
}

var port=3055
app.listen(port,async()=>{
    console.log("Server run success on port number "+ port);
    // for Technic two
    await ConnectDB()
})
