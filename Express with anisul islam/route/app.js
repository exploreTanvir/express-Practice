const express=require("express")
const app=new express()
const UserRouter=require("./User.route")
const queryParams=require("./query")
const routeParams=require("./routeParameter")
const headersParams=require("./headerParameter")
const sendJsonData=require("./sendJsonData")


// app.use(UserRouter) User.route.js file
  app.use(queryParams)  // query.js file
  app.use(routeParams)  // routeParameter.js file
  app.use(headersParams)  // headerParameter.js file
  app.use(sendJsonData)  // SendJsonData.js file

app.use((req,res)=>{
    res.send("This is not a valid route address")
})

module.exports=app