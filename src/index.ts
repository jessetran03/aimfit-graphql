import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import Query from './graphql/queries';
import Mutation from './graphql/mutations';
import typeDefs from './graphql/types';
import { ApolloServer, gql } from 'apollo-server-express';

const startServer = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    typeDefs,
    resolvers: { Query, Mutation },
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port: 9000 }, () => {
    console.log(
      `✨🚀 Server started on http://localhost:9000${server.graphqlPath} 🚀✨`,
    );
  });
};

startServer();
