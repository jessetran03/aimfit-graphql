import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    string: String
  }
`;
const resolvers = {
  Query: {
    string: () => 'Hello, world!',
  },
};

const startServer = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen({ port: 9000 }, () => {
    console.log(
      `🚀 Server started on http://localhost:9000${server.graphqlPath} 🚀`,
    );
  });
};

startServer();