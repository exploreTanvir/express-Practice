let express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{
    res.status(200).send("Home page")
})
router.get("/about",(req,res)=>{
    res.send("About page")
})
router.get("/contact",(req,res)=>{
    res.send("Contact page")
})
router.get("/portfolio",(req,res)=>{
    res.send("Portfolio page")
})

module.exports=router