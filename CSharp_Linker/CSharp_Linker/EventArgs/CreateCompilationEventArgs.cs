namespace CSharp_Linker.EventArgs
{
    /// <summary>
    /// Fired upon completion of a compilation of the source code.
    /// </summary>
    internal class CreateCompilationEventArgs
    {
        /// <summary>
        /// The Path to the compilation.
        /// </summary>
        public string CsProjPath { get; private set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="message"></param>
        public CreateCompilationEventArgs(string message)
        {
            CsProjPath = message;
        }
    }
}
