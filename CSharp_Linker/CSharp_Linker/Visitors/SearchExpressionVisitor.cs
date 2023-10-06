using Antlr4.Runtime.Misc;
using CSharp_Linker.Interfaces;
using CSharp_Linker.Tokens;

namespace CSharp_Linker.Visitors
{
    /// <summary>
    /// Represents a <see cref="SearchExpressionVisitor"/>. This class handles the parsing of the searchstring.
    /// </summary>
    internal class SearchExpressionVisitor : CsharpgrmBaseVisitor<ITokenVisitable>
    {
        /// <summary>
        /// Temporarerly holds the parts of the searchstring.
        /// </summary>
        private List<ITokenVisitable> tokenVisitables = new List<ITokenVisitable>();

        /// <summary>
        /// Gets the parsed searchstring parts.
        /// </summary>
        public List<ITokenVisitable> TokenVisitables { get => tokenVisitables; }

        /// <summary>
        /// Visits a <see cref="CsharpgrmParser.ClassContext"/>.
        /// </summary>
        /// <param name="context">The parse tree.</param>
        /// <returns>The visitor result.</returns>
        public override ITokenVisitable VisitClass([Antlr4.Runtime.Misc.NotNull] CsharpgrmParser.ClassContext context)
        {
            ClassToken classToken = new ClassToken { Identifier = context.ID().GetText() };
            tokenVisitables.Add(classToken);
            return base.VisitClass(context);
        }

        /// <summary>
        /// Visits a <see cref="CsharpgrmParser.InterfaceContext"/>.
        /// </summary>
        /// <param name="context">The parse tree.</param>
        /// <returns>The visitor result.</returns>
        public override ITokenVisitable VisitInterface([Antlr4.Runtime.Misc.NotNull] CsharpgrmParser.InterfaceContext context)
        {
            InterfaceToken interfaceToken = new InterfaceToken { Identifier = context.ID().GetText() };
            tokenVisitables.Add(interfaceToken);
            return base.VisitInterface(context);
        }

        /// <summary>
        /// Visits a <see cref="CsharpgrmParser.MethodContext"/>.
        /// </summary>
        /// <param name="context">The parse tree.</param>
        /// <returns>The visitor result.</returns>
        public override ITokenVisitable VisitMethod([Antlr4.Runtime.Misc.NotNull] CsharpgrmParser.MethodContext context)
        {
            MethodToken methodToken = new MethodToken { Identifier = context.ID().GetText() };

            if (context.arguments() != null)
            {
                foreach (var item in context.arguments().argument())
                {
                    methodToken.Arguments.Add(item.type().GetText());
                }
            }

            tokenVisitables.Add(methodToken);
            return base.VisitMethod(context);
        }

        /// <summary>
        /// Visits a <see cref="CsharpgrmParser.NamespaceContext"/>.
        /// </summary>
        /// <param name="context">The parse tree.</param>
        /// <returns>The visitor result.</returns>
        public override ITokenVisitable VisitNamespace([Antlr4.Runtime.Misc.NotNull] CsharpgrmParser.NamespaceContext context)
        {
            var curr = tokenVisitables.FirstOrDefault(tv => tv.CodeElement == "Namespace");
            if (curr != null)
            {
                curr.Identifier = curr.Identifier + '.' + context.ID().GetText(); // if we have Jot.CustomInitializers, we need the Namespace "Jot.CustomInitializers" and not the namespaces "Jot" and "CustomInitializers", therefore we need to combine them
            }
            else
            {
                NamespaceToken namespaceToken = new NamespaceToken { Identifier = context.ID().GetText() };
                tokenVisitables.Add(namespaceToken);
            }

            return base.VisitNamespace(context);
        }

        /// <summary>
        /// Visits a <see cref="CsharpgrmParser.PropertyContext"/>.
        /// </summary>
        /// <param name="context">The parse tree.</param>
        /// <returns>The visitor result.</returns>
        public override ITokenVisitable VisitStandardmember([NotNull] CsharpgrmParser.StandardmemberContext context)
        {
            StandardmemberToken propertyToken = new StandardmemberToken { Identifier = context.ID().GetText() };

            tokenVisitables.Add(propertyToken);
            return base.VisitStandardmember(context);
        }

        public override ITokenVisitable VisitEnum([NotNull] CsharpgrmParser.EnumContext context)
        {
            EnumToken enumToken = new EnumToken { Identifier = context.ID().GetText() };
            tokenVisitables.Add(enumToken);
            return base.VisitEnum(context);
        }
    }
}
