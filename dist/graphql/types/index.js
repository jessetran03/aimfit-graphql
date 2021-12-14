"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    users: [User]\n    exercises: [Exercise]\n    exercise(id: ID!): Exercise\n    exerciseLog(exerciseId: ID): [LogEntry]\n    logEntry(id: ID!): LogEntry\n    workouts(id: ID): [Workout]\n    workout(id: ID!): Workout\n    workoutExercises: [WorkoutExercise]\n  }\n\n  type Mutation {\n    newUser(\n      username: String\n      firstName: String\n      lastName: String\n      password: String\n    ): User\n    newExercise(name: String, muscle: String): Exercise\n    newLogEntry(\n      exerciseId: ID!\n      setCount: Float\n      repCount: Float\n      weightCount: Float\n    ): String\n    newWorkout(day: String, title: String): String\n    newWorkoutExercise(workoutId: ID!, exerciseId: ID!): String\n    deleteWorkout(id: ID!): String\n    updateWorkout(id: ID!, day: String!, title: String!): String\n  }\n\n  type User {\n    id: ID!\n    username: String\n    firstName: String\n    lastName: String\n    password: String\n  }\n\n  type Exercise {\n    id: ID!\n    name: String\n    muscle: String\n  }\n\n  type Workout {\n    id: ID!\n    user: User\n    day: String\n    title: String\n    exercises: [Exercise]\n  }\n\n  type WorkoutExercise {\n    id: ID!\n    workout: Workout\n    exercise: Exercise\n  }\n\n  type LogEntry {\n    id: ID!\n    exercise: Exercise\n    user: User\n    setCount: Float\n    repCount: Float\n    weightCount: Float\n    dateLogged: String\n  }\n"], ["\n  type Query {\n    users: [User]\n    exercises: [Exercise]\n    exercise(id: ID!): Exercise\n    exerciseLog(exerciseId: ID): [LogEntry]\n    logEntry(id: ID!): LogEntry\n    workouts(id: ID): [Workout]\n    workout(id: ID!): Workout\n    workoutExercises: [WorkoutExercise]\n  }\n\n  type Mutation {\n    newUser(\n      username: String\n      firstName: String\n      lastName: String\n      password: String\n    ): User\n    newExercise(name: String, muscle: String): Exercise\n    newLogEntry(\n      exerciseId: ID!\n      setCount: Float\n      repCount: Float\n      weightCount: Float\n    ): String\n    newWorkout(day: String, title: String): String\n    newWorkoutExercise(workoutId: ID!, exerciseId: ID!): String\n    deleteWorkout(id: ID!): String\n    updateWorkout(id: ID!, day: String!, title: String!): String\n  }\n\n  type User {\n    id: ID!\n    username: String\n    firstName: String\n    lastName: String\n    password: String\n  }\n\n  type Exercise {\n    id: ID!\n    name: String\n    muscle: String\n  }\n\n  type Workout {\n    id: ID!\n    user: User\n    day: String\n    title: String\n    exercises: [Exercise]\n  }\n\n  type WorkoutExercise {\n    id: ID!\n    workout: Workout\n    exercise: Exercise\n  }\n\n  type LogEntry {\n    id: ID!\n    exercise: Exercise\n    user: User\n    setCount: Float\n    repCount: Float\n    weightCount: Float\n    dateLogged: String\n  }\n"])));
exports.default = typeDefs;
var templateObject_1;
