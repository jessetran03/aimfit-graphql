"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var addLogEntry_1 = __importDefault(require("./addLogEntry"));
var addWorkoutExercise_1 = __importDefault(require("./addWorkoutExercise"));
var createExercise_1 = __importDefault(require("./createExercise"));
var createUser_1 = __importDefault(require("./createUser"));
var createWorkout_1 = __importDefault(require("./createWorkout"));
var deleteWorkout_1 = __importDefault(require("./deleteWorkout"));
var updateWorkout_1 = __importDefault(require("./updateWorkout"));
var Mutation = {
    newWorkoutExercise: addWorkoutExercise_1.default,
    deleteWorkout: deleteWorkout_1.default,
    newExercise: createExercise_1.default,
    newLogEntry: addLogEntry_1.default,
    newUser: createUser_1.default,
    newWorkout: createWorkout_1.default,
    updateWorkout: updateWorkout_1.default,
};
exports.default = Mutation;
