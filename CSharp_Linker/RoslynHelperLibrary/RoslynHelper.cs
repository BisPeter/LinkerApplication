using Exchange.Exceptions;
using Exchange.Misc;
using Microsoft.Build.Locator;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.MSBuild;
using System;
using System.IO;

namespace CSharp_Linker.RoslynSupporter
{
    /// <summary>
    /// This class is a helper to use Roslyn Features.
    /// </summary>
    public class RoslynHelper
    {
        /// <summary>
        /// The folder where the cache is created.
        /// </summary>
        private static string _cacheDir = "";

        /// <summary>
        /// Gets a compilation of a C# project.
        /// </summary>
        /// <param name="projectPath">A string. The Path to the .csproj File.</param>
        /// <returns>Returns a <see cref="Compilation"/>.</returns>
        public Compilation CreateCache(string projectPath)
        {
            _cacheDir = Path.Combine(Path.GetTempPath(), "MyProjectCache");
            if (!Directory.Exists(_cacheDir))
            {
                Directory.CreateDirectory(_cacheDir);
            }

            // Get the compilation options and the compilation
            var compilationOptions = GetCompilationOptions();
            //Console.WriteLine("cash");

            Compilation result = null!;

            try
            {
                result = GetCompilation(projectPath);
            }
            catch (ProtocolException e)
            {
                throw e;
            }

            return result;
        }

        /// <summary>
        /// This method gets the compilation options.
        /// </summary>
        /// <returns>Returns <see cref="CompilationOptions"/> for the compilation.</returns>
        private CSharpCompilationOptions GetCompilationOptions()
        {
            return new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary);
        }

        /// <summary>
        /// Gets a compilation of a C# project.
        /// </summary>
        /// <param name="projectPath">A string. The Path to the .csproj File.</param>
        /// <returns>Returns a <see cref="Compilation"/>.</returns>
        /// <exception cref="ProtocolException"></exception>
        private Compilation GetCompilation(string projectPath)
        {
            var _ = typeof(Microsoft.CodeAnalysis.CSharp.CSharpCommandLineArguments);
            MSBuildLocator.RegisterDefaults();
            using (var workspace = MSBuildWorkspace.Create())
            {
                var project = workspace.OpenProjectAsync(projectPath).Result;
                var res = project.GetCompilationAsync().Result;

                if (res == null)
                {
                    throw new ProtocolException(Errors.NoDataFound);
                }

                return res;
            }
        }
    }
}
