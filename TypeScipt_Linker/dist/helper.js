"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractFirstToken = void 0;
function extractFirstToken(str) {
    let i = 0;
    while (i < str.length && str[i].match(/[A-Za-z0-9]/)) {
        i++;
    }
    return [str.slice(0, i), str.slice(i)];
}
exports.extractFirstToken = extractFirstToken;
