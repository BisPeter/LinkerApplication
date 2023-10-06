namespace MainApplication.Miscl
{
    /// <summary>
    /// This class represents a configuration for a codeelement search.
    /// </summary>
    internal class SearchConfiguration
    {
        /// <summary>
        /// The name of the application for whitch the link should be created.
        /// </summary>
        public string AppName { get; set; }

        /// <summary>
        /// The searchstring with a code element can be found.
        /// </summary>
        public string SearchString { get; set; }

        /// <summary>
        /// The count how many found paths for the given searchstring should be returned. 
        /// </summary>
        public int ResultCount { get; set; } = -1;
    }
}
