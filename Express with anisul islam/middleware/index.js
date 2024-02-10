const express=require("express")
const app=new express()
PORT=3000

const myMiddleWare=(req,res,next)=>{
    console.log("hello this is middleware")
    next()
}

app.get("/",myMiddleWare,(req,res)=>{
    console.log("this is next func")
    res.send("hello i am home route ")
})


app.listen(PORT,()=>{
    console.log(`Server is running on the port number : ${PORT}`)
})
