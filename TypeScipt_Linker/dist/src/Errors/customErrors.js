"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchstringParseError = void 0;
class SearchstringParseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'SearchstringParseError';
    }
}
exports.SearchstringParseError = SearchstringParseError;
