import { LinkerError } from "./error";

/**
 * This class contains the possible error that can happen when linking.
 */
export class Errors {

    /**
     * Occures when a path does not exist.
     */
    static LocalPathDoesNotExists: LinkerError = new LinkerError(3100, "Der angegebene lokale Pfad existiert nicht.");

    /**
     * Occures when a given path to a local repository is mailformed.
     */
    static InvalidPathDescription: LinkerError = new LinkerError(3200, "Fehler in der Pfadbeschreibung.Der angegebene Pfad konnte nicht interpretiert werden.");

    /**
     * Occures when no data exist in the repository folder.
     */
    static NoDataFound: LinkerError = new LinkerError(3300, "Die Dateien in dem angegeben Pfad konnten nicht eingelesen werden.");

    /**
     * Occures when no code elemnent for a given repository could be found.
     */
    static NoCodeElementFound: LinkerError = new LinkerError(2100, "Es konnte kein Ergebnis gefunden werden.");

    /**
     * Ocures when a search expression can not be interpreted by the parser.
     */
    static InvalidSearchExpression: LinkerError = new LinkerError(2200, "Fehler im Suchausdruck. Suchausdruck konnte nicht geparsed werden.");
}