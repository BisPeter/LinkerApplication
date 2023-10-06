using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharp_Linker.EventArgs
{
    public class MessageReceivedEventArgs
    {
        public string Message { get; private set; }

        public MessageReceivedEventArgs(string message)
        {
            Message = message;
        }
    }
}
