"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkerError = void 0;
/**
 * Represents a JSON-RPC2.0 error object.
 */
class LinkerError extends Error {
    constructor(code, message) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
exports.LinkerError = LinkerError;
