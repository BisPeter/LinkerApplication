using Newtonsoft.Json;
using System.Collections.Generic;

namespace MainApplication.Config
{
    /// <summary>
    /// Represents a repository.
    /// </summary>
    public class Repository
    {
        /// <summary>
        /// The applications in the repository.
        /// </summary>
        [JsonProperty(PropertyName = "applications")]
        public List<Application> Applications { get; set; }

        /// <summary>
        /// The URL to the repository.
        /// </summary>
        [JsonProperty(PropertyName = "url")]
        public string URL { get; set; }

        /// <summary>
        /// The commithash of the repository for a given repository state.
        /// </summary>
        [JsonProperty(PropertyName = "commitHash")]
        public string CommitHash { get; set; }

    }
}
