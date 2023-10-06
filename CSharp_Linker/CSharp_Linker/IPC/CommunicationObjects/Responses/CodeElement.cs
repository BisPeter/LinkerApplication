using Newtonsoft.Json;

namespace CSharp_Linker.IPC.CommunicationObjects.Responses
{
    /// <summary>
    /// Represents a found Codeelment.
    /// </summary>
    public class CodeElement
    {
        /// <summary>
        /// The relative path to the codeelement.
        /// </summary>
        [JsonProperty(PropertyName = "path")]
        public string Path { get; set; }

        /// <summary>
        /// The full path to the codeelement.
        /// </summary>
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
    }
}
