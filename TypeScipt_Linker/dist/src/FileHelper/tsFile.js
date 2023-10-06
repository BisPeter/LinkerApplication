"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsFile = void 0;
const ts = require("typescript");
/**
 * Represents a .ts file.
 */
class TsFile {
    /**
     * Creates an instance of the {@link TsFile} class.
     * @param fileName - The name of the File.
     * @param sourceFileString - The string representation of the source file.
     * @param relativePath - The relative path to the file in the repository folder.
     */
    constructor(fileName, sourceFileString, filePath) {
        /**
         * The parsed instance of the TypeScript file.
         */
        this.parsedFile = undefined;
        this.fileName = fileName;
        this.sourceFileString = sourceFileString;
        this.filePath = filePath;
        this.sourceFile = ts.createSourceFile(fileName, sourceFileString, ts.ScriptTarget.Latest);
    }
}
exports.TsFile = TsFile;
