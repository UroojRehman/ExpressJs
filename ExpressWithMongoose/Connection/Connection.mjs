// getting-started.js
import { connect } from 'mongoose';
import 'dotenv/config'
main().catch(err => console.log(err));

export async function main() {
  await connect(process.env.DB_Connection);
  console.log("You are successfully connected to MongoDB uding Mongoose")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}