"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("../.././db"));
var serializeWorkout = function (workout) { return ({
    id: workout.id,
    user: {
        id: workout.user_id,
        username: workout.user_name,
        firstName: workout.first_name,
        lastName: workout.last_name,
        dateCreated: workout.date_created,
        dateModified: workout.date_modified,
        password: workout.password,
    },
    title: workout.title,
    day: workout.day,
}); };
var serializeExercise = function (exercise) { return ({
    id: exercise.exercise_id,
    muscle: exercise.muscle,
    name: exercise.exercise_name,
}); };
function getWorkouts(parent, args, context) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, filter, id, data, exerciseData, workoutExercises_1, workouts, workoutsFull, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    userId = context.user;
                    filter = '';
                    if (args === null || args === void 0 ? void 0 : args.id) {
                        id = args.id;
                        filter = "AND workouts.id = " + id;
                    }
                    return [4 /*yield*/, db_1.default.query("\n      SELECT\n        workouts.id as id,\n        users.id as user_id,\n        day,\n        title,\n        user_name,\n        first_name,\n        last_name,\n        password\n      FROM workouts\n      INNER JOIN users ON\n        workouts.user_id = users.id\n      WHERE user_id = " + userId + "\n      " + filter + "\n    ")];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, db_1.default.query("\n      SELECT\n        workout_exercises.id,\n        workouts.id as workout_id,\n        exercises.id as exercise_id,\n        muscle,\n        exercise_name\n      FROM workout_exercises\n      INNER JOIN workouts\n      ON workout_exercises.workout_id = workouts.id\n      INNER JOIN exercises\n      ON workout_exercises.exercise_id = exercises.id;\n    ")];
                case 2:
                    exerciseData = _a.sent();
                    workoutExercises_1 = exerciseData.rows;
                    workouts = data.rows.map(serializeWorkout);
                    workoutsFull = workouts.map(function (workout) {
                        var exercises = workoutExercises_1
                            .filter(function (workoutExercise) { return workoutExercise.workout_id === workout.id; })
                            .map(serializeExercise);
                        var workoutFull = __assign(__assign({}, workout), { exercises: exercises });
                        return workoutFull;
                    });
                    return [2 /*return*/, workoutsFull];
                case 3:
                    error_1 = _a.sent();
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.default = getWorkouts;
