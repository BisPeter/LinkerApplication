using CSharp_Linker.Interfaces;

namespace CSharp_Linker.Tokens
{
    /// <summary>
    /// Represents a <see cref="ClassToken"/>.
    /// </summary>
    internal class ClassToken : ITokenVisitable
    {
        /// <summary>
        /// The identifier of the class.
        /// </summary>
        private string identifier;

        /// <summary>
        /// The identifier of the CodeElement.
        /// </summary>
        public string CodeElement => "Class";

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
