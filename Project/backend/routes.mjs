import express from 'express'
import { login, signup } from './Controllers/UserController.mjs'

const myroutes = express.Router()
//  Authentication
myroutes.post("/signup", signup)
myroutes.post("/login",login)


export default myroutes