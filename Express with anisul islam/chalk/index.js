const express=require("express")
const chalk=require("chalk")
const app=express()


const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

app.get("/user",(req,res)=>{
    res.send("this is user page")
})



app.listen(3000,()=>{
    console.log(chalk.bgRed.blue("server is running on the porst nb 3000"))
})