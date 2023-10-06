using System;

namespace IPCommunicator.Events
{
    /// <summary>
    /// Represents an unrecoverable error event arguments
    /// </summary>
    public class UnRecoverableErrorEvetArgs : EventArgs
    {
        /// <summary>
        /// The message to send.
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// The exception that is thrown when the error occured.
        /// </summary>
        public Exception Exception { get; set; }
    }
}
