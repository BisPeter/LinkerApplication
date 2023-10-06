"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
/**
 * Represents the configuration of the application.
 */
class Configuration {
    constructor() {
        /**
         * The local path to the repository.
         */
        this.repoPath = '';
        /**
         * The JSON-RPC 2.0 methods this application supports.
         */
        this.supportedRPCMethods = [
            "MethodLookUp",
            "LanguageLookUp",
            "CodePathLookUp",
            "SetPath"
        ];
        /**
         * The programming languages this application supports.
         */
        this.supportedLanguages = [
            "TypeScript"
        ];
        this.folderPath = '';
    }
}
exports.Configuration = Configuration;
