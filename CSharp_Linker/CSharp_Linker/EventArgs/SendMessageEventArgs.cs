using System;
namespace CSharp_Linker.EventArgs
{
    /// <summary>
    /// Holds the arguments when a message is ready to be sent.
    /// </summary>
    internal class SendMessageEventArgs
    {
        /// <summary>
        /// The message to send.
        /// </summary>
        public string Message { get; private set; }

        /// <summary>
        /// Initializes an a class of <see cref="SendMessageEventArgs"/>.
        /// </summary>
        /// <param name="message">The message to send.</param>
        public SendMessageEventArgs(string message)
        {
            Message = message;
        }
    }
}
