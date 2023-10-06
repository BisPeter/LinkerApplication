import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { TypescriptGrammarLexer } from '../../ANTLR/TypescriptGrammarLexer';
import { TypescriptGrammarParser } from '../../ANTLR/TypescriptGrammarParser';
import { TypescriptParserVisitor } from './TypescriptParserVisitor';
import { searchStringPart } from './searchStringParts';

/**
 * Parses a search string.
 * @param {string} input - The searchstring to parse.
 * @returns {searchStringPart[]} Returns the parts of the search string.
 */
export function parseSearchString(input: string): searchStringPart[] {
  // Create the lexer and parser
  //let inputStream = new ANTLRInputStream(".namespace1.namespace2:class1::method1(arg1,arg2)");
  let inputStream = new ANTLRInputStream(input);
  let lexer = new TypescriptGrammarLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new TypescriptGrammarParser(tokenStream);

  // Parse the input, where `compilationUnit` is whatever entry point you defined
  let tree = parser.start();

  let visi = new TypescriptParserVisitor();

  visi.visit(tree);
  return visi.searchStringParts;
}
