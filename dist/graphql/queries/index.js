"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var exercise_1 = __importDefault(require("./exercise"));
var exercises_1 = __importDefault(require("./exercises"));
var users_1 = __importDefault(require("./users"));
var workoutExercises_1 = __importDefault(require("./workoutExercises"));
var workouts_1 = __importDefault(require("./workouts"));
var Query = {
    exercise: exercise_1.default,
    exercises: exercises_1.default,
    users: users_1.default,
    workoutExercises: workoutExercises_1.default,
    workouts: workouts_1.default,
};
exports.default = Query;
