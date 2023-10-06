using CSharp_Linker.Helper;
using CSharp_Linker.Interfaces;
using CSharp_Linker.IPC.CommunicationObjects.Responses;
using CSharp_Linker.Tokens;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace CSharp_Linker.Visitors
{
    /// <summary>
    /// This class finds the line of a searched CodeElement.
    /// </summary>
    internal class CodePathVisitor : ITokenVisitor
    {
        /// <summary>
        /// Contains the <see cref="SyntaxTree"/>s.
        /// </summary>
        private List<SyntaxTree> _syntaxTrees;

        /// <summary>
        /// Determines how many of the found elements should be returned.
        /// </summary>
        private readonly int _resultCount;

        /// <summary>
        /// Initializes an instance of the <see cref="CodePathVisitor"/>.
        /// </summary>
        /// <param name="syntaxTrees">The syntaxtrees to search trough.</param>
        /// <param name="resultCount">How many results can be returned.</param>
        public CodePathVisitor(List<SyntaxTree> syntaxTrees, int resultCount)
        {
            _syntaxTrees = syntaxTrees;
            _resultCount = resultCount;
        }

        /// <summary>
        /// Gets the syntaxtrees.
        /// </summary>
        public List<SyntaxTree> SyntaxTrees { get => _syntaxTrees; }

        /// <summary>
        /// Determines how many results should be returned.
        /// </summary>
        public CodePathLookUpResult Result { get; private set; } = new CodePathLookUpResult();

        /// <summary>
        /// Visits a <see cref="NamespaceToken"/> and finds its location in the code.
        /// </summary>
        /// <param name="token">The Token to visit.</param>
        public void Visit(NamespaceToken token)
        {
            var namespaceNodes = _syntaxTrees.Select(st => st.GetRoot().DescendantNodes()
                .OfType<NamespaceDeclarationSyntax>()
                .FirstOrDefault(p => p.Name.ToString() == token.Identifier)).Where(ns => ns != null);

            var n = namespaceNodes.Select(x => new CodeElement
            {

                Path = PathHelper.GetRelativePathWithLineNumber(x, x.SyntaxTree),
                Name = /*namespaceNodes.Count() > 0 ? *//*x.ToFullString()*/x.GetType().FullName /*: null*/
            });

            if (_resultCount == -1)
                Result.CodeElements.AddRange(n);
            else
                Result.CodeElements.AddRange(n.Take(_resultCount));
        }

        /// <summary>
        /// Visits a <see cref="ClassToken"/> and finds its location in the code.
        /// </summary>
        /// <param name="token">The Token to visit.</param>
        public void Visit(ClassToken token)
        {

            var classNodes = _syntaxTrees.SelectMany(st => st.GetRoot().DescendantNodes()
                .OfType<ClassDeclarationSyntax>()
                .Where(p => p.Identifier.ValueText == token.Identifier));

            var classNodes2 = classNodes.Select(x => new CodeElement
            {
                Path = PathHelper.GetRelativePathWithLineNumber(x, x.SyntaxTree),
                Name = /*namespaceNodes.Count() > 0 ? *//*x.ToFullString()*/x.GetFullName()  /*: null*/
            });

            if (!classNodes2.Any())
            {

            }

            if (_resultCount == -1)
                Result.CodeElements.AddRange(classNodes2);
            else
                Result.CodeElements.AddRange(classNodes2.Take(_resultCount));

        }

        /// <summary>
        /// Visits a <see cref="MethodToken"/> and finds its location in the code.
        /// </summary>
        /// <param name="token">The Token to visit.</param>
        public void Visit(MethodToken token)
        {
            var methodNode = _syntaxTrees.Select(st => st.GetRoot().DescendantNodes().OfType<MethodDeclarationSyntax>()
                .FirstOrDefault(method =>
                    method.Identifier.ValueText == token.Identifier && AreParametersTheSame(method.ParameterList.Parameters.Select(p => p.Type.ToString()), token.Arguments))
                ).FirstOrDefault();


            var methodNode2 = _syntaxTrees.Select(st => st.GetRoot().DescendantNodes().OfType<MethodDeclarationSyntax>()
                .FirstOrDefault(method =>
                    method.Identifier.ValueText == token.Identifier
                )).Where(y => y != null);

            methodNode = methodNode2.Where(x => AreParametersTheSame(x.ParameterList.Parameters.Select(p => p.Type.ToString()).ToList(), token.Arguments)).ToList().FirstOrDefault();

            if (methodNode != null)
            {
                Result.CodeElements.Add(new CodeElement
                {
                    Path = PathHelper.GetRelativePathWithLineNumber(methodNode, methodNode.SyntaxTree),
                    Name = /*namespaceNodes.Count() > 0 ? *//*x.ToFullString()*/ ((TypeDeclarationSyntax)methodNode.Parent).GetFullName() + "." + token.Identifier + "(" + string.Join(',', methodNode.ParameterList.Parameters) + ")"
                });
            }
        }

        private bool AreParametersTheSame(IEnumerable<string> enumerable, List<string> arguments)
        {
            bool equal = enumerable.SequenceEqual(arguments);

            return equal;
        }

        /// <summary>
        /// Visits a <see cref="InterfaceToken"/> and finds its location in the code.
        /// </summary>
        /// <param name="token">The Token to visit.</param>
        public void Visit(InterfaceToken token)
        {
            var interfaceNodes = _syntaxTrees.SelectMany(st => st.GetRoot().DescendantNodes()
                .OfType<InterfaceDeclarationSyntax>()
                .Where(p => p.Identifier.ValueText == token.Identifier));

            var interfaceNodes2 = interfaceNodes.Select(x => new CodeElement
            {
                Path = PathHelper.GetRelativePathWithLineNumber(x, x.SyntaxTree),
                Name = /*namespaceNodes.Count() > 0 ? *//*x.ToFullString()*/x.GetFullName()  /*: null*/
            });

            if (_resultCount == -1)
                Result.CodeElements.AddRange(interfaceNodes2);
            else
                Result.CodeElements.AddRange(interfaceNodes2.Take(_resultCount));
        }

        /// <summary>
        /// Visits a <see cref="StandardmemberToken"/> and finds its location in the code.
        /// </summary>
        /// <param name="token">The Token to visit.</param>
        public void Visit(StandardmemberToken token)
        {
            VariableDeclaratorSyntax? fieldToken = null;
            PropertyDeclarationSyntax? propertyToken = null;
            VariableDeclaratorSyntax? eventToken = null;

            //propertyToken = _syntaxTrees.Select(st => st.GetRoot().DescendantNodes()
            //    .OfType<PropertyDeclarationSyntax>()
            //    .FirstOrDefault(p => p.Identifier.ValueText == token.Identifier)).FirstOrDefault();

            propertyToken = _syntaxTrees.SelectMany(st => st.GetRoot().DescendantNodes()
                .OfType<PropertyDeclarationSyntax>()
                ).FirstOrDefault(p => p.Identifier.ValueText == token.Identifier);

            if (propertyToken == null)
            {
                fieldToken = _syntaxTrees.SelectMany(st => st.GetRoot().DescendantNodes()
                                                        .OfType<FieldDeclarationSyntax>()
                                                        .SelectMany(p => p.Declaration.Variables)
                                                        .Where(p => p.Identifier.ValueText == token.Identifier))
                                                        .Where(x => x.Identifier.ValueText == token.Identifier)
                                                        .FirstOrDefault();

                if (fieldToken != null)
                {
                    Result.CodeElements.Add(new CodeElement
                    {
                        Path = PathHelper.GetRelativePathWithLineNumber(fieldToken, fieldToken.SyntaxTree),
                        Name = /*namespaceNodes.Count() > 0 ? *//*x.ToFullString()*/ ((TypeDeclarationSyntax)fieldToken!.Parent!.Parent!.Parent!).GetFullName() + "." + token.Identifier
                    });

                    return;
                }
                else
                {


                    eventToken = _syntaxTrees.SelectMany(st => st.GetRoot().DescendantNodes()
                                                        .OfType<EventFieldDeclarationSyntax>()
                                                        .SelectMany(p => p.Declaration.Variables)
                                                        .Where(p => p.Identifier.ValueText == token.Identifier))
                                                        .Where(x => x.Identifier.ValueText == token.Identifier)
                                                        .FirstOrDefault();

                    Result.CodeElements.Add(new CodeElement
                    {
                        Path = PathHelper.GetRelativePathWithLineNumber(eventToken!, eventToken!.SyntaxTree),
                        Name = /*namespaceNodes.Count() > 0 ? *//*x.ToFullString()*/ ((TypeDeclarationSyntax)eventToken!.Parent!.Parent!.Parent!).GetFullName() + "." + token.Identifier
                    });

                    return;
                }





            }





            Result.CodeElements.Add(new CodeElement
            {
                Path = PathHelper.GetRelativePathWithLineNumber(propertyToken, propertyToken.SyntaxTree),
                Name = /*namespaceNodes.Count() > 0 ? *//*x.ToFullString()*/ ((TypeDeclarationSyntax)propertyToken.Parent).GetFullName() + "." + token.Identifier
            });

        }

        public void Visit(EnumToken enumToken)
        {
            var enumNode = _syntaxTrees.SelectMany(st => st.GetRoot().DescendantNodes()
                .OfType<EnumDeclarationSyntax>()
                .Where(p => p.Identifier.ValueText == enumToken.Identifier)).FirstOrDefault();

            var classNodes2 = new CodeElement
            {
                Path = PathHelper.GetRelativePathWithLineNumber(enumNode, enumNode.SyntaxTree),
                Name = /*namespaceNodes.Count() > 0 ? *//*x.ToFullString()*/enumNode.TryGetInferredMemberName() /*: null*/
            };


            Result.CodeElements.Add(classNodes2);

        }
    }
}
