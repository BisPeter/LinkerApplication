using CSharp_Linker.Interfaces;
using CSharp_Linker.Tokens;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace CSharp_Linker.Visitors
{
    /// <summary>
    /// This class helps to walk the application tree.
    /// </summary>
    internal class TokenTreeVisitor : ITokenVisitor
    {
        /// <summary>
        /// Contains the syntaxtrees.
        /// </summary>
        private List<SyntaxTree> _syntaxTrees;

        /// <summary>
        /// Gets the syntaxtrees
        /// </summary>
        public List<SyntaxTree> SyntaxTrees { get => _syntaxTrees; }

        /// <summary>
        /// Initializes a class of <see cref="TokenTreeVisitor"/>
        /// </summary>
        /// <param name="syntaxTrees">The list of the <see cref="SyntaxTree"/>.</param>
        public TokenTreeVisitor(List<SyntaxTree> syntaxTrees)
        {
            _syntaxTrees = syntaxTrees;
        }

        /// <summary>
        /// Visits a namespaceToken and finds a Namespace <see cref="SyntaxNode"/>.
        /// </summary>
        /// <param name="token">The from Searchstring extracted <see cref="NamespaceToken"/>.</param>
        void ITokenVisitor.Visit(NamespaceToken token)
        {
            _syntaxTrees = _syntaxTrees.Where(tree => FindNamespaceDeclaration(tree, token.Identifier) != null).ToList();
        }

        /// <summary>
        /// Visits a ClassToken and finds a Namespace <see cref="SyntaxNode"/>.
        /// </summary>
        /// <param name="token">The from Searchstring extracted <see cref="ClassToken"/>.</param>
        void ITokenVisitor.Visit(ClassToken token)
        {
            var temp = new List<SyntaxTree>();
            _syntaxTrees.ForEach(st => temp.AddRange(st.GetRoot().DescendantNodes().OfType<ClassDeclarationSyntax>()
                .Where(c => c.Identifier.ValueText == token.Identifier).Select(sn => sn.SyntaxTree)));
            _syntaxTrees = temp;
        }

        /// <summary>
        /// Finds a namespacedeclaration in a syntaxtree.
        /// </summary>
        /// <param name="syntaxTree">The <see cref="SyntaxTree"/> to search in.</param>
        /// <param name="namespaceName">The name of the namespace you want to find.</param>
        /// <returns>Returns the found <see cref="SyntaxNode"/>,</returns>
        private SyntaxNode FindNamespaceDeclaration(SyntaxTree syntaxTree, string namespaceName)
        {
            return syntaxTree.GetRoot()
                .DescendantNodes()
                .OfType<NamespaceDeclarationSyntax>()
                .FirstOrDefault(ns => ns.Name.ToString() == namespaceName);
        }

        public void Visit(MethodToken token)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Visits an InterfaceToken and finds a Namespace <see cref="SyntaxNode"/>.
        /// </summary>
        /// <param name="token">The from Searchstring extracted <see cref="InterfaceToken"/>.</param>
        public void Visit(InterfaceToken token)
        {
            var temp = new List<SyntaxTree>();
            _syntaxTrees.ForEach(st => temp.AddRange(st.GetRoot().DescendantNodes().OfType<InterfaceDeclarationSyntax>()
                .Where(c => c.Identifier.ValueText == token.Identifier).Select(sn => sn.SyntaxTree)));
            _syntaxTrees = temp;
        }

        public void Visit(StandardmemberToken token)
        {
            throw new NotImplementedException();
        }

        public void Visit(EnumToken enumToken)
        {
            throw new NotImplementedException();
        }
    }
}
