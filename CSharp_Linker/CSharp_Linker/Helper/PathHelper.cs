using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;

namespace CSharp_Linker.Helper
{
    /// <summary>
    /// Represents a <see cref="PathHelper"/>.<br></br>
    /// Helps with filepath operations.
    /// </summary>
    public static class PathHelper
    {
        /// <summary>
        /// Finds a .csproj file in a folder.
        /// </summary>
        /// <param name="folderPath">The path where it is looked for a .csproj file.</param>
        /// <returns>Returns the path tothe found .cspro file whet it finds one. Otherwise <see cref="null"/>.</returns>
        public static string FindCsprojFile(string folderPath)
        {
            string[] csprojFiles = Directory.GetFiles(folderPath, "*.csproj", SearchOption.AllDirectories);

            if (csprojFiles.Length > 0)
            {
                return csprojFiles[0]; // Return the first .csproj file found
            }

            return null;
        }

        /// <summary>
        /// Gets a relative path in the repository folder, with line number for a codeelement.
        /// </summary>
        /// <param name="node">The <see cref=""/>A <see cref="CSharpSyntaxNode"/> to get the line number.</param>
        /// <param name="trees">A <see cref="SyntaxTree"/> to get the path to the file where the codeelement is found.</param>
        /// <returns></returns>
        public static string GetRelativePathWithLineNumber(CSharpSyntaxNode node, SyntaxTree trees)
        {
            var path = GetRelativePath(Configuration.RepoPath, trees.FilePath);

            var lineSpan = trees.GetLineSpan(node.Span);
            var lineNumber = lineSpan.StartLinePosition.Line + 1;

            return path + "#L" + lineNumber;
        }

        /// <summary>
        /// Gets a relativepath in the repository to a csharp file.
        /// </summary>
        /// <param name="basePath">The path to the repository.</param>
        /// <param name="fullPath">The path to the file.</param>
        /// <returns>Returns the string representation to a csharp file.</returns>
        private static string GetRelativePath(string basePath, string fullPath)
        {
            var baseUri = new Uri(basePath);
            var fullUri = new Uri(fullPath);

            string p1 = fullUri.ToString();
            string p2 = baseUri.ToString();

            return p1.Replace(p2, "");
            return baseUri.MakeRelativeUri(fullUri).ToString();
        }
    }
}
