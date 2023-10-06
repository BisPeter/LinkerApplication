namespace CommunicationClasses.Messages.Response
{
    public  class MethodlookUp
    {
        /// <summary>
        /// The name of the requested method.
        /// </summary>
        public string Method { get; set; }

        /// <summary>
        /// Determines wether the method is supported.
        /// </summary>
        public bool Supported { get; set; }
    }
}
