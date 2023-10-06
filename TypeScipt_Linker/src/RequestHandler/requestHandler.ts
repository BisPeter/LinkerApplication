import { CodeElement } from "../antlrHelper/CodeElement";
import { Configuration } from "../configuration/configuration";
import { CodePathLookUpRequest, CodePathLookUpResponse, RequestObject, ResponseObject } from "./reqResp";
import { Errors } from "../Errors/errors";
import { MethodLookUp } from "./MethodLookUp";
import { directoryExists, hasTypeScriptFiles, isWellFormedFilePath, validateSupportedMethods } from "../helper";
import { compileFiles, readFolder } from "../FileHelper/tsFolderParser";
import { appState } from "../configuration/appState";
import { findCodeElement } from "../antlrHelper/codeElementSeeker";
import { SearchstringParseError } from "../Errors/customErrors";
import { LinkerError } from "../Errors/error";

/**
 * Handles the LanguagelookUp Method.
 * @param message The JSON-RPC 2.0 message received from the IPC stream.
 * @param configuration The configuration of the appliacation.
 * @returns Returns a response object.
 */
export function handleLanguagelookUp(message: string, configuration: Configuration): string {
    var msg = JSON.parse(message);
    var req = msg as RequestObject<null>;

    const responseObject: ResponseObject<string[]> = {
        jsonRpc: "2.0",
        result: configuration.supportedLanguages,
        id: req.id,
        error: null
    };

    return JSON.stringify(responseObject);
}

/**
 * Handles the MethodLookUp Method.
 * @param message The JSON-RPC 2.0 message received from the IPC stream.
 * @param configuration The configuration of the appliacation.
 * @returns Returns a response object.
 */
export function handleMethodLookUp(message: string, configuration: Configuration): string {
    var msg = JSON.parse(message);
    var req = msg as RequestObject<string[]>;
    //console.log(msg);
    const responseObject: ResponseObject<MethodLookUp[]> = {
        jsonRpc: "2.0",
        result: validateSupportedMethods(configuration.supportedRPCMethods, req.params),
        id: req.id,
        error: null
    };

    return JSON.stringify(responseObject);
}

/**
 * Handles the SetPath Method.
 * @param message The JSON-RPC 2.0 message received from the IPC stream.
 * @param configuration The configuration of the appliacation.
 * @returns Returns a response object.
 */
export async function handleSetPath(message: string, configuration: Configuration, appState: appState): Promise<string> {
    var msg = JSON.parse(message);
    var req = msg as RequestObject<string>;

    const responseObject: ResponseObject<boolean> = {
        jsonRpc: "2.0",
        result: false,
        id: null,
        error: null
    };

    if (!directoryExists(req.params)) {
        responseObject.error = Errors.LocalPathDoesNotExists;
    }
    //else if (isWellFormedFilePath(req.params)) {
    //    responseObject.error = Errors.InvalidPathDescription;
    //}
    else if (!hasTypeScriptFiles(req.params)) {
        responseObject.error = Errors.NoDataFound
        //console.log(req.params);
    }
    else {
        responseObject.id = req.id;
        responseObject.result = true;
    }

    configuration.folderPath = req.params;
    appState.tsFiles = await readFolder(configuration.folderPath);
    await compileFiles(appState);
    return JSON.stringify(responseObject);
}

/**
 * Handles the CodePathLookUp Method.
 * @param message The JSON-RPC 2.0 message received from the IPC stream.
 * @param configuration The congiguration of the appliacation.
 * @returns Returns a response object.
 */
export function handleCodePathLookUp(message: string, appState: appState): string {
    var msg = JSON.parse(message);
    var req = msg as RequestObject<CodePathLookUpRequest>;

    const responseObject: ResponseObject<CodePathLookUpResponse> = {
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
        var codeElements = findCodeElement(req.params.searchString, req.params.resultCount, appState.tsFiles);
    }
    catch (error) {
        if (error instanceof SearchstringParseError)
            responseObject.error = Errors.InvalidPathDescription;
        else
            responseObject.error = new LinkerError(4000, error.message);
        return JSON.stringify(responseObject);
    }


    if (codeElements.length == 0)
        responseObject.error = Errors.NoCodeElementFound;
    else
        responseObject.result.codeElements = codeElements;

    return JSON.stringify(responseObject);
}
