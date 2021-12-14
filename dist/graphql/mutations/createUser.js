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
var bcrypt_1 = __importDefault(require("bcrypt"));
var db_1 = __importDefault(require("../.././db"));
function createUser(parent, args) {
    return __awaiter(this, void 0, void 0, function () {
        var username, firstName, lastName, password, userData, REGEX_UPPER_LOWER_NUMBER_SPECIAL, hashedPassword, data, newUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    username = args.username, firstName = args.firstName, lastName = args.lastName, password = args.password;
                    return [4 /*yield*/, db_1.default.query("\n      SELECT 1\n      FROM users\n      WHERE users.user_name = '" + username + "';\n    ")];
                case 1:
                    userData = _a.sent();
                    if (userData.rowCount > 0) {
                        throw 'Username already exists';
                    }
                    REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;
                    if (password.length < 8) {
                        throw 'Password must be longer than 8 characters';
                    }
                    if (password.length > 72) {
                        throw 'Password must be less than 72 characters';
                    }
                    if (password.startsWith(' ') || password.endsWith(' ')) {
                        throw 'Password must not start or end with empty spaces';
                    }
                    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
                        throw 'Password must contain one upper case, lower case, number and special character';
                    }
                    return [4 /*yield*/, bcrypt_1.default.hash(args.password, 12)];
                case 2:
                    hashedPassword = _a.sent();
                    return [4 /*yield*/, db_1.default.query("\n      INSERT INTO users (user_name, first_name, last_name, password)\n      VALUES ('" + username + "', '" + firstName + "', '" + lastName + "', '" + hashedPassword + "')\n      RETURNING *;\n    ")];
                case 3:
                    data = _a.sent();
                    newUser = serializeUser(data.rows[0]);
                    return [2 /*return*/, newUser];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    throw error_1;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.default = createUser;
var serializeUser = function (user) { return ({
    id: user.id,
    username: user.user_name,
    firstName: user.first_name,
    lastName: user.last_name,
    password: user.password,
    dateCreated: user.date_created,
}); };
