"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
const error_1 = require("./error");
/**
 * This class contains the possible error that can happen when linking.
 */
class Errors {
}
/**
 * Occures when a path does not exist.
 */
Errors.LocalPathDoesNotExists = new error_1.LinkerError(3100, "Der angegebene lokale Pfad existiert nicht.");
/**
 * Occures when a given path to a local repository is mailformed.
 */
Errors.InvalidPathDescription = new error_1.LinkerError(3200, "Fehler in der Pfadbeschreibung.Der angegebene Pfad konnte nicht interpretiert werden.");
/**
 * Occures when no data exist in the repository folder.
 */
Errors.NoDataFound = new error_1.LinkerError(3300, "Die Dateien in dem angegeben Pfad konnten nicht eingelesen werden.");
/**
 * Occures when no code elemnent for a given repository could be found.
 */
Errors.NoCodeElementFound = new error_1.LinkerError(2100, "Es konnte kein Ergebnis gefunden werden.");
/**
 * Ocures when a search expression can not be interpreted by the parser.
 */
Errors.InvalidSearchExpression = new error_1.LinkerError(2200, "Fehler im Suchausdruck. Suchausdruck konnte nicht geparsed werden.");
exports.Errors = Errors;
