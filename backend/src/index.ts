import express from "express";
import { createSchema, createYoga } from "graphql-yoga";
import { typeDefs } from "./graphql/schema/index.js";
import { resolvers } from "./graphql/resolvers/index.js";
const app = express();

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
});

app.use("/graphql", yoga);

app.listen(4000, () => {
  console.log("App is running on port http://localhost:8080");
});
