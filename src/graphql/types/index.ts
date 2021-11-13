import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    users: [User]
    exercises: [Exercise]
    exercise(id: ID!): Exercise
    exerciseLog: [LogEntry]
    logEntry(id: ID!): LogEntry
    workouts: [Workout]
    workout(id: ID!): Workout
    workoutExercises: [WorkoutExercise]
  }

  type Mutation {
    newUser(input: CreateUserInput): User
    newExercise(input: CreateExerciseInput): Exercise
    newLogEntry(input: AddLogEntry): String
    newWorkout(input: CreateWorkoutInput): String
    newWorkoutExercise(input: AddWorkoutExerciseInput): String
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
    user: User
    day: String
    title: String
  }

  type WorkoutExercise {
    id: ID!
    workout: Workout
    exercise: Exercise
  }

  type LogEntry {
    id: ID!
    exercise: Exercise
    user: User
    setCount: Float
    repCount: Float
    weightCount: Float
    dateLogged: String
  }

  input AddLogEntry {
    exerciseId: ID!
    setCount: Float
    repCount: Float
    weightCount: Float
  }

  input AddWorkoutExerciseInput {
    workoutId: ID!
    exerciseId: ID!
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