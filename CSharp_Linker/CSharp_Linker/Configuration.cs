namespace CSharp_Linker
{
    /// <summary>
    /// This class represents the configuration of the application.
    /// </summary>
    public static class Configuration
    {
        /// <summary>
        /// The path to the .csproj file.
        /// </summary>
        public static string CsProjPath { get; set; } = String.Empty;

        /// <summary>
        /// The path to the Repository where the application data is that has to be linked.
        /// </summary>
        public static string RepoPath { get; set; }

        /// <summary>
        /// The supported programming language of the application.
        /// </summary>
        public static List<string> SupportedLanguages { get; } = new List<string> { "CSharp" };

        /// <summary>
        /// The supported methods of the application.
        /// </summary>
        public static List<string> SupportedMehtods { get; } = new List<string>()
                {
                    "MethodLookUp",
                    "LanguageLookUp",
                    "CodePathLookUp",
                    "SetPath"
                };


    }
}

