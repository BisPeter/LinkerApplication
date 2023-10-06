using Newtonsoft.Json;
using System.Collections.Generic;

namespace MainApplication.Config
{
    /// <summary>
    /// This class contains the global appConfiguration.
    /// </summary>
    public class AppConfiguration
    {
        /// <summary>
        /// The location where to download the Repository.
        /// </summary>
        [JsonProperty(PropertyName = "localRepositoryFolder")]
        public string LocalRepositoryFolder { get; set; }

        /// <summary>
        /// Returns the JSON-RPC methods the main application uses.
        /// </summary>
        [JsonProperty(PropertyName = "supporteMethods")]
        public List<string> SupportedMehtods
        {
            get
            {
                return new List<string>()
                {
                    "MethodLookUp",
                    "LanguageLookUp",
                    "CodePathLookUp",
                    "SetPath"
                };
            }
        }

        /// <summary>
        /// Contains the mapping for the linker locations.
        /// </summary>
        [JsonProperty(PropertyName = "linkers")]
        public Dictionary<string, string> Linkers { get; set; }
    }
}
