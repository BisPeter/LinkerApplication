using IPCommunicator.Events;
using MainApplication.Config;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Linq;

namespace MainApplication.Miscl
{
    /// <summary>
    /// This class is a helper class to hande file access.
    /// </summary>
    public static class FileHelper
    {
        /// <summary>
        /// Fires upon an anrecoverable error.
        /// </summary>
        public static EventHandler<UnRecoverableErrorEvetArgs> _FireOnUnrecoverableErrorOccured;

        /// <summary>
        /// This method loads a documantationstemplate.
        /// </summary>
        /// <param name="temlplatePath">The path to he template that should be loaded.</param>
        /// <returns>Return the string representation of the documentationstemplate.</returns>
        public static string LoadTemplate(string temlplatePath)
        {
            return File.ReadAllText(temlplatePath);
        }

        /// <summary>
        /// This method extracts the extension of the given template.
        /// </summary>
        /// <param name="temlplatePath">The path to the documantationstemplate.</param>
        /// <returns>Return an <see cref="FileExtension"/>. The extensin of the documentationstemplate.</returns>
        public static FileExtension ReadFileExtension(string temlplatePath)
        {
            if (temlplatePath.EndsWith("html"))
                return FileExtension.html;
            else if (temlplatePath.EndsWith("md"))
                return FileExtension.md;
            else
                _FireOnUnrecoverableErrorOccured(typeof(FileHelper), new UnRecoverableErrorEvetArgs
                {
                    Exception = new NotSupportedException(),
                    Message = "The given Template ending is not supported."
                });

            return FileExtension.none;
        }

        /// <summary>
        /// This method saves the linked template.
        /// </summary>
        /// <param name="linkedTemplate">A <see cref="string"/>. The linked template.</param>
        /// <param name="templatePath"><see cref="string"/>. The path wehere the template should be saved.</param>
        public static void SaveLinkedTemplate(string linkedTemplate, string pathToSave, /*string outputTemplateName,*/ string oldTemlplatePath)
        {
            //string newTempltateName = Alterfilename(pathToSave,outputTemplateName,oldTemlplatePath);
            File.WriteAllText(pathToSave, linkedTemplate);
        }

        internal static Repository LoadRepositoryConfig(string templateCfg)
        {
            string json = File.ReadAllText(templateCfg);

            Repository config = JsonConvert.DeserializeObject<Repository>(json);

            return config;
        }

        /// <summary>
        /// This method extends the name of the template file with "_linked".
        /// So it is distinct from the name of the original templatename.
        /// </summary>
        /// <param name="templatePath">The path to the template.</param>
        /// <returns>Returns he path to the template with altered template name.</returns>
        private static string Alterfilename(string templatePath, string outputTemplateName, string oldTemlplatePath)
        {
            if(outputTemplateName != null)
            {
                return Path.Combine(templatePath,outputTemplateName);
            }

            string directoryPath = Path.GetDirectoryName(oldTemlplatePath);
            string fileNameWithoutExtension = Path.GetFileNameWithoutExtension(oldTemlplatePath);

            string linkedFileName = fileNameWithoutExtension + "_linked" + Path.GetExtension(templatePath);

            string newTempltateName = Path.Combine(directoryPath, linkedFileName);
            return newTempltateName;
        }

        internal static void SaveUpdatedTemplate(Repository repository, string repositoryConfigPath)
        {
            string json = JsonConvert.SerializeObject(repository);
            File.WriteAllText(repositoryConfigPath,json );
        }

        /// <summary>
        /// Loads the configuration for the application.
        /// </summary>
        /// <param name="path">A <see cref="string"/> path to the configuration.</param>
        /// <returns>Returns an instance of the <see cref="Configuration"/> that contains the read application data.</returns>
        public static AppConfiguration LoadAppConfig(string path)
        {
            string json = File.ReadAllText(path);

            AppConfiguration config = JsonConvert.DeserializeObject<AppConfiguration>(json);
           
            return config;
        }

        /// <summary>
        /// Gets the path to the templatefile.
        /// </summary>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        private static string GetTemplateFile()
        {
            string folderName = "Template"; 
            string templatePath = Path.Combine(Directory.GetCurrentDirectory(),folderName);
   
            if (Directory.Exists(templatePath))
            {
                string[] files = Directory.GetFiles(templatePath);

                // Check if there are any files in the folder
                if (files.Length > 0)
                {
                    string firstFilePath = files.First(); // Get the first file path
                    return firstFilePath;
                }
                else
                {
                    return null;
                }
            }
            else
            {
                throw new DirectoryNotFoundException();
            }
        }

        /// <summary>
        /// This method clears the folder where the repositories are temporarely saved <br/> if the directory of the repositories are not empty.
        /// </summary>
        /// <param name="path">A string represeantation of the path to the repository folder.</param>
        public static void RemoveRepositoryIfExists(string path)
        {
            if (Directory.Exists(path))
            {

                var directory = new DirectoryInfo(path) { Attributes = FileAttributes.Normal };

                foreach (var info in directory.GetFileSystemInfos("*", SearchOption.AllDirectories))
                {
                    info.Attributes = FileAttributes.Normal;
                }

                directory.Delete(true);
            }
        }
    }
}
