using CSharp_Linker.Helper;
using CSharp_Linker.RoslynSupporter;
using Microsoft.CodeAnalysis;

namespace CSharp_Linker
{
    internal class Program
    {
        /// <summary>
        /// The main entry point of the application.
        /// </summary>
        /// <param name="args">The starting arguments of the application.</param>
        static void Main(string[] args)
        {
            LinkerHandler handler = new LinkerHandler();
            handler.Start();

        }
    }
}