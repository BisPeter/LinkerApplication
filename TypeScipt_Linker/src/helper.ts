import { MethodLookUp } from "./RequestHandler/MethodLookUp";
import * as fs from 'fs';
import * as path from 'path';

/**
 * Validates if the supported methods are the same as the methods the main application needs.
 * @param supportedMethods The methods the linker supports
 * @param neededMethods The methods the mainapplication needs.
 * @returns Returns an arrey that contains wheter the methods are supported or not.
 */
export function validateSupportedMethods(supportedMethods: string[], neededMethods: string[]): MethodLookUp[] {
    let res = [] as MethodLookUp[];
    neededMethods.forEach(x => {
        let lookUpObj = new MethodLookUp()
        lookUpObj.method = x;
        if (supportedMethods.includes(x))
            lookUpObj.supported = true;
        else
            lookUpObj.supported = false;
        res.push(lookUpObj);
    });

    return res;
}

/**
 * Determines wheter a directory exists.
 * @param path - The path to the directory
 * @returns Return true if a given directory exits.
 */
export function directoryExists(path: string): boolean {
    try {
        return fs.existsSync(path) && fs.statSync(path).isDirectory();
    } catch (error) {
        return false;
    }
}

/**
 * Determines wheter a path is well formed-
 * @param filePath The path to validate.
 * @returns Return true is a path is wellformed.
 */
export function isWellFormedFilePath(filePath: string): boolean {
    const normalizedPath = path.normalize(filePath);
    const isAbsolute = path.isAbsolute(normalizedPath);
    const isValid = path.parse(normalizedPath).base !== '';

    return isAbsolute && isValid;
}

/**
 * Determines wheter a folder contains any Typescript files.
 * @param directoryPath - The path to the folder.
 * @returns Returns true if a folder has any TypeScript files.
 */
export function hasTypeScriptFiles(directoryPath: string): boolean {
    const files = fs.readdirSync(directoryPath);

    return files.some(file => path.extname(file) === '.ts');
}

/**
 * Determines wheter two arrays has the same elements.
 * @param array1 
 * @param array2 
 * @returns Return true when the two array contains the same elements.
 */
export function arraysHaveSameElements(array1: string[], array2: string[]): boolean {
    const cleanArray1 = array1.filter(value => value !== '');
    const cleanArray2 = array2.filter(value => value !== '');
    if (cleanArray1.length === cleanArray2.length) {
        return true;
    }

    const sortedArray1 = cleanArray1.slice().sort();
    const sortedArray2 = cleanArray2.slice().sort();

    return sortedArray1.every((value, index) => value === sortedArray2[index]);
}
