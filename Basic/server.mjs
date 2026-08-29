import express from 'express'; 
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!.. we are learning ExpressJs. Today our first Lecture....');
});
app.get('/about',(req,res)=>{
  res.send("About Us")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  // console.log("Example app listening on port "+port); 
});