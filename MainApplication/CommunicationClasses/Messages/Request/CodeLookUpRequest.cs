using Newtonsoft.Json;

namespace CommunicationClasses.Messages.Request
{
    /// <summary>
    /// Represents a <see cref="CodeLookUpRequest"/> object.
    /// </summary>
    public class CodeLookUpRequest
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
