namespace CSharp_Linker.Interfaces
{
    /// <summary>
    /// Represents an <see cref="ITokenVisitable"/> interface.
    /// </summary>
    internal interface ITokenVisitable
    {
        /// <summary>
        /// The name of the coedelement.
        /// </summary>
        public string CodeElement { get; }

        /// <summary>
        /// The identifier of the CodeElement.
        /// </summary>
        public string Identifier { get; set; }

        /// <summary>
        /// This method enables the object to be visitable by the <see cref="ITokenVisitor"/>
        /// </summary>
        /// <param name="visitor">The <see cref="ITokenVisitor"/> that visits the object.</param>
        public void Accept(ITokenVisitor visitor);
    }
}
