import { File } from 'typescript-parser'
import * as ts from 'typescript';

/**
 * Represents a .ts file.
 */
export class TsFile {

    /**
     * The parsed instance of the TypeScript file.
     */
    public parsedFile: File | undefined = undefined;

    /**
     * The name of the parse file.
     */
    public fileName: string;

    /**
     * The string representation of the source file.
     */
    public sourceFileString: string;

    /**
     * The path to the file.
     */
    public filePath:string;

    /**
     * The relative path to the file in the repository folder.
     */
    public relativePath: string;

    /**
     * The sourceFile.
     */
    public sourceFile: ts.SourceFile;

    /**
     * Creates an instance of the {@link TsFile} class.
     * @param fileName - The name of the File.
     * @param sourceFileString - The string representation of the source file.
     * @param relativePath - The relative path to the file in the repository folder.
     */
    constructor(fileName: string, sourceFileString: string, filePath: string) {
        this.fileName = fileName;
        this.sourceFileString = sourceFileString;
        this.filePath = filePath;

        this.sourceFile = ts.createSourceFile(fileName, sourceFileString, ts.ScriptTarget.Latest);
    }
}