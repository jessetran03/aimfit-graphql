"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    users: [User]\n    exercises: [Exercise]\n    exercise(id: ID!): Exercise\n    exerciseLog: [LogEntry]\n    logEntry(id: ID!): LogEntry\n    workouts: [Workout]\n    workout(id: ID!): Workout\n    workoutExercises: [WorkoutExercise]\n  }\n\n  type Mutation {\n    newUser(input: CreateUserInput): User\n    newExercise(input: CreateExerciseInput): Exercise\n    newWorkout(input: CreateWorkoutInput): String\n    newWorkoutExercise(input: AddWorkoutExerciseInput): String\n    deleteWorkout(id: ID!): String\n  }\n\n  type User {\n    id: ID!\n    username: String\n    firstName: String\n    lastName: String\n    password: String\n  }\n\n  type Exercise {\n    id: ID!\n    name: String\n    muscle: String\n  }\n\n  type Workout {\n    id: ID!\n    user: User\n    day: String\n    title: String\n  }\n\n  type WorkoutExercise {\n    id: ID!\n    workout: Workout\n    exercise: Exercise\n  }\n\n  type LogEntry {\n    id: ID!\n    exercise: Exercise\n    user: User\n    setCount: Float\n    repCount: Float\n    weightCount: Float\n    dateLogged: String\n  }\n\n  input AddWorkoutExerciseInput {\n    workoutId: ID!\n    exerciseId: ID!\n  }\n\n  input CreateUserInput {\n    username: String\n    firstName: String\n    lastName: String\n    password: String\n  }\n\n  input CreateExerciseInput {\n    name: String\n    muscle: String\n  }\n\n  input CreateWorkoutInput {\n    day: String\n    title: String\n  }\n"], ["\n  type Query {\n    users: [User]\n    exercises: [Exercise]\n    exercise(id: ID!): Exercise\n    exerciseLog: [LogEntry]\n    logEntry(id: ID!): LogEntry\n    workouts: [Workout]\n    workout(id: ID!): Workout\n    workoutExercises: [WorkoutExercise]\n  }\n\n  type Mutation {\n    newUser(input: CreateUserInput): User\n    newExercise(input: CreateExerciseInput): Exercise\n    newWorkout(input: CreateWorkoutInput): String\n    newWorkoutExercise(input: AddWorkoutExerciseInput): String\n    deleteWorkout(id: ID!): String\n  }\n\n  type User {\n    id: ID!\n    username: String\n    firstName: String\n    lastName: String\n    password: String\n  }\n\n  type Exercise {\n    id: ID!\n    name: String\n    muscle: String\n  }\n\n  type Workout {\n    id: ID!\n    user: User\n    day: String\n    title: String\n  }\n\n  type WorkoutExercise {\n    id: ID!\n    workout: Workout\n    exercise: Exercise\n  }\n\n  type LogEntry {\n    id: ID!\n    exercise: Exercise\n    user: User\n    setCount: Float\n    repCount: Float\n    weightCount: Float\n    dateLogged: String\n  }\n\n  input AddWorkoutExerciseInput {\n    workoutId: ID!\n    exerciseId: ID!\n  }\n\n  input CreateUserInput {\n    username: String\n    firstName: String\n    lastName: String\n    password: String\n  }\n\n  input CreateExerciseInput {\n    name: String\n    muscle: String\n  }\n\n  input CreateWorkoutInput {\n    day: String\n    title: String\n  }\n"])));
exports.default = typeDefs;
var templateObject_1;
