using Newtonsoft.Json;
using System.Collections.Generic;

namespace CommunicationClasses.Messages.Response
{
    /// <summary>
    /// Reporesents a <see cref="CodePathLookUpResult"/> object.
    /// </summary>
    public class CodePathLookUpResult
    {
        /// <summary>
        /// The name of the application where the codeelement was searched.
        /// </summary>
        public string AppName { get; set; }

        /// <summary>
        /// The path of the codeelements that are found in the source code.
        /// </summary>
        [JsonProperty(PropertyName = "codeElements")]
        public List<CodeElement> CodeElements { get; set; }

        public string ListTemplate { get; set; }
    }
}
