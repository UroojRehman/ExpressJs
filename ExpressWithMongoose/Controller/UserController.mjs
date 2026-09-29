import User from "../Model/User.mjs";

// http://localhost:3000/api/insert
export const create = async(req, res)=>{
    try {
        const {name, email, password} = req.body;
        const newUser = await new User({
            name: name,
            email: email,
            password: password
        })
        await newUser.save()
        res.send({message: "User Register Successfully"})

    } catch (error) {
        res.send({ErrorMessage: error.message})
    }
}