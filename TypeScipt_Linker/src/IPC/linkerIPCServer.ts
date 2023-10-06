import { createServer, Socket } from 'net';
import { handleCodePathLookUp, handleLanguagelookUp, handleMethodLookUp, handleSetPath } from '../RequestHandler/requestHandler';
import { appState } from '../configuration/appState';
import { Configuration } from '../configuration/configuration';

/**
 * Represents an IPC Server.
 */
export class LinkerIPCServer{

    /**
     * Contains the streaming endpoint
     */
    private writableStream: Socket;

    /**
     * Holds application data.
     */
    appState: appState;

    /**
     * Holds the App configuration.
     */
    configuration: Configuration;

    /**
     * Initializes an instance of the {@link LinkerIPCServer} class.
     * @param appState The application Files.
     * @param configuration The configuration of the appliaction.
     */
    constructor(appState: appState,configuration: Configuration) {
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
        } else {
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

      public async startServer(){      
          process.stdin.on('data', async (data: Buffer) => {       
            var resp = await this.handleMethod(data.toString());
            process.stdout.write(resp + '\n');
          });
        }       

      sleep(ms: number): Promise<void> {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }

      /**
       * This method handles the received messages from the IPC stream.
       * @param message The received message from the IPC stream.
       */
      private async handleMethod(message: string):Promise<string> {
        //console.log(message);
        const obj = JSON.parse(message);
        var method = obj.method;
    
        let response = '';
    
        switch (method) {
          case 'LanguageLookUp':
            response = handleLanguagelookUp(message, this.configuration);
            break;
          case 'MethodLookUp':
            response = handleMethodLookUp(message, this.configuration);
            break;
          case 'CodePathLookUp':
            response = handleCodePathLookUp(message,this.appState);
            break;
          case 'SetPath':
            response = await handleSetPath(message, this.configuration, this.appState);
            break;
          default:
            //console.log('Method not supported');
            break;
        }
return response;
        //this.writableStream.write(response + '\n');
      }  
}