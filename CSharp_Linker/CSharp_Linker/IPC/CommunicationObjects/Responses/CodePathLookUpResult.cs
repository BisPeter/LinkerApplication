namespace CSharp_Linker.IPC.CommunicationObjects.Responses
{
    /// <summary>
    /// Represents a <see cref="CodePathLookUpResult"/> class.
    /// </summary>
    internal class CodePathLookUpResult
    {
        /// <summary>
        /// The found codeElements.
        /// </summary>
        public List<CodeElement> CodeElements { get; set; } = new List<CodeElement>();
    }
}
