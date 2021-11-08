"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createExercise_1 = __importDefault(require("./createExercise"));
var createUser_1 = __importDefault(require("./createUser"));
var createWorkout_1 = __importDefault(require("./createWorkout"));
var deleteWorkout_1 = __importDefault(require("./deleteWorkout"));
var Mutation = {
    deleteWorkout: deleteWorkout_1.default,
    newExercise: createExercise_1.default,
    newUser: createUser_1.default,
    newWorkout: createWorkout_1.default,
};
exports.default = Mutation;