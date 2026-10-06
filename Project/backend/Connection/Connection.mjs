// getting-started.js
import mongoose from 'mongoose';
import 'dotenv/config'
main().catch(err => console.log(err));

export async function main() {
  await mongoose.connect(process.env.DB_Connection);
  console.log("Successfully Connected to database")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}