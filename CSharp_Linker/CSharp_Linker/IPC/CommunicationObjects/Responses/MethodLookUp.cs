namespace CSharp_Linker.IPC.CommunicationObjects.Responses
{
    /// <summary>
    /// Represents the parameters of a JSON RPC 2.0 result object.
    /// </summary>
    internal class MethodLookUp
    {
        /// <summary>
        /// The name of the requested method.
        /// </summary>
        public string method { get; set; }

        /// <summary>
        /// Determines wether the method is supported.
        /// </summary>
        public bool supported { get; set; }
    }
}
