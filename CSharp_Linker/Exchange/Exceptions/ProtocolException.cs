using Exchange.Misc;
using System;

namespace Exchange.Exceptions
{
    /// <summary>
    /// Represents an exception that occur upon protocol calls.
    /// </summary>
    public class ProtocolException : Exception
    {
        /// <summary>
        /// Creates an instance of the <see cref="ProtocolException"/> class.
        /// </summary>
        /// <param name="error">The error occured.</param>
        public ProtocolException(Error error)
        {
            Error = error;
        }

        /// <summary>
        /// The error occured.
        /// </summary>
        public Error Error { get; }
    }
}
