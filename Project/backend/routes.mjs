import express from 'express'
import { signup } from './Controllers/UserController.mjs'

const myroutes = express.Router()
//  Authentication
myroutes.post("/signup", signup)


export default myroutes