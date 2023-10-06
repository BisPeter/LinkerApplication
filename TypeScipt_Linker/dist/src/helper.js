"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraysHaveSameElements = exports.hasTypeScriptFiles = exports.isWellFormedFilePath = exports.directoryExists = exports.validateSupportedMethods = void 0;
const MethodLookUp_1 = require("./RequestHandler/MethodLookUp");
const fs = require("fs");
const path = require("path");
/**
 * Validates if the supported methods are the same as the methods the main application needs.
 * @param supportedMethods The methods the linker supports
 * @param neededMethods The methods the mainapplication needs.
 * @returns Returns an arrey that contains wheter the methods are supported or not.
 */
function validateSupportedMethods(supportedMethods, neededMethods) {
    let res = [];
    neededMethods.forEach(x => {
        let lookUpObj = new MethodLookUp_1.MethodLookUp();
        lookUpObj.method = x;
        if (supportedMethods.includes(x))
            lookUpObj.supported = true;
        else
            lookUpObj.supported = false;
        res.push(lookUpObj);
    });
    return res;
}
exports.validateSupportedMethods = validateSupportedMethods;
/**
 * Determines wheter a directory exists.
 * @param path - The path to the directory
 * @returns Return true if a given directory exits.
 */
function directoryExists(path) {
    try {
        return fs.existsSync(path) && fs.statSync(path).isDirectory();
    }
    catch (error) {
        return false;
    }
}
exports.directoryExists = directoryExists;
/**
 * Determines wheter a path is well formed-
 * @param filePath The path to validate.
 * @returns Return true is a path is wellformed.
 */
function isWellFormedFilePath(filePath) {
    const normalizedPath = path.normalize(filePath);
    const isAbsolute = path.isAbsolute(normalizedPath);
    const isValid = path.parse(normalizedPath).base !== '';
    return isAbsolute && isValid;
}
exports.isWellFormedFilePath = isWellFormedFilePath;
/**
 * Determines wheter a folder contains any Typescript files.
 * @param directoryPath - The path to the folder.
 * @returns Returns true if a folder has any TypeScript files.
 */
function hasTypeScriptFiles(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    return files.some(file => path.extname(file) === '.ts');
}
exports.hasTypeScriptFiles = hasTypeScriptFiles;
/**
 * Determines wheter two arrays has the same elements.
 * @param array1
 * @param array2
 * @returns Return true when the two array contains the same elements.
 */
function arraysHaveSameElements(array1, array2) {
    const cleanArray1 = array1.filter(value => value !== '');
    const cleanArray2 = array2.filter(value => value !== '');
    if (cleanArray1.length === cleanArray2.length) {
        return true;
    }
    const sortedArray1 = cleanArray1.slice().sort();
    const sortedArray2 = cleanArray2.slice().sort();
    return sortedArray1.every((value, index) => value === sortedArray2[index]);
}
exports.arraysHaveSameElements = arraysHaveSameElements;
