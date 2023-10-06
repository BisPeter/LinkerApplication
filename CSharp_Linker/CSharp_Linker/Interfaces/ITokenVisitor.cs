using CSharp_Linker.Tokens;

namespace CSharp_Linker.Interfaces
{
    /// <summary>
    /// Represents an <see cref="ITokenVisitable"/> interface.
    /// </summary>
    internal interface ITokenVisitor
    {
        /// <summary>
        /// Visits a <see cref="NamespaceToken"/> object.
        /// </summary>
        /// <param name="token">A <see cref="NamespaceToken"/>.</param>
        public void Visit(NamespaceToken token);

        /// <summary>
        /// Visits a <see cref="ClassToken"/> object.
        /// </summary>
        /// <param name="token">A <see cref="ClassToken"/>.</param>
        public void Visit(ClassToken token);

        /// <summary>
        /// Visits a <see cref="MethodToken"/> object.
        /// </summary>
        /// <param name="token">A <see cref="MethodToken"/>.</param>
        public void Visit(MethodToken token);

        /// <summary>
        /// Visits a <see cref="InterfaceToken"/> object.
        /// </summary>
        /// <param name="token">A <see cref="InterfaceToken"/>.</param>
        public void Visit(InterfaceToken token);
        void Visit(EnumToken enumToken);

        /// <summary>
        /// Visits a <see cref="StandardmemberToken"/> object.
        /// </summary>
        /// <param name="token">A <see cref="StandardmemberToken"/>.</param>
        public void Visit(StandardmemberToken token);
    }
}
