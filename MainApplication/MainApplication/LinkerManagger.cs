using CommunicationClasses.Messages.Request;
using CommunicationClasses.Messages.Response;
using GitHandeler.GitCommunication;
using IPCommunicator.Communication;
using IPCommunicator.Events;
using MainApplication.Config;
using MainApplication.Linker;
using MainApplication.Miscl;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using TemplateParser;

namespace MainApplication
{
    public class LinkerManagger
    {
        //c# linker
        private const string _linkers = @"C:\Users\offic\Documents\FH\Master\MasterArbeit\Implementaion_\22_Net6\CSharp_Linker\CSharp_Linker\bin\Debug\net6.0";

        //Typescript linker
        //private const string _linkers = @"C:\Users\offic\Documents\FH\Master\MasterArbeit\Implementaion_\TypeScipt_Linker";

        //private const string _linkers = @".\LinkerProcesses";
        /// <summary>
        /// LinkersPath
        /// </summary>
        //private string _linkers = Path.Combine(Directory.GetCurrentDirectory(), "LinkerProcesses");//@"C:\Users\offic\Documents\FH\Master\MasterArbeit\Implementaion_\MainApplication\MainApplication\MainApplication\Repositories\";

        /// <summary>
        /// An instance of <see cref="Dictionary{string, LinkerObject}"/>.
        /// It represents the running linker instances.
        /// </summary>
        private Dictionary<string, LinkerObject> Linker { get; set; }

        /// <summary>
        /// An instance of <see cref="Configuration"/>.
        /// It hold the Application data.
        /// </summary>
        private Configuration _configuration { get; set; }

        /// <summary>
        /// It represents the name of the last used linker.
        /// </summary>
        private string _lastUsedApp { get; set; }

        /// <summary>
        /// Fires upon an unrecoverable error.
        /// </summary>
        public EventHandler<UnRecoverableErrorEvetArgs> _FireOnUnrecoverableErrorOccured;

        /// <summary>
        /// Creates an instance of the <see cref="LinkerManagger"/> class.
        /// It manages the running linker processes.
        /// </summary>
        /// <param name="configuration"></param>
        public LinkerManagger(Configuration configuration)
        {
            Linker = new Dictionary<string, LinkerObject>();
            _configuration = configuration;
            DownloadRepository();
        }

        /// <summary>
        /// This method initiates the download of the repository defined in the configuration.
        /// </summary>
        private void DownloadRepository()
        {
            FileHelper.RemoveRepositoryIfExists(_configuration.AppConfiguration.LocalRepositoryFolder);
            RepositoryManager repositoryManager = new RepositoryManager(_configuration.AppConfiguration.LocalRepositoryFolder, _configuration.Repository.URL, _configuration.Repository.CommitHash);

            if (_configuration.Update)
            {
                repositoryManager.DownloadRepo();
                repositoryManager.GetNewestCommitHash();
                repositoryManager.ResetToCommit();
                _configuration.Repository.CommitHash = repositoryManager.CommitHash;
                FileHelper.SaveUpdatedTemplate(_configuration.Repository, _configuration.RepositoryConfigPath);
            }
            else
            {
                repositoryManager.DownloadExactCommit();

            }

        }

        internal void CloseLinker()
        {
            foreach (var item in Linker)
            {
                item.Value.PipeClient.CloseConnection();
                item.Value.Process.Kill();
                item.Value.Process.WaitForExit();
                item.Value.Process.Dispose();
            }
        }

        /// <summary>
        /// This method loads the linker applications based upon what is defined in the configuration.
        /// </summary>
        public void LoadLinker()
        {
            foreach (var app in _configuration.Repository.Applications)
            {
                AddLinker(app.Lang);
            }
        }

        /// <summary>
        /// This method processes the extracted searchstrings via sending the to the apropriate linker process. 
        /// </summary>
        /// <param name="placeholders">A <see cref="Dictionary{int, string}"/>.
        /// It hold the extracted searchstrings.
        /// The key: the position of the searchstring in the documantationtemplate.
        /// The value: the searchstring.</param>
        /// <returns>A <see cref="Dictionary{int, CodePathLookUpResult}"/>
        /// It holds the </returns>
        public Dictionary<int, CodePathLookUpResult> ProcessTemplate(Dictionary<int, ExtractedExpression> placeholders)
        {
            Dictionary<int, CodePathLookUpResult> paths = new Dictionary<int, CodePathLookUpResult>();
            foreach (var item in placeholders)
            {
                string appName = string.Empty;
                string searchstring = string.Empty;
                string language = string.Empty;
                string path = string.Empty;
                SearchConfiguration searchConfiguration = GetSearchConfiguration(item.Value.SearchString);

                var application = _configuration.Repository.Applications.Where(a => a.Name == searchConfiguration.AppName).FirstOrDefault();

                if (application == null)
                {
                    language = _configuration.Repository.Applications.FirstOrDefault().Lang;
                    path = _configuration.AppConfiguration.LocalRepositoryFolder;
                }
                else
                {
                    language = application.Lang;
                    path = _configuration.AppConfiguration.LocalRepositoryFolder + application.RelativePath;
                }

                if (_lastUsedApp == null || _lastUsedApp != searchConfiguration.AppName)
                {
                    ResponseObject<bool> setPathResp = SendSetPath(language, path);
                    if (setPathResp.Error != null)
                        _FireOnUnrecoverableErrorOccured(this, new UnRecoverableErrorEvetArgs { Exception = new Exception(setPathResp.Error.Message) });

                    _lastUsedApp = searchConfiguration.AppName;
                }

                var resp = SendCodePathLookUp(language, searchConfiguration.SearchString, searchConfiguration.ResultCount);


                if (resp.Error != null)
                {
                    paths.Add(item.Key, GetErrorCodeElement(resp.Result.AppName));
                    resp.Error.Message += Environment.NewLine + $"Ist der Suchausdruck: ++ {searchConfiguration.SearchString} ++ vielleicht falsch gescheieben?";
                    ConsoleLogger.WriteErrorMessage(resp.Error);
                }
                else
                {
                resp.Result.AppName = searchConfiguration.AppName;
                if (item.Value.ListMarker != null)
                    resp.Result.ListTemplate = item.Value.ListMarker;
                    paths.Add(item.Key, resp.Result);
                }
            }

            return paths;
        }

        /// <summary>
        /// This method returns an error placeholder if a codeelement could not be found.
        /// </summary>
        /// <param name="appName">The name of the application where the codelement could not be found.</param>
        /// <returns>A <see cref="CodePathLookUpResult"/>.
        /// An error placeholder of a codeelement.</returns>
        private static CodePathLookUpResult GetErrorCodeElement(string appName)
        {
            return new CodePathLookUpResult { AppName = appName, CodeElements = new List<CodeElement> { new CodeElement { Name = "", Path = "Error" } } };
        }

        /// <summary>
        /// This method parses a searchstring of a documentationstemplate.
        /// It extracts: the searchstring,the name of the application and the result count.
        /// </summary>
        /// <param name="item"></param>
        /// <returns>A <see cref="SearchConfiguration"/> object.
        /// It contains the searchstring,the name of the application and the result count.</returns>
        private SearchConfiguration GetSearchConfiguration(string searchString)
        {
            SearchConfiguration searchConfig = new SearchConfiguration();
            string pattern = @"\[.*\]";
            if (Regex.IsMatch(searchString, pattern))
            {
                string searchStringParams = searchString.Substring(searchString.IndexOf("[") + 1, searchString.IndexOf("]") - searchString.IndexOf("[") - 1);

                if (searchStringParams.Contains('|'))
                {
                    string[] nameCount = searchStringParams.Split('|');
                    searchConfig.AppName = nameCount[0];
                    searchConfig.ResultCount = int.Parse(nameCount[1]);
                }
                else
                {
                    searchConfig.AppName = searchStringParams;
                }
                searchConfig.SearchString = searchString.Substring(searchString.IndexOf("]") + 1, searchString.Length - searchString.IndexOf("]") - 1);
            }
            else
            {
                if (this._configuration.Repository.Applications.Count > 1)
                    throw new InvalidOperationException("The default appname was unambigous");

                searchConfig.AppName = this._configuration.Repository.Applications.FirstOrDefault().Name;
                searchConfig.SearchString = searchString;
            }

            return searchConfig;
        }

        /// <summary>
        /// This method starts and strarts a linker process for a given programming language.
        /// </summary>
        /// <param name="language">The language for a linker process should be started.</param>
        public void AddLinker(string language)
        {
            if (Linker.Keys.Contains(language))
                return;

            string executablePath = _configuration.AppConfiguration.Linkers[language];
            StartLinker(language, executablePath);
        }

        /// <summary>
        /// It starts a specific linker Process.
        /// </summary>
        /// <param name="language">The language for a linker you want to start.</param>
        /// <param name="executablePath">The path to the executable of the linker process you want to start.</param>
        /// <returns>It returns a bool wheter a linker could be started.</returns>
        private bool StartLinker(string language, string executablePath)
        {
            if (executablePath != null)
            {
                ProcessStartInfo startInfo = new ProcessStartInfo(executablePath);
                startInfo.CreateNoWindow = false;
                startInfo.UseShellExecute = false;
                startInfo.RedirectStandardInput = true;
                startInfo.RedirectStandardOutput = true;
                // Set the environment variables for the new process
                var envVars = Environment.GetEnvironmentVariables();

                // Set the environment variables for the new process
                foreach (var key in envVars.Keys)
                {
                    startInfo.EnvironmentVariables[key.ToString()] = envVars[key].ToString();
                }

                LinkerObject linkerObject = new LinkerObject();
                linkerObject.Language = language;
                try
                {
                    var p = new Process();
                    p.StartInfo = startInfo;
                    p.StartInfo.FileName = executablePath;
                    p.Start();
                    linkerObject.Process = p;

                }
                catch (ObjectDisposedException ex)
                {
                    this._FireOnUnrecoverableErrorOccured(this, new UnRecoverableErrorEvetArgs { Exception = ex });
                    return false;
                }
                catch (FileNotFoundException ex)
                {
                    this._FireOnUnrecoverableErrorOccured(this, new UnRecoverableErrorEvetArgs { Exception = ex });
                    return false;
                }

                IPCClient client = new IPCClient(language);
                client.OpenConnection(linkerObject.Process);
                linkerObject.PipeClient = client;
                Linker.Add(language, linkerObject);
                StartInitialHandShake(language);


                return true;
            }
            else
            {
                this._FireOnUnrecoverableErrorOccured(this, new UnRecoverableErrorEvetArgs { Exception = new Exception($"Linker for the language [{language}] could not be started.") });
                return false;
            }
        }

        /// <summary>
        /// This method starts the initialhandshake between the mainapplication and the started linker process.
        /// </summary>
        /// <param name="language"></param>
        private void StartInitialHandShake(string language)
        {
            bool languageLookUp = SendLanguageLookUp(language);

            if (!languageLookUp)
            {
                _FireOnUnrecoverableErrorOccured(this, new UnRecoverableErrorEvetArgs { Message = @$"Error occured while trying to validate supported language of a
                                                                                                    linker for the language:{language}
                                                                                                    please make sure that every linker supports the language its created for." });
            }

            if (languageLookUp)
            {
                List<MethodlookUp> unsupportedmethods = new List<MethodlookUp>();
                bool methodLookUp = SendMehtodLookUp(language, out unsupportedmethods);
                if (!methodLookUp)
                {
                    var unsupportedmethodsString = string.Join(", ", unsupportedmethods.Select(x => x.Method));
                    _FireOnUnrecoverableErrorOccured(this, new UnRecoverableErrorEvetArgs() { Message = @$"Some JSON-RPC 2.0 methods were not supported                
                                                                                                        by the linker for the language: {language}.
                                                                                                        The Methods are:{unsupportedmethodsString}" });
                }
            }
        }

        /// <summary>
        /// This method sends a methodlookup Request.
        /// </summary>
        /// <param name="language">The language of the linker the request should be sent.</param>
        /// <returns>Returns true when the needed methods are supported by the linker process.</returns>
        private bool SendMehtodLookUp(string language, out List<MethodlookUp> unsupportedmethods)
        {
            RequestObject<List<string>> obj = new RequestObject<List<string>>()
            {
                Id = 1,
                JsonRpc = "2.0",
                Method = "MethodLookUp",
                Params = _configuration.AppConfiguration.SupportedMehtods
            };

            var client = Linker[language].PipeClient;
            var resp = SendReceiveMessage(client, obj);
            var methodlookUpResp = JsonConvert.DeserializeObject<ResponseObject<List<MethodlookUp>>>(resp);
            unsupportedmethods = methodlookUpResp.Result.Where(x => x.Supported == false).ToList();

            return !unsupportedmethods.Any();
        }

        /// <summary>
        /// This method sends a setpath Request.
        /// </summary>
        /// <param name="language">The language of the linker the request should be sent.</param>
        /// <param name="path">The path to the local location of the repository where the application is located.</param>
        /// <returns>Returns a <see cref="ResponseObject{bool}"/>. The when the path could be set.</returns>
        private ResponseObject<bool> SendSetPath(string language, string path)
        {
            var client = Linker[language].PipeClient;
            RequestObject<string> obj = new RequestObject<string>()
            {
                Id = 1,
                JsonRpc = "2.0",
                Method = "SetPath",
                Params = path
            };

            var resp = SendReceiveMessage(client, obj);

            return JsonConvert.DeserializeObject<ResponseObject<bool>>(resp);
        }

        /// <summary>
        /// This method sends a codePathlookUp request.
        /// </summary>
        /// <param name="language">The language of the linker you want to send the request.</param>
        /// <param name="searchString">The searchstring to search a codeElement.</param>
        /// <param name="resultCount">The count of how many results you want to get back.</param>
        /// <returns>Returns a <see cref="ResponseObject{CodePathLookUpResult}"/></returns>
        private ResponseObject<CodePathLookUpResult> SendCodePathLookUp(string language, string searchString, int resultCount = -1)
        {
            RequestObject<CodeLookUpRequest> obj = new RequestObject<CodeLookUpRequest>()
            {
                Id = 1,
                JsonRpc = "2.0",
                Method = "CodePathLookUp",
                Params = new CodeLookUpRequest
                {
                    SearchString = searchString,
                    ResultCount = resultCount
                }
            };

            var client = Linker[language].PipeClient;
            string resp = SendReceiveMessage(client, obj);

            ResponseObject<CodePathLookUpResult> response = JsonConvert.DeserializeObject<ResponseObject<CodePathLookUpResult>>(resp);

            return response;
        }

        /// <summary>
        /// This method sends and Receives messages Trough IPC.
        /// </summary>
        /// <param name="client">The client where the message sould be sent.</param>
        /// <param name="obj">The message object to send.</param>
        /// <returns>Returns the string representation of the response.</returns>
        private string SendReceiveMessage(IPCClient client, object obj)
        {
            string message = JsonConvert.SerializeObject(obj);
            client.WriteToStream(message);
            string resp = client.ReadFromstreamStream();
            return resp;
        }

        /// <summary>
        /// This method send a languagelookup request.
        /// </summary>
        /// <param name="language"></param>
        /// <param name="client"></param>
        /// <returns></returns>
        private bool SendLanguageLookUp(string language)
        {
            RequestObject<string> obj = new RequestObject<string>()
            {
                Id = 1,
                JsonRpc = "2.0",
                Method = "LanguageLookUp",
                Params = language
            };

            var client = Linker[language].PipeClient;
            var resp = SendReceiveMessage(client, obj);
            JObject jResponse = JObject.Parse(resp);
            var languages = jResponse["result"].ToArray();
            return languages.Contains(language) ? true : false;
        }

        /// <summary>
        /// This method searches a given directory for a given linker application.
        /// </summary>
        /// <param name="language">The language for what a linker should be seeken.</param>
        /// <param name="directory">The directory where the linker application should be searched.</param>
        /// <returns>Returns the pathe to a given linker.</returns>
        private string SearchLinker(string language)
        {
            string[] files = null;

            try
            {
                files = Directory.GetFiles(_linkers, language + "_Linker" + ".exe", SearchOption.AllDirectories);
            }
            catch (Exception ex)
            {
                _FireOnUnrecoverableErrorOccured(this, new UnRecoverableErrorEvetArgs
                {
                    Exception = ex,
                    Message = "Could not find Linker."
                });
            }

            if (files.Length > 0)
            {
                return files[0];
            }
            else
            {
                _FireOnUnrecoverableErrorOccured(this, new UnRecoverableErrorEvetArgs
                {
                    Message = "Could not find Linker."
                });

                return null;
            }
        }

        /// <summary>
        /// This method validates wether methods the linker supports are the ones the main application supports.
        /// </summary>
        /// <param name="message"></param>
        /// <returns></returns>
        private bool ValidateMethods(string message)
        {
            var resp = JsonConvert.DeserializeObject<ResponseObject<List<MethodlookUp>>>(message);
            return resp.Result.Select(x => x.Supported == false).Any();

            return true;
        }
    }
}
