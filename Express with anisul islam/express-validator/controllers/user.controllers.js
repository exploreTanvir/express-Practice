const registerUser=(req,res)=>{
    try {
        const {name,email,password,dob}=req.body
        const newUser={
            name,email,password,dob
        }
        res.json({
            message:"this is register page",
            newUser
        })     
    } 
        catch (error) {
        return res.json({
            message:error.message
        })
    }
}


const loginUser=(req,res)=>{
    try {
        const {email,password}=req.body
        if(email=="tavnirhossen853@gmail.com"||password==12345){
            res.json({
                message:"logged is successful",
            })
        }
        else{
            res.json({
                message:"logged in failed"
            })
        }
       
        
        
    } catch (error) {
        return res.json({
            message:error.message
        })
    }
}

module.exports={registerUser,loginUser}