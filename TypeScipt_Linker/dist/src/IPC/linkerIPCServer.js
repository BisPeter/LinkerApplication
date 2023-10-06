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
exports.LinkerIPCServer = void 0;
const requestHandler_1 = require("../RequestHandler/requestHandler");
/**
 * Represents an IPC Server.
 */
class LinkerIPCServer {
    /**
     * Initializes an instance of the {@link LinkerIPCServer} class.
     * @param appState The application Files.
     * @param configuration The configuration of the appliaction.
     */
    constructor(appState, configuration) {
        this.appState = appState;
        this.configuration = configuration;
    }
    /**
     * This function Writes data into the IPC stream.
     * @param data The data to write in the stream.
     * @param cb
     */
    write(data, cb) {
        if (!this.writableStream.write(data)) {
            this.writableStream.once('drain', cb);
        }
        else {
            process.nextTick(cb);
        }
    }
    /**
     * Starts the IPC server.
     * @param pipName The name of the pipe to open.
     */
    /*public async startServer(pipName: string) {
      const PIPE_NAME = "\\\\.\\pipe\\" + pipName;
  
      console.log('Waiting for client');
      var server = createServer((socket: Socket) => {
        this.writableStream = socket;
        socket.setNoDelay(true);
        console.log('Client connected');

        socket.on('data', async (data: Buffer) => {
          await this.handleMethod(data.toString());
        });
  
        socket.on('end', () => {
          console.log('Client disconnected');
        });
      });
  
      server.on('error', (err: Error) => {
        console.error(`Server error: ${err}`);
      });
  
      server.listen(PIPE_NAME, () => {
        console.log(`Server listening on pipe: ${PIPE_NAME}`);
      });
    }*/
    startServer() {
        return __awaiter(this, void 0, void 0, function* () {
            process.stdin.on('data', (data) => __awaiter(this, void 0, void 0, function* () {
                var resp = yield this.handleMethod(data.toString());
                process.stdout.write(resp + '\n');
            }));
        });
    }
    sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    /**
     * This method handles the received messages from the IPC stream.
     * @param message The received message from the IPC stream.
     */
    handleMethod(message) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(message);
            const obj = JSON.parse(message);
            var method = obj.method;
            let response = '';
            switch (method) {
                case 'LanguageLookUp':
                    response = (0, requestHandler_1.handleLanguagelookUp)(message, this.configuration);
                    break;
                case 'MethodLookUp':
                    response = (0, requestHandler_1.handleMethodLookUp)(message, this.configuration);
                    break;
                case 'CodePathLookUp':
                    response = (0, requestHandler_1.handleCodePathLookUp)(message, this.appState);
                    break;
                case 'SetPath':
                    response = yield (0, requestHandler_1.handleSetPath)(message, this.configuration, this.appState);
                    break;
                default:
                    //console.log('Method not supported');
                    break;
            }
            return response;
            //this.writableStream.write(response + '\n');
        });
    }
}
exports.LinkerIPCServer = LinkerIPCServer;
