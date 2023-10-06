"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsFile = void 0;
const ts = require("typescript");
class TsFile {
    constructor(fileName, sourceFileString, relativePath) {
        this.parsedFile = undefined;
        this.fileName = fileName;
        this.sourceFileString = sourceFileString;
        this.relativePath = relativePath;
        this.sourceFile = ts.createSourceFile(fileName, sourceFileString, ts.ScriptTarget.Latest);
    }
}
exports.TsFile = TsFile;
