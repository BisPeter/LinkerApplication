using CSharp_Linker.EventArgs;
using System.IO.Pipes;

namespace CSharp_Linker.IPC
{
    /// <summary>
    /// Represents a <see cref="NamedPipeServer"/>.
    /// </summary>
    internal class NamedPipeServer
    {
        /// <summary>
        /// The name of the pipe used.
        /// </summary>
        private readonly string _pipeName;

        /// <summary>
        /// An <see cref="StreamReader"/> object, to read from the IPC stream.
        /// </summary>
        private StreamReader _reader;

        /// <summary>
        /// An <see cref="StreamWriter"/> object, to write to the IPC stream.
        /// </summary>
        private StreamWriter _writer;

        /// <summary>
        /// A <see cref="Thread"/> object.
        /// </summary>
        private Thread _thread;

        /// <summary>
        /// Fired upon receiving data from the IPC pipe.
        /// </summary>
        public EventHandler<MessageReceivedEventArgs> _fireOnMessageReceived;

        /// <summary>
        /// Determines whether the thread is running.
        /// </summary>
        public bool IsRunning { get; private set; } = false;

        /// <summary>
        /// Creates a <see cref="NamedPipeServer"/> object.
        /// </summary>
        /// <param name="pipeName">A string. The name of the pipe that is opened.</param>
        public NamedPipeServer(string pipeName)
        {
            this._pipeName = pipeName;
        }

        /// <summary>
        /// Starts the server.
        /// </summary>
        /// <exception cref="Exception">Is thrown when the serer is already running.</exception>
        public void Start()
        {
            if (this.IsRunning)
            {
                throw new Exception("The thread is already running");
            }

            this.OpenConnection();
            this.IsRunning = true;
            this._thread = new Thread(Worker);
            _thread.Start();
        }

        /// <summary>
        /// Stops the server.
        /// </summary>
        /// <exception cref="Exception">Is thrown when the server is not running.</exception>
        public void Stop()
        {
            if (!this.IsRunning)
                throw new Exception("the thread is not yet running");

            if (_thread != Thread.CurrentThread)
            {
                _thread.Join();
                this.IsRunning = false;
            }
        }

        /// <summary>
        /// Opens a <see cref="NamedPipeServerStream"/>.
        /// </summary>
        private void OpenConnection()
        {
            //NamedPipeServerStream pipeServer = new NamedPipeServerStream(_pipeName, PipeDirection.InOut);

            //Console.WriteLine("Waiting for client connection...");
            //pipeServer.WaitForConnection();
            //Console.WriteLine("Client connected.");

            //_reader = new StreamReader(pipeServer);
            //_writer = new StreamWriter(pipeServer);

            _reader = new StreamReader(Console.OpenStandardInput());
            _writer = new StreamWriter(Console.OpenStandardOutput());
            return;
        }

        /// <summary>
        /// Writes into the <see cref="NamedPipeServerStream"/>.
        /// </summary>
        /// <param name="input">The data to write into the stream.</param>
        public void WriteToStream(string input)
        {
            try
            {
                _writer.WriteLine(input);
                _writer.Flush();
            }
            catch (Exception ex)
            {
                //Console.WriteLine(ex.ToString());
            }
        }

        /// <summary>
        /// Continouosly listens to the <see cref="NamedPipeServerStream"/>.
        /// </summary>
        public void Worker()
        {
            while (this.IsRunning)
            {
                Thread.Sleep(100);
                string message = String.Empty;
                try
                {

                    message = _reader.ReadLine() ?? String.Empty;
                }
                catch (Exception ex)
                {
                    //Console.WriteLine(ex.ToString());
                }

                _fireOnMessageReceived(this, new MessageReceivedEventArgs(message));
            }
        }
    }
}
