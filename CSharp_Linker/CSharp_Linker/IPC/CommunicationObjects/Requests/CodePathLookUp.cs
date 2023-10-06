using Newtonsoft.Json;

namespace CSharp_Linker.IPC.CommunicationObjects.Requests
{
    /// <summary>
    /// Represents a <see cref="CodePathLookUp"/> object.
    /// </summary>
    public class CodePathLookUp
    {
        /// <summary>
        /// The searchstring whit what a codeelement is searched.
        /// </summary>
        [JsonProperty(PropertyName = "searchString")]
        public string SearchString { get; set; }

        /// <summary>
        /// The resultCount of how many results should be returned.
        /// </summary>
        [JsonProperty(PropertyName = "resultCount")]
        public int ResultCount { get; set; }
    }
}
