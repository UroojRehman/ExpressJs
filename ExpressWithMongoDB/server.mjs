import express from 'express';
import { database } from './Connection/Connection.mjs';
import { ObjectId } from 'mongodb';

const app = express();
const port = 3000;
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Create / Insert
// http://localhost:3000/insert
app.post("/insert", async(req,res)=>{
  try {
    const {Title, Likes, Comments} = req.body
    const result = await database.collection("Posts").insertOne({Title, Likes, Comments})
    res.send({message: "Post Created Successfully"})
  } catch (error) {
    res.send({Error: error.message})
  }
})
// getAll
// http://localhost:3000/getAll

app.get("/getAll", async(req,res)=>{
  try {
    const data = await database.collection("Posts").find({}).toArray()
    res.send({result: data})
  } catch (error) {
    res.send({ErrorMessage: error.message})
  }
})

//getById
// http://localhost:3000/getById/:id
app.get("/getById/:id", async(req,res)=>{
  try {
    const id = req.params
    const result = await database.collection("Posts").findOne({_id: new ObjectId(id)})
    res.send({result: result})
  } catch (error) {
    res.send({ErrorMessage: error.message})
  }
})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});