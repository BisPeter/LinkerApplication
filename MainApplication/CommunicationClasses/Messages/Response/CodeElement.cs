using Newtonsoft.Json;

namespace CommunicationClasses.Messages.Response
{
    /// <summary>
    /// Represents a found codeelement
    /// </summary>
    public class CodeElement
    {
        /// <summary>
        /// The path to the codeelement.
        /// </summary>
        [JsonProperty(PropertyName = "path")]
        public string Path { get; set; }

        /// <summary>
        /// The name of the found codeelement.
        /// </summary>
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
    }
}
