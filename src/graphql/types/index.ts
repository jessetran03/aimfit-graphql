import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    users: [User]
    exercises: [Exercise]
    exercise(id: ID!): Exercise
    exerciseLog(exerciseId: ID): [LogEntry]
    logEntry(id: ID!): LogEntry
    workouts(id: ID): [Workout]
    workout(id: ID!): Workout
    workoutExercises: [WorkoutExercise]
  }

  type Mutation {
    newUser(
      username: String
      firstName: String
      lastName: String
      password: String
    ): User
    newExercise(name: String, muscle: String): Exercise
    newLogEntry(
      exerciseId: ID!
      setCount: Float
      repCount: Float
      weightCount: Float
    ): String
    newWorkout(day: String, title: String): String
    newWorkoutExercise(workoutId: ID!, exerciseId: ID!): String
    deleteWorkout(id: ID!): String
    updateWorkout(id: ID!, day: String!, title: String!): String
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
    exercises: [Exercise]
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
`;

export default typeDefs;
