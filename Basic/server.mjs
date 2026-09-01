import express from 'express'; 
import add from './math.mjs';
import fs, { readFileSync } from 'fs'
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!.. we are learning ExpressJs. Today our first Lecture....');
});
app.get('/about',(req,res)=>{
  // res.send("About Us")
  res.json({"name":"Abc", "email":"abc@gmail.com", "address":"abc street 4"})
})

//fs Module read and write file
fs.writeFileSync("message.txt"," hello we are learning fs Module in express.js. Fs Module is used to read or write file..")
const data = readFileSync("message.txt","utf-8")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`Addition of given Numbers: ${add(12,5)}`)
  console.log(`Message.txt: ${data}`)
  // console.log("Example app listening on port "+port); 
});