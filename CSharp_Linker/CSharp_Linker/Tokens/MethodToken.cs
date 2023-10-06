using CSharp_Linker.Interfaces;

namespace CSharp_Linker.Tokens
{
    /// <summary>
    /// Represents a <see cref="MethodToken"/>.
    /// </summary>
    internal class MethodToken : ITokenVisitable
    {
        /// <summary>
        /// The identifier of the class.
        /// </summary>
        private string identifier;

        /// <summary>
        /// Holds the arguments of the function.
        /// </summary>
        public List<string> Arguments { get; private set; } = new List<string>();

        /// <summary>
        /// The identifier of the CodeElement
        /// </summary>
        public string CodeElement => "Method";

        /// <summary>
        /// Gets or sets the identifier of the class.
        /// </summary>
        public string Identifier
        {
            get
            {
                return identifier;
            }
            set
            {
                identifier = value;
            }
        }

        /// <summary>
        /// Accepts an <see cref="ITokenVisitor"/> and returns the object itself.
        /// </summary>
        /// <param name="visitor">The IVisitor object to accept.</param>
        public void Accept(ITokenVisitor visitor)
        {
            visitor.Visit(this);
        }
    }
}
