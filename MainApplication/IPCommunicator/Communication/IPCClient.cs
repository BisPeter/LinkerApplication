using IPCommunicator.Events;
using System;
using System.IO;
using System.IO.Pipes;
using System.Threading;

namespace IPCommunicator.Communication
{
    /// <summary>
    /// Represents a Named Pipe Client.
    /// </summary>
    public class IPCClient
    {
        /// <summary>
        /// Holds a <see cref="IPCClient"/>.
        /// </summary>
        private NamedPipeClientStream _pipeClient;

        /// <summary>
        /// Holds a <see cref="StreamReader"/>.
        /// </summary>
        private StreamWriter _writer;

        /// <summary>
        /// Holds a <see cref="StreamReader"/>.
        /// </summary>
        private StreamReader _reader;

        /// <summary>
        /// Holds a <see cref="Thread"/> object.
        /// </summary>
        private Thread _thread;

        /// <summary>
        /// Fires when a message is received by the streamreader.
        /// </summary>
        public EventHandler<MessageReceivedEventArgs> _fireOnMessageReceived;

        /// <summary>
        /// Holds the name of the connection.
        /// </summary>
        private string _connectionName;

        /// <summary>
        /// Creates an instance of the <see cref="IPCClient"/>.
        /// </summary>
        /// <param name="connectionName">The name of the connection.</param>
        public IPCClient(string connectionName)
        {
            _connectionName = connectionName;
        }

        /// <summary>
        /// Determines wether the thread is running.
        /// </summary>
        public bool IsRunning { get; set; }

        /// <summary>
        /// Connects to a named pipe server.
        /// </summary>
        public void OpenConnection(System.Diagnostics.Process process)
        {
            _pipeClient = new NamedPipeClientStream(".", _connectionName, PipeDirection.InOut);

            // Wait for the connection to be established
            //_pipeClient.Connect();
            Console.WriteLine("connected to the server");

            //_writer = new StreamWriter(_pipeClient);
            //_reader = new StreamReader(_pipeClient);

            _writer = process.StandardInput;
            _reader = process.StandardOutput;
        }

        /// <summary>
        /// Closes the connection to the pipeclient.
        /// </summary>
        public void CloseConnection()
        {
            _pipeClient?.Close();
        }

        /// <summary>
        /// This method writes into the stream.
        /// </summary>
        /// <param name="input">The data to write into the steam.</param>
        public void WriteToStream(string input)
        {
            try
            {
                _writer.WriteLine(input);
                _writer.Flush();

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        /// <summary>
        /// Reads from the stream.
        /// </summary>
        /// <returns>Returns the data read from the stream.</returns>
        public string ReadFromstreamStream()
        {
            try
            {
                return _reader.ReadLine();

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return "";
            }
        }

        /// <summary>
        /// Starts the connection to the server.
        /// </summary>
        /// <exception cref="Exception">Exception is thwon if the thread is already running.</exception>
        public void Start()
        {
            if (this.IsRunning)
            {
                throw new Exception("The thread is already running");
            }

            //this.OpenConnection();
            //this._thread = new Thread(Worker);
            //this.IsRunning = true;
            //_thread.Start();
        }

        /// <summary>
        /// Stops the running thread.
        /// </summary>
        /// <exception cref="Exception">Exception is thwon if the thread is not running.</exception>
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


        //public void Worker()
        //{
        //    while (this.IsRunning)
        //    {
        //        Thread.Sleep(100);
        //        string message = _reader.ReadLine();
        //        _fireOnMessageReceived(this, new MessageReceivedEventArgs(message));
        //    }
        //}
    }
}
