import express from 'express'
import { create } from '../Controller/UserController.mjs'

const myroutes = express.Router()
myroutes.post("/insert", create)

export default myroutes