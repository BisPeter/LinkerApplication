"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSearchString = void 0;
const antlr4ts_1 = require("antlr4ts");
const TypescriptGrammarLexer_1 = require("../../ANTLR/TypescriptGrammarLexer");
const TypescriptGrammarParser_1 = require("../../ANTLR/TypescriptGrammarParser");
const TypescriptParserVisitor_1 = require("./TypescriptParserVisitor");
/**
 * Parses a search string.
 * @param {string} input - The searchstring to parse.
 * @returns {searchStringPart[]} Returns the parts of the search string.
 */
function parseSearchString(input) {
    // Create the lexer and parser
    //let inputStream = new ANTLRInputStream(".namespace1.namespace2:class1::method1(arg1,arg2)");
    let inputStream = new antlr4ts_1.ANTLRInputStream(input);
    let lexer = new TypescriptGrammarLexer_1.TypescriptGrammarLexer(inputStream);
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    let parser = new TypescriptGrammarParser_1.TypescriptGrammarParser(tokenStream);
    // Parse the input, where `compilationUnit` is whatever entry point you defined
    let tree = parser.start();
    let visi = new TypescriptParserVisitor_1.TypescriptParserVisitor();
    visi.visit(tree);
    return visi.searchStringParts;
}
exports.parseSearchString = parseSearchString;
