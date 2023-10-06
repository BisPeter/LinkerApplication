using Newtonsoft.Json;

namespace Exchange.Misc
{
    /// <summary>
    /// Represents a JSON-RPC2.0 error object.
    /// </summary>
    public class Error
    {
        /// <summary>
        /// The error code of the error that occured.
        /// </summary>
        [JsonProperty(PropertyName = "code")]
        public int Code { get; set; }

        /// <summary>
        /// The message that describes the error.
        /// </summary>
        [JsonProperty(PropertyName = "message")]
        public string Message { get; set; }
    }
}
