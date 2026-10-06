import User from "../Model/User.mjs";

// http://localhost:3000/project/signup
export const signup = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const emailExists = await User.findOne({email:email})
        if(emailExists){
            res.send({message: "Email Already Exists. Please try again with another email"})
        }else{
            const newUser = new User({
                name:name,
                email:email,
                password:password
            })

            await newUser.save()
            res.send({message: "User Register Successfully"})
        }
    } catch (error) {
        res.send({message: error.message})
    }
}