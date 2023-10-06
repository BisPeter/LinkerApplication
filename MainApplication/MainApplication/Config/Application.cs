using Newtonsoft.Json;

namespace MainApplication.Config
{
    /// <summary>
    /// This class holds data for an application in a repository.
    /// </summary>
    public class Application
    {
        /// <summary>
        /// The language of the application.
        /// </summary>
        [JsonProperty(PropertyName = "lang")]
        public string Lang { get; set; }

        /// <summary>
        /// The name of the application.
        /// </summary>
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        /// <summary>
        /// The relative path in the repository folder to the application data.
        /// </summary>
        [JsonProperty(PropertyName = "relativePath")]
        public string RelativePath { get; set; }
    }
}
