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
exports.handleCodePathLookUp = exports.handleSetPath = exports.handleMethodLookUp = exports.handleLanguagelookUp = void 0;
const errors_1 = require("../Errors/errors");
const helper_1 = require("../helper");
const tsFolderParser_1 = require("../FileHelper/tsFolderParser");
const codeElementSeeker_1 = require("../antlrHelper/codeElementSeeker");
const customErrors_1 = require("../Errors/customErrors");
const error_1 = require("../Errors/error");
/**
 * Handles the LanguagelookUp Method.
 * @param message The JSON-RPC 2.0 message received from the IPC stream.
 * @param configuration The configuration of the appliacation.
 * @returns Returns a response object.
 */
function handleLanguagelookUp(message, configuration) {
    var msg = JSON.parse(message);
    var req = msg;
    const responseObject = {
        jsonRpc: "2.0",
        result: configuration.supportedLanguages,
        id: req.id,
        error: null
    };
    return JSON.stringify(responseObject);
}
exports.handleLanguagelookUp = handleLanguagelookUp;
/**
 * Handles the MethodLookUp Method.
 * @param message The JSON-RPC 2.0 message received from the IPC stream.
 * @param configuration The configuration of the appliacation.
 * @returns Returns a response object.
 */
function handleMethodLookUp(message, configuration) {
    var msg = JSON.parse(message);
    var req = msg;
    //console.log(msg);
    const responseObject = {
        jsonRpc: "2.0",
        result: (0, helper_1.validateSupportedMethods)(configuration.supportedRPCMethods, req.params),
        id: req.id,
        error: null
    };
    return JSON.stringify(responseObject);
}
exports.handleMethodLookUp = handleMethodLookUp;
/**
 * Handles the SetPath Method.
 * @param message The JSON-RPC 2.0 message received from the IPC stream.
 * @param configuration The configuration of the appliacation.
 * @returns Returns a response object.
 */
function handleSetPath(message, configuration, appState) {
    return __awaiter(this, void 0, void 0, function* () {
        var msg = JSON.parse(message);
        var req = msg;
        const responseObject = {
            jsonRpc: "2.0",
            result: false,
            id: null,
            error: null
        };
        if (!(0, helper_1.directoryExists)(req.params)) {
            responseObject.error = errors_1.Errors.LocalPathDoesNotExists;
        }
        //else if (isWellFormedFilePath(req.params)) {
        //    responseObject.error = Errors.InvalidPathDescription;
        //}
        else if (!(0, helper_1.hasTypeScriptFiles)(req.params)) {
            responseObject.error = errors_1.Errors.NoDataFound;
            //console.log(req.params);
        }
        else {
            responseObject.id = req.id;
            responseObject.result = true;
        }
        configuration.folderPath = req.params;
        appState.tsFiles = yield (0, tsFolderParser_1.readFolder)(configuration.folderPath);
        yield (0, tsFolderParser_1.compileFiles)(appState);
        return JSON.stringify(responseObject);
    });
}
exports.handleSetPath = handleSetPath;
/**
 * Handles the CodePathLookUp Method.
 * @param message The JSON-RPC 2.0 message received from the IPC stream.
 * @param configuration The congiguration of the appliacation.
 * @returns Returns a response object.
 */
function handleCodePathLookUp(message, appState) {
    var msg = JSON.parse(message);
    var req = msg;
    const responseObject = {
        jsonRpc: "2.0",
        result: {
            codeElements: null,
            appName: ''
        },
        id: req.id,
        error: null
    };
    //console.log(req);
    //console.log('searching for ' + req.params.searchString);
    try {
        var codeElements = (0, codeElementSeeker_1.findCodeElement)(req.params.searchString, req.params.resultCount, appState.tsFiles);
    }
    catch (error) {
        if (error instanceof customErrors_1.SearchstringParseError)
            responseObject.error = errors_1.Errors.InvalidPathDescription;
        else
            responseObject.error = new error_1.LinkerError(4000, error.message);
        return JSON.stringify(responseObject);
    }
    if (codeElements.length == 0)
        responseObject.error = errors_1.Errors.NoCodeElementFound;
    else
        responseObject.result.codeElements = codeElements;
    return JSON.stringify(responseObject);
}
exports.handleCodePathLookUp = handleCodePathLookUp;
