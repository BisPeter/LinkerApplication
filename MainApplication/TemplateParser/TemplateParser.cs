using CommunicationClasses.Messages.Response;
using MainApplication.Miscl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace TemplateParser
{
    /// <summary>
    /// This class Parses a documentationtemplate.
    /// </summary>
    public class TemplateParser
    {
        /// <summary>
        /// Holds the extracted placeholders.
        /// </summary>
        public Dictionary<int, ExtractedExpression> Placeholders { get; } = new Dictionary<int, ExtractedExpression>();

        /// <summary>
        /// The templte with the injected placeholders.
        /// </summary>
        public string TemplateWithPlaceholder { get; set; }

        /// <summary>
        /// Extracts the searchstrings from the documentationstemplate.
        /// </summary>
        /// <param name="text">The documentationstemplate to extract the searchstrings from.</param>
        public void ParseTemplate(string text)
        {
            var lines = text.Split(new[] { Environment.NewLine }, StringSplitOptions.None);

            for (int i = 0; i < lines.Length; i++)
            {
                var line = lines[i];
                var index = line.IndexOf("<<<");

                while (index != -1)
                {
                    var endIndex = line.IndexOf(">>>", index + 1);

                    if (endIndex != -1)
                    {
                        var placeholder = line.Substring(index + 3, endIndex - index - 3);

                        ExtractedExpression searchTemplate = GetSearchTemplate(placeholder);

                        var uniquePlaceholder = $"<<<{Placeholders.Count}>>>";
                        line = line.Remove(index, endIndex - index + 3).Insert(index, uniquePlaceholder);
                        Placeholders.Add(Placeholders.Count, searchTemplate);
                        index = line.IndexOf("<<<", index + uniquePlaceholder.Length);
                    }
                    else
                    {
                        break;
                    }
                }

                lines[i] = line;
            }

            text = string.Join(Environment.NewLine, lines);

            TemplateWithPlaceholder = text;
        }

        /// <summary>
        /// Creates a <see cref="ExtractedExpression"/> from a found placeholder.
        /// </summary>
        /// <param name="placeholder">The placeholder found in the Documenttemplate.</param>
        /// <returns>Returns the extracted searchexpression.</returns>
        private ExtractedExpression GetSearchTemplate(string placeholder)
        {
            string pattern = @"\{(.+?)\}";
            Match match = Regex.Match(placeholder, pattern);
            ExtractedExpression ex = new ExtractedExpression();
            if (match.Success)
            {
                if (match.Groups.Count < 1)
                    throw new InvalidOperationException("Placeholder has a false format.");

                ex.ListMarker = match.Groups[1].Value;
                ex.SearchString = placeholder.Replace(match.Groups[0].Value, "");
                ex.SearchString = ex.SearchString.Trim();

            }
            else
            {
                ex.SearchString = placeholder;
            }


            return ex;
        }

        /// <summary>
        /// Inserts the links into the documentationstemplate.
        /// </summary>
        /// <param name="template">A template to inject into.</param>
        /// <param name="modifiedTexts">The links to inject into the template with the placeholders.</param>
        /// <param name="extension">The extension of the documantationstemplate.</param>
        /// <returns>Returns the template where the links are injected into.</returns>
        public string ReplacePlaceholders(string template, Dictionary<int, CodePathLookUpResult> modifiedTexts)
        {
            string retText = template;
            foreach (var cplResult in modifiedTexts)
            {
                string replaceString = string.Empty;

                //switch (extension)
                //{
                //    case FileExtension.html:
                //        replaceString = GetReplaceStringForHtml(cplResult.Value.CodeElements);
                //        break;
                //    case FileExtension.md:
                //        replaceString = GetReplaceStringForMarkDown(cplResult.Value.CodeElements);
                //        break;
                //    default:
                //        break;
                //}

                replaceString = GetUniversalReplaceString(cplResult.Value.CodeElements, cplResult.Value.ListTemplate);

                retText = retText.Replace($"<<<{modifiedTexts.IndexOfKey(cplResult.Key)}>>>", replaceString);
            }

            return retText;
        }

        private string GetUniversalReplaceString(List<CodeElement> codeElements, string listTemplate)
        {
            if (codeElements == null || codeElements.Count == 0)
                return String.Empty;
            else if (codeElements.Count == 1)
                return codeElements[0].Path;

            StringBuilder listBuilder = new StringBuilder();

            foreach (var result in codeElements)
            {
                string listItem = listTemplate.Replace("[[[name]]]", result.Name);
                listItem = listItem.Replace("[[[path]]]", result.Path);

                listBuilder.AppendLine(listItem + Environment.NewLine);
            }

            return listBuilder.ToString();
        }

        /// <summary>
        /// This method creates a string to inject into the template.<br></br>
        /// The strings are specific for a specific file format [Markdown].
        /// </summary>
        /// <param name="codeElements">The code element to to create a string from.</param>
        /// <returns>Returns a string that can be injected into the documentationstemplate</returns>
        private string GetReplaceStringForMarkDown(List<CodeElement> codeElements)
        {
            if (codeElements == null || codeElements.Count == 0)
                return string.Empty;

            if (codeElements.Count == 1)
                return codeElements.FirstOrDefault().Path;

            StringBuilder listBuilder = new StringBuilder();
            listBuilder.AppendLine("\n- Results:");

            foreach (var result in codeElements)
            {
                string listItem = $"  - [{result.Path}]({result.Name})";
                listBuilder.AppendLine(listItem);
            }

            return listBuilder.ToString();
        }

        /// <summary>
        /// This method creates a string to inject into the template.<br></br>
        /// The strings are specific for a specific file format [HTML].
        /// </summary>
        /// <param name="codeElements">The code element to to create a string from.</param>
        /// <returns>Returns a string that can be injected into the documentationstemplate</returns>
        private string GetReplaceStringForHtml(List<CodeElement> codeElements)
        {
            if (codeElements == null || codeElements.Count == 0)
                return string.Empty;

            if (codeElements.Count == 1)
                return codeElements.FirstOrDefault().Path;

            StringBuilder listBuilder = new StringBuilder();
            listBuilder.AppendLine("<ul>");

            foreach (var result in codeElements)
            {
                string listItem = $"<li><a href=\"{result.Path}\">{result.Name}</a></li>";
                listBuilder.AppendLine(listItem);
            }

            listBuilder.AppendLine("</ul>");

            return listBuilder.ToString();
        }
    }
}


