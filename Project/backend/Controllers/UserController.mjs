import User from "../Model/User.mjs";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const SECRET_KEY = "abcdef";

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
                password: bcrypt.hashSync(password, 10)
            })

            await newUser.save()
            res.send({message: "User Register Successfully"})
        }
    } catch (error) {
        res.send({message: error.message})
    }
}

// http://localhost:3000/project/login

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const login = await User.findOne({email:email})
        if(!login){
            res.send({message: "Email doesnot exist..."})
        }else{
       const token = jwt.sign({userId : login._id},SECRET_KEY,{expiresIn: "1hr"})
       const uname = login.name
       const expiresAt = new Date(Date.now()+(60*60*1000))
       const pwd = await bcrypt.compare(password, login.password);
       if(pwd){
        res.send({message: "Login Successfully"})
       }else{
        res.send({message: "Invalid Password"})
       }
        }
    } catch (error) {
        res.send({Errormessage: error.message})
    }
}