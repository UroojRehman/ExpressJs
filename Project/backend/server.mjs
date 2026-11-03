import express from 'express';
import { main } from './Connection/Connection.mjs';
import myroutes from './routes.mjs';
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url';
import media from './utils/media.mjs';

const app = express();
const port = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use("/uploads", express.static(path.join(__dirname, media)))
app.use(express.json())
app.use(cors())
app.use("/project",myroutes)

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/test', (req, res) => {
  res.send('This is testing route');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});