import User from "../Model/User.mjs";
//insertData
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

//getData
// http://localhost:3000/api/getAll
export const getAll = async(req,res)=>{
    try {
        const result = await User.find({})
        if(result){
            res.send({result})
        }else{
            res.send({message: "No Data Found"})
        }
    } catch (error) {
        res.send({ErrorMessage: error.message})
    }
}

//getById
// http://localhost:3000/api/getById/:id

export const getById = async(req,res)=>{
    try {
        // const id = req.params.id;
        // const result = await User.findById(id)
        const id = req.params.id;
        const result = await User.findById(id)
        if(result){
            res.send({result})
        }else{
            res.send({message: "No User Found"})
        }
        
    } catch (error) {
        res.send({ErrorMessage: error.message})

    }
}


//update
// http://localhost:3000/api/update/:id

export const updateUser = async(req,res)=>{
    try {
        const id = req.params.id
        const result = await User.findByIdAndUpdate(id, req.body)
        res.send({message: "User Updated Successfully", oldRecord: result})
    } catch (error) {
        res.send({ErrorMessage: error.message})
    }
}

//delete
export const deleteUser = async(req,res)=>{
 try {
    const id = req.params.id
    const result = await User.findByIdAndDelete(id)
    res.send({message: "User Deleted Successfully...", DeletedUser: result})
 } catch (error) {
    res.send({ErrorMessage: error.message})
 }
}