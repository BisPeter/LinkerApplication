using MainApplication.Miscl;
using System;
using System.IO;

namespace MainApplication
{
    internal class Program
    {
        /// <summary>
        /// The main entrypont of the Application.
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {

            CMDLArguments  cMDLArguments = CommandlineArgsHandler.GetCommandLineArgs(args);

            Managger m = new Managger(cMDLArguments);

            Console.WriteLine("Hit a key to exit application");
            Console.ReadKey();           
        }
    }
}
