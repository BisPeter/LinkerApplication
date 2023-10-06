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
const tsFolderParser_1 = require("./src/FileHelper/tsFolderParser");
const configuration_1 = require("./src/configuration/configuration");
const appState_1 = require("./src/configuration/appState");
const linkerIPCServer_1 = require("./src/IPC/linkerIPCServer");
const codeElementSeeker_1 = require("./src/antlrHelper/codeElementSeeker");
/**
 * Represents the entrypoint of the application
 */
class Parser {
    constructor(folderPath = '') {
        /**
         * Holds the data of the application.
         */
        this.appState = new appState_1.appState;
        /**
         * Holds the configuration of the application.
         */
        this.configuration = new configuration_1.Configuration;
        /**
         * Contains the Linker IPC server.
         */
        this.linkerIPCServer = new linkerIPCServer_1.LinkerIPCServer(this.appState, this.configuration);
        this.configuration.folderPath = folderPath;
    }
    /**
     * Runs the application in debug mode.
     */
    runApplicationDebug() {
        return __awaiter(this, void 0, void 0, function* () {
            const parser = new Parser('./Test');
            this.appState.tsFiles = yield (0, tsFolderParser_1.readFolder)(this.configuration.folderPath);
            yield (0, tsFolderParser_1.compileFiles)(this.appState);
            var codeElements = (0, codeElementSeeker_1.findCodeElement)(":kk::hallo()", 1, this.appState.tsFiles);
            console.log('TsFiles: \n');
        });
    }
    /**
     * Starts the application.
     */
    runApplication() {
        return __awaiter(this, void 0, void 0, function* () {
            const parser = new Parser();
            //this.linkerIPCServer.startServer('TypeScript');
            this.linkerIPCServer.startServer();
        });
    }
}
//const parser = new Parser('../codegena-master');
//parser.startServer('TypeScript');
//#################### TEST ####################################
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const parser = new Parser('./Test');
        yield parser.runApplicationDebug();
        (0, codeElementSeeker_1.findCodeElement)(':kk::hallo()', -1, parser.appState.tsFiles);
    });
}
//##############################################################
// test()
//######################### LIVE ######################################
const parser = new Parser();
parser.runApplication();
//##############################################################
/*const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Wait for the user to press a key before closing the console
rl.question('Press any key to exit...', () => {


  rl.close();
});*/
