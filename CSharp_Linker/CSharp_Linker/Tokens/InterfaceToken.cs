using CSharp_Linker.Interfaces;

namespace CSharp_Linker.Tokens
{
    /// <summary>
    /// Represents a <see cref="InterfaceToken"/>.
    /// </summary>
    internal class InterfaceToken : ITokenVisitable
    {
        /// <summary>
        /// The identifier of the class.
        /// </summary>
        private string identifier;


        public List<string> Arguments { get; private set; } = new List<string>();

        /// <summary>
        /// The identifier of the CodeElement
        /// </summary>
        public string CodeElement => "Interface";

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
