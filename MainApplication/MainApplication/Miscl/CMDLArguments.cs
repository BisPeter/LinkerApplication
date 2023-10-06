namespace MainApplication.Miscl
{
    /// <summary>
    /// This class holds the extracted commandline arguments.
    /// </summary>
    public class CMDLArguments
    {

        /// <summary>
        /// The location where the template should be saved.
        /// </summary>
        public string DocOutputPath { get; set; }

        /// <summary>
        /// The path to the documentationTemplate.
        /// </summary>
        public string TemplatePath { get; set; }

        /// <summary>
        /// The path to the appConfiguration
        /// </summary>
        public string AppCfg { get; set; }

        /// <summary>
        /// The configuration for the template.
        /// </summary>
        public string TemplateCfg { get; set; }

        /// <summary>
        /// Whether the repository should be updated.
        /// </summary>
        public bool Update { get; set; }
    }
}
