import express from 'express';
import { database } from './Connection/Connection.mjs';

const app = express();
const port = 3000;
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!');
});

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




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});