import { File, TypescriptParser } from 'typescript-parser';
import * as path from 'path';
import * as fs from 'fs';
import { TsFile } from './tsFile';
import { appState } from '../configuration/appState';

/**
 * This class extract all the .ts files from a given folder.
 */
export class TsFolder {

  /**
   * The extracted .ts files.
   */
  private tsFiles: TsFile[] = [];

  private repositoryFolder: string;
  constructor(private folderPath: string) { this.repositoryFolder = '' + folderPath; }

  /**
   * Extract all the .ts files from a folder .
   */
  async parseFolder() {
    const files = await fs.promises.readdir(this.folderPath);
    for (const file of files) {
      const filePath = path.join(this.folderPath, file);
      const stats = await fs.promises.stat(filePath);
      if (stats.isDirectory()) {
        const subFolder = new TsFolder(filePath);
        await subFolder.parseFolder();
        this.tsFiles.push(...subFolder.getTsFiles());
      } else if (stats.isFile() && path.extname(filePath) === '.ts') {
        const sourceFileString = await fs.promises.readFile(filePath, 'utf-8');
        const tsFile = new TsFile(file, sourceFileString, this.folderPath);
        this.tsFiles.push(tsFile);
      }
    }
  }


  getTsFiles(): TsFile[] {
    return this.tsFiles;
  }
}

/**
 * 
 * @param folderPath 
 * @returns Returns the parsed TsFiles
 */
export async function readFolder(folderPath: string): Promise<TsFile[]> {
  const tsfold = new TsFolder(folderPath);
  await tsfold.parseFolder();
  var files = tsfold.getTsFiles();
  for (const element of files) {
    element.relativePath = path.relative(folderPath, element.filePath);
  }

  return files;
}

/**
* parses a into a tree.
*/
export async function parse(fileName: string, filePath: string): Promise<File> {
  let parser = new TypescriptParser();
  const pfile = await parser.parseFile(filePath + '/' + fileName, filePath);
  return pfile;
}

/**
 * Gets the AST of the tsfiles.
 * @param appState 
 */

export async function compileFiles(appState: appState) {
  for (const element of appState.tsFiles) {
    element.parsedFile = await parse(element.fileName, element.filePath);
  }
}

