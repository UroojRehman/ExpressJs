import express from 'express'
import { create, getAll, getById, updateUser } from '../Controller/UserController.mjs'

const myroutes = express.Router()
myroutes.post("/insert", create)
myroutes.get("/getAll", getAll)
myroutes.get("/getById/:id", getById)
myroutes.put("/update/:id", updateUser)

export default myroutes