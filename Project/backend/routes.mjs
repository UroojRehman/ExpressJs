import express from 'express'
import { login, signup } from './Controllers/UserController.mjs'
import uploads from './utils/media.mjs'
import { createProduct } from './Controllers/ProductController.mjs'

const myroutes = express.Router()
//  Authentication
myroutes.post("/signup", signup)
myroutes.post("/login",login)

//Product
myroutes.post("/createproduct", uploads.single("image"), createProduct)


export default myroutes