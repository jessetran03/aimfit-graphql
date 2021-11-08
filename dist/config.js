"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.POSTGRES_URI = void 0;
exports.POSTGRES_URI = process.env.POSTGRES_URI;
exports.PORT = process.env.PORT || 9000;
