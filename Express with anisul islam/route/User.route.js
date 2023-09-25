const express=require("express")
const router=express.Router()


//HTTP method and route

// router.get("/",(req,res)=>{
//     res.send("I am a get request at home route")
// })
router.get("/about",(req,res)=>{
    res.send("I am a get request at about route")
})

router.post("/",(req,res)=>{
    res.send("I am a post request at home route")
})

router.put("/",(req,res)=>{
    res.send("I am a put request at home route")
})

router.delete("/",(req,res)=>{
    res.send("I am a delete request at home route ")
})



router.get("/register",(req,res)=>{
    // res.status(200).json({
    //     message:"i am login page",
    //     "name":"tanvir",
    //     statusCode:201
    // })
    res.redirect("/login")
})

router.get("/login",(req,res)=>{
    res.send("I am a get request at login route ")
})


// Use HTML file on express 
router.get("/",(req,res)=>{
    res.statusCode=200
    res.sendFile(__dirname+"/views/index.html")
})
router.get("/contact",(req,res)=>{
    res.statusCode=200
    res.sendFile(__dirname+"/views/contact.html")
})


// cookie and append for header
router.get("/cookie",(req,res)=>{
    res.cookie("name","Tanvir ")
    res.cookie("age","20 ")
    res.append("ID","532987")
    res.end()
})


module.exports=router
