const express=require("express")
const chalk=require("chalk")
const dotenv=require("dotenv").config()
const app=new express()

// https://www.npmjs.com/package/chalk  for more visit this url

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

app.get("/",(req,res)=>{
    res.send("This is get request")
})

const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(chalk.blue.underline.bgRed.bold(`server is running on the port number ${PORT}`))
})