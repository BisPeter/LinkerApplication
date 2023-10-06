using Antlr4.Runtime;
using CSharp_Linker.Interfaces;
using CSharp_Linker.IPC.CommunicationObjects.Responses;
using CSharp_Linker.RoslynSupporter;
using CSharp_Linker.Visitors;
using Exchange.Exceptions;
using Microsoft.CodeAnalysis;

namespace CSharp_Linker.Helper
{
    /// <summary>
    /// Represents a <see cref="CodePathFinder"/> class.
    /// </summary>
    internal class CodePathFinder
    {
        /// <summary>
        /// A helper for roslyn features.
        /// </summary>
        RoslynHelper _roslynHelper;

        /// <summary>
        /// A compilation object of the source code from the application that is linked.
        /// </summary>
        Compilation _compilation;

        /// <summary>
        /// Initializes the <see cref="CodePathFinder"/> object.
        /// </summary>
        public CodePathFinder()
        {
            _roslynHelper = new RoslynHelper();
        }

        /// <summary>
        /// Creates a compilation from a C# project.
        /// </summary>
        /// <param name="projectPath">Path to the .csproj file.</param>
        public void CreateCompilaton(string projectPath)
        {
            try
            {
                _compilation = _roslynHelper.CreateCache(projectPath);
            }
            catch (ProtocolException e)
            {
                throw e;
            }
        }

        /// <summary>
        /// This method searches for a code element.
        /// </summary>
        /// <param name="searchExpression">The searchexpression with you want to search a code element.</param>
        /// <param name="resultCount">The count of the returned codeelements.</param>
        /// <returns>Returns a <see cref="CodePathLookUpResult"/>. The found code elements.</returns>
        public CodePathLookUpResult FindCodeElement(string searchExpression, int resultCount)
        {
            List<ITokenVisitable> tokenVisitables = ParseSearchstring(searchExpression);

            var x = tokenVisitables;

            TokenTreeVisitor tVisitor = new TokenTreeVisitor(_compilation.SyntaxTrees.ToList());
            CodePathVisitor codePathVisitor = new CodePathVisitor(tVisitor.SyntaxTrees, resultCount);

            for (int i = 0; i < tokenVisitables.Count; i++)
            {
                if (i == tokenVisitables.Count - 1)
                {

                    tokenVisitables.ElementAt(i).Accept(codePathVisitor);
                }
                else
                {
                    tokenVisitables.ElementAt(i).Accept(tVisitor);
                }
            }

            return codePathVisitor.Result;
        }

        /// <summary>
        /// Parses a searchstring.
        /// </summary>
        /// <param name="searchExpression">The searchstring to parse.</param>
        /// <returns>Return a <see cref="List{ITokenVisitable}"/>. The tokens extracted from the searchstring.</returns>
        private static List<ITokenVisitable> ParseSearchstring(string searchExpression)
        {
            AntlrInputStream inputStream = new AntlrInputStream(searchExpression);
            CsharpgrmLexer lex = new CsharpgrmLexer(inputStream);
            CommonTokenStream commonTokenStream = new CommonTokenStream(lex);
            CsharpgrmParser parser = new CsharpgrmParser(commonTokenStream);
            CsharpgrmParser.NamespaceContext ctx = parser.@namespace();

            SearchExpressionVisitor sVisitor = new SearchExpressionVisitor();
            sVisitor.Visit(ctx);
            return sVisitor.TokenVisitables;
        }
    }
}
