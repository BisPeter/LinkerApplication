namespace Exchange.Misc
{
    /// <summary>
    /// This class contains the possible error that can happen when linking.
    /// </summary>
    public static class Errors
    {
        /// <summary>
        /// Occures when a path does not exist.
        /// </summary>
        public static Error LocalPathDoesNotExists { get; } = new Error { Code = 3100, Message = "Der angegebene lokale Pfad existiert nicht." };

        /// <summary>
        /// Occures when a given path to a local repository is mailformed.
        /// </summary>
        public static Error InvalidPathDescription { get; } = new Error { Code = 3200, Message = "Fehler in der Pfadbeschreibung. Der angegebene Pfad konnte nicht interpretiert werden." };

        /// <summary>
        /// Occures when no data exist in the repository folder.
        /// </summary>
        public static Error NoDataFound { get; } = new Error { Code = 3300, Message = "Die Dateien in dem angegeben Pfad konnten nicht eingelesen werden." };

        /// <summary>
        /// Occures when no code elemnent for a given repository could be found.
        /// </summary>
        public static Error NoCodeElementFound { get; } = new Error { Code = 2100, Message = "Es konnte kein Ergebnis gefunden werden." };

        /// <summary>
        /// Ocures when a search expression can not be interpreted by the parser.
        /// </summary>
        public static Error InvalidSearchExpression { get; } = new Error { Code = 2200, Message = "Fehler im Suchausdruck. Suchausdruck konnte nicht geparsed werden." };
    }

}
