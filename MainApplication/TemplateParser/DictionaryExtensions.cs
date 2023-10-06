using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TemplateParser
{
    public static class DictionaryExtensions
    {
        public static int IndexOfKey<TKey, TValue>(this Dictionary<TKey, TValue> dictionary, TKey key)
        {
            int index = 0;
            foreach (var kvp in dictionary)
            {
                if (EqualityComparer<TKey>.Default.Equals(kvp.Key, key))
                {
                    return index;
                }

                index++;
            }

            return -1;
        }
    }
}
