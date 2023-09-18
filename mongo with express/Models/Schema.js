//Create product Schema
//schema validation
const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
    title:{
            type:String,
            required:[true,"Project Title is required"],
            minlength:[3,"minimum length of the product title should be 3"],   //for string value we use minlength or maxlength
            maxlength:[100,"maximum length of the product title should be 10"],
            uppercase:true,
            trim:true,
            validate:{ //custom validation
              validator:function (valid){
                return valid.length===10 //for exact length of 10 value can acceptable
              },
              message:"not a valid title"
            }
          },
    price:{
      type:Number, //built in validator
      required:true,
      min:[20,"minimum length of the product title should be 20"],  //for number value we use min or max
      max:[8000,"maximum length of the product title should be 8000"]
     
    },
    description:{
      type:String,
      required:true
    },
    date:{
      type:Date,
      default:Date.now
    },
    rating:{
      type:Number,
      required:true
    }
  })
  
  
  //Create product Model
  var MyModel=mongoose.model("Teachers",productSchema)
  
  module.exports=MyModel