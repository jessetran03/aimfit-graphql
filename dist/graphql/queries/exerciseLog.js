"use strict";
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
var serializeLogEntry = function (logEntry) { return ({
    id: logEntry.id,
    exercise: {
        id: logEntry.exercise_id,
        name: logEntry.exercise_name,
        muscle: logEntry.muscle,
    },
    user: {
        id: logEntry.user_id,
        username: logEntry.user_name,
        firstName: logEntry.first_name,
        lastName: logEntry.last_name,
        password: logEntry.password,
    },
    setCount: logEntry.set_count,
    repCount: logEntry.rep_count,
    weightCount: logEntry.weight_count,
    dateLogged: logEntry.date_logged,
}); };
function getExerciseLog(parent, args, context) {
    return __awaiter(this, void 0, void 0, function () {
        var filter, userId, data, exerciseLog, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filter = (args === null || args === void 0 ? void 0 : args.exerciseId)
                        ? "AND exercise_log.exercise_id = " + args.exerciseId
                        : '';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    userId = context.user;
                    return [4 /*yield*/, db_1.default.query("\n      SELECT\n        exercise_log.id as id,\n        exercises.id as exercise_id,\n        users.id as user_id,\n        set_count,\n        rep_count,\n        weight_count,\n        date_logged,\n        exercise_name,\n        muscle,\n        user_name,\n        first_name,\n        last_name,\n        password\n      FROM exercise_log\n      INNER JOIN exercises ON\n        exercise_log.exercise_id = exercises.id\n      INNER JOIN users ON\n        exercise_log.user_id = users.id\n      WHERE exercise_log.user_id = " + userId + "\n      " + filter + "\n      ORDER BY date_logged DESC\n    ")];
                case 2:
                    data = _a.sent();
                    exerciseLog = data.rows.map(serializeLogEntry);
                    return [2 /*return*/, exerciseLog];
                case 3:
                    error_1 = _a.sent();
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.default = getExerciseLog;
