import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import Query from './graphql/queries';
import Mutation from './graphql/mutations';
import typeDefs from './graphql/types';
import { ApolloServer } from 'apollo-server-express';
import expressJwt from 'express-jwt';
import jwt from 'jsonwebtoken';
import db from './db';
import bcrypt from 'bcrypt';
import { PORT } from './config';

const startServer = async () => {
  const app = express();
  app.use(
    cors(),
    express.json(),
    expressJwt({
      secret: 'jwtsecret',
      algorithms: ['HS256'],
      credentialsRequired: false,
    }),
  );

  const server = new ApolloServer({
    typeDefs,
    resolvers: { Query, Mutation },
    context: ({ req }) => {
      return req.user;
    },
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query(`SELECT * FROM users WHERE user_name = '${username}'`).then(
      (data) => {
        if (data.rowCount === 0) {
          console.log('Username does not exist');
          return res.status(400).json({ error: 'Username does not exist' });
        }
        const user = data.rows[0];
        bcrypt.compare(password, user.password).then((match) => {
          if (!match) {
            console.log('Incorrect password');
            return res.status(400).json({ error: 'Incorrect password' });
          }
          const token = jwt.sign({ user: user.id }, 'jwtsecret');
          res.send({ token });
        });
      },
    );
  });

  app.listen({ port: PORT }, () => {
    console.log(
      `✨🚀 Server started on http://localhost:${PORT}${server.graphqlPath} 🚀✨`,
    );
  });
};

startServer();
