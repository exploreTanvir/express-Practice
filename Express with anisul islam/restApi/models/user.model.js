const {v4:uuidv4}=require("uuid")

const users=[
    {
        id:uuidv4(),
        user:"Tanvir",
        email:"tanvirhossen853@gmail.com"
    },
    {
        id:uuidv4(),
        user:"Raju",
        email:"raju@gmail.com"
    },
    {
        id:uuidv4(),
        user:"Rohim",
        email:"rohim@gmail.com"
    },
]


module.exports=users