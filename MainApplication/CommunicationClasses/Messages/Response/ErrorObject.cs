using Newtonsoft.Json;

namespace CommunicationClasses.Messages.Response
{
    /// <summary>
    /// Represent a JSON-RPC2 error.
    /// </summary>
    public class ErrorObject
    {
        /// <summary>
        /// The code of the error message.
        /// </summary>
        [JsonProperty(PropertyName = "code")]
        public int Code { get; set; }

        /// <summary>
        /// The error message that describes the error.
        /// </summary>
        [JsonProperty(PropertyName = "message")]
        public string Message { get; set; }

        /// <summary>
        /// Optional parameter to sent with an error.
        /// </summary>
        [JsonProperty(PropertyName = "data")]
        public object Data { get; set; }
    }
}