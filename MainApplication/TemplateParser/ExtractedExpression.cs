namespace TemplateParser
{
    public class ExtractedExpression
    {
        /// <summary>
        /// Contains the Extracted searchstring, including the applicationname and resultcount.
        /// </summary>
        public string SearchString { get; set; }

        /// <summary>
        /// Contains the template for list for a given fileformat.
        /// </summary>
        public string ListMarker { get; set; }
    }
}
