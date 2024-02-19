const { check } = require("express-validator")

exports.userRegistration=[
        //validation
check("name")
.trim()
.notEmpty()
.withMessage("name is missing")
.isLength({min:3})
.withMessage("name must have at least 3 character")
.isLength({max:7})
.withMessage("name can maximum length 7 character"),

check("email")
.trim()
.notEmpty()
.withMessage("email is missing")
.isEmail()
.withMessage("email is invalid"),

check("password")
.trim()
.notEmpty()
.withMessage("password is missing")
.isLength({min:3})
.withMessage("password must have at least 3 character")
.isLength({max:7})
.withMessage("password can maximum length 7 character"),

check("dob")
.trim()
.notEmpty()
.withMessage("dob is missing")
.isLength({min:3})
.withMessage("password must have at least 3 character")
.isLength({max:10})
.withMessage("password can maximum length 10 character")
]

exports.userLogin=[
    check("email")
.trim()
.notEmpty()
.withMessage("email is missing")
.isEmail()
.withMessage("email is invalid"),
check("password")
.trim()
.notEmpty()
.withMessage("password is missing")
.isLength({min:3})
.withMessage("password must have at least 3 character")
.isLength({max:7})
.withMessage("password can maximum length 7 character"),

]