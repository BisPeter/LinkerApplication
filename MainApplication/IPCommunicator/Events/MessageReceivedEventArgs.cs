namespace IPCommunicator.Events
{
    /// <summary>
    /// Represents the event arguments that are sent when a message arrives.
    /// </summary>
    public class MessageReceivedEventArgs
    {
        /// <summary>
        /// The received message.
        /// </summary>
        public string Message { get; private set; }

        /// <summary>
        /// Creates an instance of the <see cref="MessageReceivedEventArgs"/>.
        /// </summary>
        /// <param name="message">The received message.</param>
        public MessageReceivedEventArgs(string message)
        {
            Message = message;
        }
    }
}
