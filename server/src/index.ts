import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql/index";
const app = express();
const port = 9000;

const runServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app, path: "/" });
};

runServer();

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
