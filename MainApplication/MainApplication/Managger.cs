using CommunicationClasses.Messages.Response;
using GitHandeler.GitCommunication;
using IPCommunicator.Events;
using MainApplication.Config;
using MainApplication.Miscl;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TemplateParser;

namespace MainApplication
{
    /// <summary>
    /// 
    /// </summary>
    public class Managger
    {
        /// <summary>
        /// An instance of a <see cref="LinkerManagger"/>, that manages the linker processes.
        /// </summary>
        private LinkerManagger _linkerManagger;

        /// <summary>
        /// An instance of a <see cref="RepositoryManager"/>, that manages the repositories. 
        /// </summary>
        private RepositoryManager _repositoryManager;

        /// <summary>
        /// An instance of the <see cref="Configuration"/>. It holds the configuration data of the application.
        /// </summary>
        private Configuration _configuration = new Configuration();

        /// <summary>
        /// This value hold the template that serves as a documentation template.
        /// </summary>
        private string _template;

        //private const string localRepoLocation = @"C:\Users\offic\Documents\FH\Repositories\";
        private const string localRepoLocation = @"C:\Users\offic\Documents\FH\Master\MasterArbeit\Implementaion_\MainApplication\MainApplication\MainApplication\Repositories\";

        /// <summary>
        /// This is an instance of a <see cref="TemplateParser.TemplateParser"/>.
        /// It handles the parsing of the documentationsTemplate.
        /// </summary>
        private TemplateParser.TemplateParser _parser;

        /// <summary>
        /// Creates an instance of the <see cref="Managger"/> class.
        /// It manages the application
        /// </summary>
        /// <param name="configurationPath">The Path to the configuration.</param>
        public Managger(CMDLArguments cMDLArguments)
        {
            _configuration.AppConfiguration = FileHelper.LoadAppConfig(cMDLArguments.AppCfg);
            _configuration.TemlplatePath = cMDLArguments.TemplatePath;
            _configuration.Repository = FileHelper.LoadRepositoryConfig(cMDLArguments.TemplateCfg);
            _configuration.RepositoryConfigPath = cMDLArguments.TemplateCfg;
            _configuration.TemlplatePath = cMDLArguments.TemplatePath;
            //_configuration.OutputTemplateName = cMDLArguments.OutputTemplateName;
            _configuration.DocOutputPath = cMDLArguments.DocOutputPath;
            _configuration.Update = cMDLArguments.Update;

            this._parser = new TemplateParser.TemplateParser();
            _linkerManagger = new LinkerManagger(_configuration);
            _linkerManagger._FireOnUnrecoverableErrorOccured += HandleUnrecoverableException;
            _linkerManagger.LoadLinker();

            //_repositoryManager = new RepositoryManager(_configuration.AppConfiguration.LocalRepositoryFolder, _configuration.Repository.URL, _configuration.Repository.CommitHash);
            //_repositoryManager.DownloadRepo();
            //_configuration.TemplateExtension = FileHelper.ReadFileExtension(_configuration.TemlplatePath);
            _template = FileHelper.LoadTemplate(_configuration.TemlplatePath);

            StartLinking();

            _linkerManagger.CloseLinker();
        }

        /// <summary>
        /// This method exits the application upon an unrecaverable exception.
        /// </summary>
        /// <param name="sender">The sender of the event.</param>
        /// <param name="e">Instance of <see cref="UnRecoverableErrorEvetArgs"/>. The parameters of the event.</param>
        private void HandleUnrecoverableException(object sender, UnRecoverableErrorEvetArgs e)
        {
            ConsoleLogger.WriteException(e.Exception);
            System.Environment.Exit(1);
        }

        /// <summary>
        /// Starts linking the found searchexpressions
        /// from the documentationtemplate with the codebase.
        /// </summary>
        private void StartLinking()
        {

            string linkedTemplate = string.Empty;
            Dictionary<int, CodePathLookUpResult> processedLinks;
            _parser.ParseTemplate(this._template);

            processedLinks = _linkerManagger.ProcessTemplate(_parser.Placeholders);

            var complete = CompleteGithublinks(_configuration.Repository.URL, _configuration.Repository.CommitHash, processedLinks);

            linkedTemplate = _parser.ReplacePlaceholders(_parser.TemplateWithPlaceholder, complete);

            FileHelper.SaveLinkedTemplate(linkedTemplate, _configuration.DocOutputPath,/*_configuration.OutputTemplateName,*/_configuration.TemlplatePath);
        }

        /// <summary>
        /// This method completes the github links.
        /// It contaneates the relative path given from the linker with the url to the github repository.
        /// </summary>
        /// <param name="uRL">A string. The url of the repository.</param>
        /// <param name="commitHash">A string. The commithash of the state of the repository.</param>
        /// <param name="processedLinks">A <see cref="Dictionary{int, CodePathLookUpResult}"/>
        /// The key is the place in the documentationstemplate.
        /// The value is a <see cref="CodePathLookUpResult"/></param>
        /// <returns>A <see cref="Dictionary{int, CodePathLookUpResult}"/>.
        /// The relative pathe to the codeelements concatenated with te github repository.</returns>
        private Dictionary<int, CodePathLookUpResult> CompleteGithublinks(string uRL, string commitHash, Dictionary<int, CodePathLookUpResult> processedLinks)
        {
            Dictionary<int, CodePathLookUpResult> processedLinksWithUrl = new Dictionary<int, CodePathLookUpResult>();
            foreach (var item in processedLinks)
            {
                CodePathLookUpResult codePathLookUpResult = new CodePathLookUpResult();
                codePathLookUpResult.CodeElements = new List<CodeElement>();

                codePathLookUpResult.AppName = item.Value.AppName;
                codePathLookUpResult.ListTemplate = item.Value.ListTemplate;
                string appFolder = _configuration.Repository.Applications.Where(x => x.Name == item.Value.AppName).FirstOrDefault()?.RelativePath;

                if (appFolder != null)
                {
                    appFolder = appFolder.Replace("\\", "/");

                }

                foreach (var codeElement in item.Value.CodeElements)
                {
                    codeElement.Path = codeElement.Path.Replace('\\', '/');
                    codeElement.Path = codeElement.Path.Replace("//", "/");

                    CodeElement codeElementToAdd = new CodeElement();
                    codeElementToAdd.Name = codeElement.Name;

                    if (!String.IsNullOrEmpty(appFolder))
                    {

                        codeElementToAdd.Path = $"{uRL}/blob/{commitHash}/{appFolder}/{codeElement.Path}";
                    }
                    else
                    {
                        codeElementToAdd.Path = $"{uRL}/blob/{commitHash}/{codeElement.Path}";
                    }

                    codePathLookUpResult.CodeElements.Add(codeElementToAdd);
                }

                processedLinksWithUrl.Add(item.Key, codePathLookUpResult);
            }

            return processedLinksWithUrl;
        }
    }
}
