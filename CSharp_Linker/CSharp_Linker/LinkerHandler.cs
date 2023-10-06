using CSharp_Linker.EventArgs;
using CSharp_Linker.IPC;

namespace CSharp_Linker
{
    /// <summary>
    /// This class starts the application.
    /// </summary>
    internal class LinkerHandler
    {
        /// <summary>
        /// The <see cref="NamedPipeServer"/> to create IPC communication.
        /// </summary>
        private NamedPipeServer _namedPipeServer;

        /// <summary>
        /// Handle IPC communication.
        /// </summary>
        private IPCMessageHandler _iPCMessageHandler;

        /// <summary>
        /// This method starts the application.
        /// </summary>
        public void Start()
        {
            _iPCMessageHandler = new IPCMessageHandler();
            _iPCMessageHandler._fireOnResponseDone += HandleResponse;
            _namedPipeServer = new NamedPipeServer("CSharp");
            _namedPipeServer._fireOnMessageReceived += _iPCMessageHandler.WorkMessage;
            _namedPipeServer.Start();
        }

        /// <summary>
        /// This method passes responses to the <see cref="NamedPipeServer"/>.
        /// </summary>
        /// <param name="sender">The sender of the object.</param>
        /// <param name="e"><see cref="SendMessageEventArgs"/> that contains the message to send troug IPC.</param>
        private void HandleResponse(object? sender, SendMessageEventArgs e)
        {
            _namedPipeServer.WriteToStream(e.Message);
        }
    }
}
