"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var config_1 = require("./config");
var connectionString = config_1.DATABASE_URL;
var db = new pg_1.Pool({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: config_1.NODE_ENV === 'production' ? false : true,
    },
});
exports.default = db;
