import express from 'express';

const app = express();
const port = 3000;

const __dirname = import.meta.dirname
app.get('/', (req, res) => {
//   res.send('Hello World!');
res.sendFile(__dirname+"/index.html")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(__dirname)
});