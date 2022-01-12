import { MongoClient } from "mongodb";

const user = "user_001";
const userPassword = "4UUYQpXMapkBZ719";
const cluster = "cluster0.ku33n";

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url);
  const db = client.db("main");

  return {
    listings: db.collection("test_listings"),
  };
};
