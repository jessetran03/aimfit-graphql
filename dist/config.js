"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.NODE_ENV = exports.DATABASE_URL = void 0;
exports.DATABASE_URL = process.env.DATABASE_URL;
exports.NODE_ENV = process.env.NODE_ENV || 'development';
exports.PORT = process.env.PORT || 9000;
