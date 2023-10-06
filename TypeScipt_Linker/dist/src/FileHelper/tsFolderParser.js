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
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileFiles = exports.parse = exports.readFolder = exports.TsFolder = void 0;
const typescript_parser_1 = require("typescript-parser");
const path = require("path");
const fs = require("fs");
const tsFile_1 = require("./tsFile");
/**
 * This class extract all the .ts files from a given folder.
 */
class TsFolder {
    constructor(folderPath) {
        this.folderPath = folderPath;
        /**
         * The extracted .ts files.
         */
        this.tsFiles = [];
        this.repositoryFolder = '' + folderPath;
    }
    /**
     * Extract all the .ts files from a folder .
     */
    parseFolder() {
        return __awaiter(this, void 0, void 0, function* () {
            const files = yield fs.promises.readdir(this.folderPath);
            for (const file of files) {
                const filePath = path.join(this.folderPath, file);
                const stats = yield fs.promises.stat(filePath);
                if (stats.isDirectory()) {
                    const subFolder = new TsFolder(filePath);
                    yield subFolder.parseFolder();
                    this.tsFiles.push(...subFolder.getTsFiles());
                }
                else if (stats.isFile() && path.extname(filePath) === '.ts') {
                    const sourceFileString = yield fs.promises.readFile(filePath, 'utf-8');
                    const tsFile = new tsFile_1.TsFile(file, sourceFileString, this.folderPath);
                    this.tsFiles.push(tsFile);
                }
            }
        });
    }
    getTsFiles() {
        return this.tsFiles;
    }
}
exports.TsFolder = TsFolder;
/**
 *
 * @param folderPath
 * @returns Returns the parsed TsFiles
 */
function readFolder(folderPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const tsfold = new TsFolder(folderPath);
        yield tsfold.parseFolder();
        var files = tsfold.getTsFiles();
        for (const element of files) {
            element.relativePath = path.relative(folderPath, element.filePath);
        }
        return files;
    });
}
exports.readFolder = readFolder;
/**
* parses a into a tree.
*/
function parse(fileName, filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        let parser = new typescript_parser_1.TypescriptParser();
        const pfile = yield parser.parseFile(filePath + '/' + fileName, filePath);
        return pfile;
    });
}
exports.parse = parse;
/**
 * Gets the AST of the tsfiles.
 * @param appState
 */
function compileFiles(appState) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const element of appState.tsFiles) {
            element.parsedFile = yield parse(element.fileName, element.filePath);
        }
    });
}
exports.compileFiles = compileFiles;
