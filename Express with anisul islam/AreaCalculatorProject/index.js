const express=require("express")
const bodyParser=require("body-parser")
app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html")
})
app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html")
})
app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/triangle.html")
})
app.get("/rectangle",(req,res)=>{
    res.sendFile(__dirname+"/rectangle.html")
})
app.get("/square",(req,res)=>{
    res.sendFile(__dirname+"/square.html")
})


app.post("/Circle",(req,res)=>{
   const redius=req.body.redius
   const area=Math.PI*redius*redius
   res.send(`<h1>Area of circle is: ${area}</h1>`)      
})
app.post("/Triangle",(req,res)=>{
    const base=req.body.base
    const height=req.body.height
   const area=0.5*base*height
   res.send(`<h1>Area of Triangle is: ${area}</h1>`)
})
app.post("/Rectangle",(req,res)=>{
    const base=req.body.base
    const height=req.body.height
   const area=base*height
   res.send(`<h1>Area of Rectangle is: ${area}</h1>`)
})
app.post("/Square",(req,res)=>{
    const base=req.body.base
   const area=base*base
   res.send(`<h1>Area of Square is: ${area}</h1>`)
})


app.listen(3000,()=>{
    console.log("running")
})
