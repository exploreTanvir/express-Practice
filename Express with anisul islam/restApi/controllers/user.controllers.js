const users=require("../models/user.model")
const {v4:uuidv4}=require("uuid")

// const app=require("../app")  
const bodyParser=require("body-parser")
const express=require("express")
app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//show all user
const getAllUsers=(req,res)=>{
    res.status(200).json({users})
}

//push new user
const createUser=(req,res)=>{
    let newUser={
     id:uuidv4(),
     name:req.body.name,
     email:req.body.email
    }
    users.push(newUser)
    res.status(201).json(users)
}

//update user
const updateUser=(req,res)=>{
    const {name,email}=req.body
    const userId=req.params.id
    users.filter((user)=>user.id===userId).map((selectedUser)=>{
            selectedUser.name=name;
            selectedUser.email=email;
    })
    res.status(201).json({message:"this is update",users})
}

module.exports={getAllUsers,createUser,updateUser}