const express=require("express")
const bodyParser=require("body-parser")
const app=new express()

const middleware=(req,res,next)=>{
    console.log("i am middleware")
     req.currentTime=new Date(Date.now())
    next()
}
const errorMiddleware=(req,res,next)=>{ // for not founded route
    res.send("404 is a bad request")
}
app.use(errorMiddleware)

const errorMiddle=(err,req,res,next)=>{// for other error
    res.status(500).send("something is broken")
}
app.use(errorMiddle)

app.get("/",middleware,(req,res)=>{
    res.send("hello i am home route "+req.currentTime)
})

PORT=process.env.PORT ||1000
app.listen(PORT,()=>{
    console.log(`Server is running on the port number : ${PORT}`)
})
