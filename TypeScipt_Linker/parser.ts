import { compileFiles, readFolder } from './src/FileHelper/tsFolderParser';
import * as readline from 'readline';
import { Configuration } from './src/configuration/configuration';
import { appState } from './src/configuration/appState';
import { LinkerIPCServer } from './src/IPC/linkerIPCServer';
import { findCodeElement } from './src/antlrHelper/codeElementSeeker';

/**
 * Represents the entrypoint of the application
 */
class Parser {
  /**
   * Holds the data of the application.
   */
  appState: appState = new appState;

  /**
   * Holds the configuration of the application.
   */
  configuration: Configuration = new Configuration;

  /**
   * Contains the Linker IPC server.
   */
  linkerIPCServer: LinkerIPCServer = new LinkerIPCServer(this.appState, this.configuration);

  constructor(folderPath: string = '') {
    this.configuration.folderPath = folderPath;
  }

  /**
   * Runs the application in debug mode.
   */
  async runApplicationDebug() {
    const parser = new Parser('./Test');
    this.appState.tsFiles = await readFolder(this.configuration.folderPath);
    await compileFiles(this.appState);

    var codeElements = findCodeElement(":kk::hallo()", 1, this.appState.tsFiles);
    console.log('TsFiles: \n');
  }

  /**
   * Starts the application.
   */
  async runApplication() {
    const parser = new Parser();
    //this.linkerIPCServer.startServer('TypeScript');
    this.linkerIPCServer.startServer();
  }

}
//const parser = new Parser('../codegena-master');
//parser.startServer('TypeScript');



//#################### TEST ####################################



async function test() {
  const parser = new Parser('./Test');
  await parser.runApplicationDebug();
  findCodeElement(':kk::hallo()',-1,parser.appState.tsFiles);
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


