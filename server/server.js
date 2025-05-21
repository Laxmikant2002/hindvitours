const { MongoClient } = require("mongodb");

const mongoDB =
  "mongodb+srv://laxmikant251102:jIbsSGGIQBVDmgA8@cluster0.stt1zwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
  const client = new MongoClient(mongoDB);
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("Connection failed:", err);
  } finally {
    await client.close();
  }
}

main();