const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Shekhar:Mongodbpassword69@cluster0.pryig.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } finally {
        await client.close();
    }
}
run().catch(console.error);
