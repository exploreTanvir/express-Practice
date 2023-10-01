// Register user

const registerUser=(req,res)=>{
    try {
       const {name,email,roll,password}=req.body
       const newUser={name,email,roll,password}
       res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Login user

const loginUser=(req,res)=>{
    try {
       const {email,password}=req.body
      
        if(email==="tanvirhossen853@gmail.com"&& password==="MTHRR"){
            res.status(200).send("Login successful")
        }
        else{
            res.status(404).send("Failed to login")
        }

       
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports={registerUser,loginUser}