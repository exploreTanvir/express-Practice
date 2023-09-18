const express=require("express")
const { InsertData, FindAllData, FindOneData, UpdateData, DeleteData, Starting } = require("../Controllers/controller")
const router=express.Router()


// Starting route to check our setup
router.get("/",Starting)

// Insert data in Database
// Post:/products =>> Create a  porducts
router.post("/products",InsertData)

// Find data in Database
// Get:/products =>> Find all the porducts
router.get("/products",FindAllData)
// Get:/products:ID =>> Find a specific porducts
router.get("/products/:id",FindOneData)

// put:/products:ID =>> Update a porducts
router.put("/UpdateItem",UpdateData)

// put:/products:ID =>> Delete a porducts
router.delete("/products/:id",DeleteData)
  

  module.exports=router