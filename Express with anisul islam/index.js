const app=require("./route/app")
port=5000 
app.listen(port,()=>{
    console.log("Server is running on the port number : "+port)
})