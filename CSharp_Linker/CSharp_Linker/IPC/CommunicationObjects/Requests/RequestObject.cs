using Newtonsoft.Json;

namespace CSharp_Linker.IPC.CommunicationObjects.Requests
{
    /// <summary>
    /// Represents a JSON-RPC2 request object.
    /// </summary>
    /// <typeparam name="T">The type of the request.</typeparam>
    public class RequestObject<T>
    {
        /// <summary>
        /// The name of the protokol.
        /// </summary>
        [JsonProperty(PropertyName = "jsonrpc")]
        public string JsonRpc { get; set; }

        /// <summary>
        /// The method that is beeing called by the request.
        /// </summary>
        [JsonProperty(PropertyName = "method")]
        public string Method { get; set; }

        /// <summary>
        /// The parameters of the request.
        /// </summary>
        [JsonProperty(PropertyName = "params")]
        public T Params { get; set; }

        /// <summary>
        /// The id of the request.
        /// </summary>
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
    }
}
