const { check } = require("express-validator");

exports.userRegistrationValidation=[
    check("name")
.trim()
.notEmpty()
.withMessage("Name is empty")
.isLength({min:5})
.withMessage("Name must have 5 characters"),
check("email")
.trim()
.notEmpty()
.withMessage("Email is empty")
.isEmail()
.withMessage("not a valid email"),
check("password")
.trim()
.notEmpty()
.withMessage("password is empty")
.isLength({min:5})
.withMessage("password must have 5 characters"),
check("roll")
.trim()
.notEmpty()
.withMessage("roll is empty")
.isLength({min:5})
.withMessage("roll must have 5 numbers"),
]

exports.userLoginValidation =[
    //Express validate //Middleware
check("email")
.trim()
.notEmpty()
.withMessage("Email is empty")
.isEmail()
.withMessage("not a valid email"),
check("password")
.trim()
.notEmpty()
.withMessage("password is empty")
.isLength({min:5})
.withMessage("password must have 5 characters"),
]