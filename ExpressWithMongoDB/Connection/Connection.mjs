import "dotenv/config"
import { MongoClient } from "mongodb"

const url = process.env.DB_Connection
const client = new MongoClient(url)

async function run(){
    try {
       await client.connect()  //connect the client to the server
       await client.db("admin").command({ping: 1});  //send a ping to confirm a successful connection
       console.log("You Successfully connected to your MongoDB...")
    } catch (error) {
        console.log(error)
        await client.close()
    }
}

run()

export const database = client.db("MongoDB")
