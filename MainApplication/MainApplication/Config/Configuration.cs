using MainApplication.Miscl;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace MainApplication.Config
{
    /// <summary>
    /// Represents the configuration for the application.
    /// </summary>
    public class Configuration
    {     
        /// <summary>
        /// The path to the documentation template.
        /// </summary>
        [JsonProperty(PropertyName = "temlplatePath")]
        public string TemlplatePath { get; set; }

        /// <summary>
        /// Represents a repository.
        /// </summary>
        [JsonProperty(PropertyName = "repository")]
        public Repository Repository { get; set; }

        ///// <summary>
        ///// Holds the fileextension of the documentationtemplate.
        ///// </summary>
        //public FileExtension TemplateExtension { get; set; }

        /// <summary>
        /// Contains the global appconfiguration.
        /// </summary>
        public AppConfiguration AppConfiguration { get; set; }

        ///// <summary>
        ///// The path to the outputtemplate
        ///// </summary>
        //public string OutputTemplateName { get; internal set; }

        /// <summary>
        /// The path where the document should be put when it linked.
        /// </summary>
        public string DocOutputPath { get; internal set; }

        /// <summary>
        /// Determines whether the local repo should be the newest.
        /// </summary>
        public bool Update { get; internal set; }

        /// <summary>
        /// Where the configuration for the repositoryconfig is located.
        /// </summary>
        public string RepositoryConfigPath { get; internal set; }
    }
}
