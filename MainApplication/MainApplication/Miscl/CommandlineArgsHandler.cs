using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MainApplication.Miscl
{
    /// <summary>
    /// This class handles commandline arguments
    /// </summary>
    public class CommandlineArgsHandler
    {
        public static CMDLArguments GetCommandLineArgs(string[] args)
        {
            CMDLArguments arguments = new CMDLArguments();
            for (int i = 0; i < args.Length; i++)
            {
                if (i == 0)
                { 
                    arguments.TemplatePath = args[i];
                }
                else if (args[i] == "--docoutput" && i + 1 < args.Length)
                {
                    arguments.DocOutputPath = args[i + 1];
                    i++;
                }               
                else if (args[i] == "--templatecfg" && i + 1 < args.Length)
                {
                    arguments.TemplateCfg = args[i + 1];
                    i++;
                }
                else if (args[i] == "--appcfg" && i + 1 < args.Length)
                {
                    arguments.AppCfg = args[i + 1];
                    i++;
                }
                else if (args[i] == "--u")
                {
                    arguments.Update = true;
                }
            }

            return arguments;
        }
    }
}
