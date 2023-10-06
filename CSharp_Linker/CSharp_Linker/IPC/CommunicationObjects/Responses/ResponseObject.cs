using Exchange.Misc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharp_Linker.IPC.CommunicationObjects.Responses
{
    /// <summary>
    /// Represents a response object.
    /// </summary>
    /// <typeparam name="T">The Type of the result parameter.</typeparam>
    public class ResponseObject<T>
    {
        /// <summary>
        /// The name of the protocol.
        /// </summary>
        [JsonProperty(PropertyName = "jsonrpc")]
        public string JsonRpc { get; set; }

        /// <summary>
        /// The result of a given request.
        /// </summary>
        [JsonProperty(PropertyName = "result", NullValueHandling = NullValueHandling.Ignore)]
        public T Result { get; set; }

        /// <summary>
        /// The error object occured by working the request.
        /// </summary>
        [JsonProperty(PropertyName = "error", NullValueHandling = NullValueHandling.Ignore)]
        public Error Error { get; set; }

        /// <summary>
        /// The id of the response. (must be the id of the request).
        /// </summary>
        [JsonProperty(PropertyName = "id", NullValueHandling = NullValueHandling.Ignore)]
        public int? Id { get; set; }
    }
}
