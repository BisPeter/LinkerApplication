using CommunicationClasses.Messages.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MainApplication.Miscl
{
    /// <summary>
    /// Repsresents a <see cref="ConsoleLogger"/> class.
    /// </summary>
    public static class ConsoleLogger
    {
        /// <summary>
        /// Writes an errormessage into the console.
        /// </summary>
        /// <param name="message">The message to write in the console.</param>
        public static void WriteErrorMessage(ErrorObject message)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("Error: " + message.Code);
            Console.WriteLine(message.Message);
            Console.ForegroundColor = ConsoleColor.White;
        }

        /// <summary>
        /// Writes a message into the console.
        /// </summary>
        /// <param name="message">The message to write in the console.</param>
        public static void WriteMesage(string message)
        {
            Console.WriteLine(message);
        }

        /// <summary>
        /// Writes an exception message into the console.
        /// </summary>
        /// <param name="message">The message to write in the console.</param>
        public static void WriteException(Exception exception)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            //Console.WriteLine(exception.Message);
            Console.ForegroundColor = ConsoleColor.White;
        }
    }
}
