import { gql } from 'apollo-server-express';
// import User from './User';

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
    workoutId: ID!
    exercise: Exercise
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

export default typeDefs;