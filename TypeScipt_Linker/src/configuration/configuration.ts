/**
 * Represents the configuration of the application.
 */
export class Configuration {

    /**
     * The local path to the repository.
     */
    repoPath: string = '';

    /**
     * The JSON-RPC 2.0 methods this application supports.
     */
    supportedRPCMethods: string[] = [
        "MethodLookUp",
        "LanguageLookUp",
        "CodePathLookUp",
        "SetPath"
    ];

    /**
     * The programming languages this application supports.
     */
    supportedLanguages:string[] = [
        "TypeScript"
    ]

    folderPath:string = '';
}