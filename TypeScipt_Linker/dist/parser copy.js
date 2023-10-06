/*import { File, TypescriptParser } from 'typescript-parser'
import { createServer, Socket } from 'net';
import * as ts from 'typescript';
import { TsFolder } from './src/FileHelper/tsFolderParser';
import { TsFile } from './src/FileHelper/tsFile';
import * as readline from 'readline';
import { DSLSections } from './src/antlrHelper/dSLSections';
import { CodePathLookUpRequest, CodePathLookUpResponse, RequestObject, ResponseObject } from './src/RequestHandler/reqResp';
import { find } from './src/antlrHelper/codeElementSeeker';
import { CodeElement } from './src/antlrHelper/CodeElement';
const net = require('net');

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { TypescriptGrammarLexer } from './ANTLR/TypescriptGrammarLexer';
import { TypescriptGrammarParser } from './ANTLR/TypescriptGrammarParser';
import { TypescriptParserVisitor } from './src/antlrHelper/TypescriptParserVisitor';
import { Configuration } from './src/configuration/configuration';
import { handleLanguagelookUp, handleMethodLookUp, handleSetPath } from './src/RequestHandler/requestHandler';




class Parser {
  folderPath: string;
  parser = new TypescriptParser();
  public parsed: File | undefined = undefined;
  fileName: string = 'app.ts';
  sourceFile: string = '';
  filePath: string = 'app.ts';
  public tsFiles: TsFile[] = [];
  query: DSLSections;
  private writableStream: Socket;
  configuration: Configuration;

  constructor(folderPath: string) {
    this.folderPath = folderPath;
  }
*/
/**
* parses a whole repository
*/
/*
 async parse(fileName: string, filePath: string): Promise<File> {
   const pfile = await this.parser.parseFile(filePath + '/' + fileName, filePath);
   return pfile;
 }

 findCodeElement(dsl: string): string {
   for (let index = 0; index < this.tsFiles.length; index++) {
     if (this.tsFiles[index].parsedFile) {
       for (let index2 = 0; index2 < this.tsFiles[index].parsedFile.declarations.length; index++) {
         var line = find(dsl, this.tsFiles[index].parsedFile, 'File', this.tsFiles[index]);
         console.log(line);

         console.log('folderpath:    ' + this.folderPath);
         line = line.replace(this.folderPath.replace('/', '\\'), '');
         console.log(line);

         if (line != '') {
           return line
         }
       }
     }
   }
   //this.tsFiles.forEach((el: TsFile) => {
   //  if (el.parsedFile) {
   //    el.parsedFile.declarations.forEach(element => {
   //      var line = find(dsl, el.parsedFile, 'File', el);
   //      if (line != '') {
   //        return line
   //      }
   //    });
   //  }
   //});
   return '';
 }


 findClass(className: string) {
   this.tsFiles.forEach((el: TsFile) => {
     if (el.parsedFile) {
       el.parsedFile.declarations.forEach(element => {
         if (element.constructor.name === 'ClassDeclaration' && element.name === className) {
           console.log(element.name + ' | ' + className);
           console.log(element.start);
           const rowNumber = this.getRowNumber(element.start as number, el);
           console.log('Class ' + className + ' found at position: ' + rowNumber + '| in file: ' + el.relativePath + '\\' + el.fileName);

         }
       });
     }
   });
 }

 findFunction(functionName: string) {
   this.tsFiles.forEach((el: TsFile) => {
     if (el.parsedFile) {
       el.parsedFile.declarations.forEach(element => {
         //console.log(element.constructor.name)
         if (element.constructor.name === 'FunctionDeclaration' && element.name === functionName) {
           const rowNumber = this.getRowNumber(element.start as number, el);
           console.log('Function ' + functionName + ' found at position: ' + rowNumber + '| in file: ' + el.relativePath + '\\' + el.fileName);
           return;
         }
       });
     }
   });
 }

 getRowNumber(position: number, file: TsFile): number {
   //console.log(file.sourceFile);
   const { line } = ts.getLineAndCharacterOfPosition(file.sourceFile, position);
   const row = line + 1; // row number of the second line
   return row;
 }

 async readFolder() {
   const tsfold = new TsFolder(this.folderPath);

   await tsfold.parseFolder();
   this.tsFiles = tsfold.getTsFiles();
 }

 async compileFiles() {
   for (const element of this.tsFiles) {
     element.parsedFile = await this.parse(element.fileName, element.relativePath);
   }
 }

 private handleMethod(message: string): void {
   console.log(message);
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
       this.handleCodePathLookUp(message);
       break;
     case 'SetPath':
       response = handleSetPath(message, this.configuration);
       break;
     default:
       console.log('Method not supported');
       break;
   }

   this.writableStream.write(response + '\n');
 }

 handleCodePathLookUp(message: string) {
   var msg = JSON.parse(message);
   var req = msg as RequestObject<CodePathLookUpRequest>;
   console.log(req);
   console.log('searching for ' + req.params.dSL);
   var codepath = this.findCodeElement(req.params.dSL);
   console.log('Found ' + codepath);

   let codeElement = new CodeElement();
   codeElement.name = '';
   codeElement.path = codepath;
   const responseObject: ResponseObject<CodePathLookUpResponse> = {
     jsonRpc: "2.0",
     result: {
       codeElements: [
         codeElement
       ],
       appName: ''
     },
     id: 1,
     error: null
   };

   this.writableStream.write(JSON.stringify(responseObject) + '\n');

 }

 write(data, cb) {
   if (!this.writableStream.write(data)) {
     this.writableStream.once('drain', cb);
   } else {
     process.nextTick(cb);
   }
 }

 public startServer(pipName: string) {
   const PIPE_NAME = "\\\\.\\pipe\\" + pipName;

   console.log('Waiting for client');
   var server = createServer((socket: Socket) => {
     this.writableStream = socket;
     socket.setNoDelay(true);
     console.log('Client connected');

     socket.on('data', (data: Buffer) => {
       this.handleMethod(data.toString());
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
 }


 public startServer2(pipeName: string) {
   const PIPE_NAME = pipeName;
   const PIPE_PATH = '\\\\.\\pipe\\';

   const client = net.createConnection(PIPE_PATH + PIPE_NAME, () => {
     console.log('connected to server!');
   });

   client.on('data', (data) => {
     console.log(data.toString());
     this.handleMethod(data.toString());
   });

   client.on('end', () => {
     console.log('disconnected from server');
   });
 }

}
//const parser = new Parser('../codegena-master');
//parser.startServer('TypeScript');

async function runParser() {
 const parser = new Parser('../codegena-master');
 await parser.readFolder();
 await parser.compileFiles();
 console.log('TsFiles: \n');
 //console.log(parser.tsFiles);
 parser.startServer('TypeScript');
 //parser.findCodeElement('!ToDoTask*attachments');
}

// Create the lexer and parser
let inputStream = new ANTLRInputStream(".namespace1.namespace2:class1::method1(arg1,arg2)");
let lexer = new TypescriptGrammarLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new TypescriptGrammarParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.start();

let visi = new TypescriptParserVisitor();

visi.visit(tree);
console.log(visi.searchStringParts);
visi.searchStringParts.forEach(part => {
 console.log(part.key.toString() + ': ' + part.value);
});



//runParser();
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

// Wait for the user to press a key before closing the console
rl.question('Press any key to exit...', () => {


 rl.close();
});


*/ 
