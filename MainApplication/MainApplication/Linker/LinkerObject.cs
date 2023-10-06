using IPCommunicator.Communication;
using System.Diagnostics;

namespace MainApplication.Linker
{
    /// <summary>
    /// This class represents a linker process.
    /// </summary>
    public class LinkerObject
    {
        /// <summary>
        /// The programming language the linker object supports.
        /// </summary>
        public string Language { get; set; }

        /// <summary>
        /// The <see cref="IPCClient"/> that holds the connection to the linker process.
        /// </summary>
        public IPCClient PipeClient { get; set; }

        /// <summary>
        /// This <see cref="Process"/> represents the linker process.
        /// </summary>
        public Process Process { get; set; }
    }
}
