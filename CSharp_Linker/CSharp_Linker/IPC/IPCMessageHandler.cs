using CSharp_Linker.EventArgs;
using CSharp_Linker.Helper;
using CSharp_Linker.IPC.CommunicationObjects.Requests;
using CSharp_Linker.IPC.CommunicationObjects.Responses;
using Exchange.Exceptions;
using Exchange.Misc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace CSharp_Linker.IPC
{
    /// <summary>
    /// This class represents a <see cref="IPCMessageHandler"/>.<br></br> Handles the IPC messages.
    /// </summary>
    internal class IPCMessageHandler
    {
        /// <summary>
        /// Fires when a message is created.
        /// </summary>
        public EventHandler<SendMessageEventArgs> _fireOnResponseDone;

        ///// <summary>
        ///// Fires when a 
        ///// </summary>
        //public EventHandler<CreateCompilationEventArgs> _fireOnCreateCompilation;

        /// <summary>
        /// The object that finds a codepath.
        /// </summary>
        private CodePathFinder _codePathFinder;

        /// <summary>
        /// Creates a <see cref="IPCMessageHandler"/> class.
        /// </summary>
        public IPCMessageHandler()
        {
            _codePathFinder = new CodePathFinder();
        }

        /// <summary>
        /// Handles the LanguageLookup request.
        /// </summary>
        /// <param name="message">The request to process.</param>
        private void HandleLanguagelookUp(string message)
        {
            ResponseObject<List<string>> resp = new ResponseObject<List<string>>();
            resp.Result = Configuration.SupportedLanguages;
            resp.Id = GetMessageId(message);

            string respObj = JsonConvert.SerializeObject(resp);

            this._fireOnResponseDone(this, new SendMessageEventArgs(respObj));
            //Console.WriteLine("LanguageLookUp response sent");
        }

        /// <summary>
        /// Handle the Mehtodelookup request.
        /// </summary>
        /// <param name="message">The message to process.</param>
        private void HandleMethodelookUp(string message)
        {
            var erg = ValidateMethods(message);

            ResponseObject<List<MethodLookUp>> resp = new ResponseObject<List<MethodLookUp>>();
            resp.Result = erg;
            resp.Id = GetMessageId(message);

            string respObj = JsonConvert.SerializeObject(resp);

            this._fireOnResponseDone(this, new SendMessageEventArgs(respObj));
            //Console.WriteLine("MethodLookUp response sent");
        }

        /// <summary>
        /// handles the CodePathlookUpRequest.
        /// </summary>
        /// <param name="message">The message to process.</param>
        private void HandleCodePathLookUp(string message)
        {
            //Console.Write(message);
            JObject obj = JObject.Parse(message);
            string lookUpString = obj["params"].ToString();

            CodePathLookUp lookUpObj = JsonConvert.DeserializeObject<CodePathLookUp>(lookUpString);

            CodePathLookUpResult res = _codePathFinder.FindCodeElement(lookUpObj.SearchString, lookUpObj.ResultCount);
            ResponseObject<CodePathLookUpResult> resp = new ResponseObject<CodePathLookUpResult>();

            if (res == null || res.CodeElements == null || res.CodeElements.Count == 0)
            {
                resp.Result = new CodePathLookUpResult();
                resp.Error = Errors.NoCodeElementFound;
            }
            else
            {
                resp.Id = GetMessageId(message);
                resp.Result = res;
            }

            string respObj = JsonConvert.SerializeObject(resp);

            this._fireOnResponseDone(this, new SendMessageEventArgs(respObj));
            //Console.WriteLine("CodePathLookUp response sent");
        }

        /// <summary>
        /// Handles the SetPath request.
        /// </summary>
        /// <param name="message">The message to process.</param>
        private void HandleSetPath(string message)
        {
            ResponseObject<bool> resp = new ResponseObject<bool>();
            JObject obj = JObject.Parse(message);
            string path = obj["params"].ToString();

            if (Uri.IsWellFormedUriString(path, UriKind.Absolute))
            {
                resp.Error = Errors.InvalidPathDescription;
            }
            else if (!Directory.Exists(path))
            {
                resp.Error = Errors.LocalPathDoesNotExists;
            }
            else
            {
                string csprojPath = PathHelper.FindCsprojFile(path);

                if (csprojPath != null)
                {
                    resp.Result = true;
                    Configuration.CsProjPath = csprojPath;
                    Configuration.RepoPath = path;

                    try
                    {
                        _codePathFinder.CreateCompilaton(csprojPath);
                    }
                    catch (ProtocolException e)
                    {
                        resp.Error = e.Error;
                    }
                    resp.Id = GetMessageId(message);
                }
                else
                {
                    resp.Result = false;
                }
            }

            string respObj = JsonConvert.SerializeObject(resp);
            this._fireOnResponseDone(this, new SendMessageEventArgs(respObj));
        }

        /// <summary>
        /// Delegates the processing of a given request.
        /// </summary>
        /// <param name="method">The name of the method that schould be called.</param>
        /// <param name="message">The raw string representation of the message read from the stream.</param>
        private void HandleMethod(string method, string message)
        {
            switch (method)
            {
                case "LanguageLookUp":
                    HandleLanguagelookUp(message);
                    break;
                case "MethodLookUp":
                    HandleMethodelookUp(message);
                    //Console.WriteLine(message);
                    break;
                case "CodePathLookUp":
                    HandleCodePathLookUp(message);
                    break;
                case "SetPath":
                    HandleSetPath(message);
                    break;
                default:
                    //Console.WriteLine("Method not supported");
                    break;
            }
        }

        /// <summary>
        /// Handle the event fired when a message is reveived.
        /// </summary>
        /// <param name="sender">The sender of the event.</param>
        /// <param name="e">A <see cref="MessageReceivedEventArgs"/>object. <br></br> The arguments of the event.</param>
        public void WorkMessage(object? sender, MessageReceivedEventArgs e)
        {
            string method = GetMethod(e.Message);
            int id = GetMessageId(e.Message);
            HandleMethod(method, e.Message);
        }

        /// <summary>
        /// Extracts the name of the JSON-RPC 2.0 method from an IPC mesage.
        /// </summary>
        /// <param name="json">The message from the IPC stream.</param>
        /// <returns></returns>
        /// <exception cref="ArgumentNullException">Is thrown when the <paramref name="json"/> is null.</exception>
        private string GetMethod(string json)
        {
            if (json == null)
                throw new ArgumentNullException("json");

            JObject obj = JObject.Parse(json);
            return obj["method"].ToString();
        }

        /// <summary>
        /// Extracts the id of the JSON-RPC 2.0 method from an IPC mesage.
        /// </summary>
        /// <param name="json">The message from the IPC stream.</param>
        /// <returns></returns>
        /// <exception cref="ArgumentNullException">Is thrown when the <paramref name="json"/> is null.</exception>
        private int GetMessageId(string json)
        {
            if (json == null)
                throw new ArgumentNullException();

            JObject obj = JObject.Parse(json);
            return (int)obj["id"];
        }

        /// <summary>
        /// Validates wheter the methods the mainapplication need are supported by the linker.
        /// </summary>
        /// <param name="message">The message read from the IPC stream.</param>
        /// <returns>Return a <see cref="List{MethodLookUp}"/>. contains the method, wether they ar supported or not.</returns>
        private static List<MethodLookUp> ValidateMethods(string message)
        {
            List<MethodLookUp> errors = new List<MethodLookUp>();
            JObject obj = JObject.Parse(message);
            var methods = obj["params"].ToList();
            foreach (string item in methods)
            {
                MethodLookUp method = new MethodLookUp();
                method.method = item;
                if (!Configuration.SupportedMehtods.Contains(item))

                    method.supported = false;
                else
                    method.supported = true;
                errors.Add(method);
            }

            return errors;
        }
    }
}
