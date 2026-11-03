import fs from 'fs'
import Product from '../Model/Product.mjs'
const getImageUrl = (req,filename)=>{
    return `${req.protocol}://${req.get("host")/uploads/$(filename)}`
}

export const createProduct = async(req,res)=>{
   try {
const {name,price,quamtity} = req.body
    if(!name || !price){
     if(req.file){
        await fs.unlink(path.join(__dirname, "../uploads", req.file.filename))
     }
     return res.status(400).json({success: false, message: "Name and Price are required"})
    }
    const imageUrl = req.file ? getImageUrl(req, res.file.filename) : null
    const newProduct = await Product.create({
        name: name,
        price: price,
        quantity: quantity,
        image : imageUrl
    })
    return res.status(200).json({success: true, message: "Product Added Successfully..."});
    }
   catch(error){
    res.send({Error: error.message})
   }
}