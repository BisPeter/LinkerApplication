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
exports.TsFolder = void 0;
const path = require("path");
const fs = require("fs");
const tsFile_1 = require("./tsFile");
class TsFolder {
    constructor(folderPath) {
        this.folderPath = folderPath;
        this.tsFiles = [];
    }
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
                    const relativePath = path.relative(this.folderPath, filePath);
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
