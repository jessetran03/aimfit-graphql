import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import Query from './graphql/queries';
// import Mutation from './graphql/mutations';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    users: [User]
    exercises: [Exercise]
    exercise(id: ID!): Exercise
    workouts: [Workout]
    workout(id: ID!): Workout
    workoutExercises: [WorkoutExercise]
  }

  type Mutation {
    newUser(input: CreateUserInput): User
    newExercise(input: CreateExerciseInput): Exercise
    newWorkout(input: CreateWorkoutInput): Workout
    deleteWorkout(id: ID!): String
  }

  type User {
    id: ID!
    username: String
    firstName: String
    lastName: String
    password: String
  }

  type Exercise {
    id: ID!
    name: String
    muscle: String
  }

  type Workout {
    id: ID!
    userId: ID!
    day: String
    title: String
  }

  type WorkoutExercise {
    id: ID!
    userId: ID!
    exerciseId: ID!
    name: String
    muscle: String
  }

  input CreateUserInput {
    username: String
    firstName: String
    lastName: String
    password: String
  }

  input CreateExerciseInput {
    name: String
    muscle: String
  }

  input CreateWorkoutInput {
    day: String
    title: String
  }
`;
const resolvers = { Query };

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
