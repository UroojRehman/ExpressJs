import express from 'express'
import { login, signup } from './Controllers/UserController.mjs'
import media from './utils/media.mjs'

const myroutes = express.Router()
//  Authentication
myroutes.post("/signup", signup)
myroutes.post("/login",login)

//Product
myroutes.post("/createproduct", media.single("image"), createProduct)


export default myroutes