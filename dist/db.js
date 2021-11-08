"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var config_1 = require("./config");
var connectionString = config_1.DATABASE_URL;
var db = new pg_1.Pool({
    connectionString: connectionString,
});
exports.default = db;
