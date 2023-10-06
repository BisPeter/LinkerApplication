"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DslParser = void 0;
const { createToken, Lexer, Parser } = require("chevrotain");
const Dot = createToken({ name: "Dot", pattern: /\./ });
const Plus = createToken({ name: "Plus", pattern: /\+/ });
const Colon = createToken({ name: "Colon", pattern: /:/ });
const Asterisk = createToken({ name: "Asterisk", pattern: /\*/ });
const Exclamation = createToken({ name: "Exclamation", pattern: /!/ });
const Semicolon = createToken({ name: "Semicolon", pattern: /;/ });
const Namespace = createToken({ name: "Namespace", pattern: /namespace\d+/ });
const Class = createToken({ name: "Class", pattern: /class\d+/ });
const Property = createToken({ name: "Property", pattern: /property\d+/ });
const Interface = createToken({ name: "Interface", pattern: /interface\d+/ });
const Method = createToken({ name: "Method", pattern: /method\d+/ });
const Identifier = createToken({ name: "Identifier", pattern: /[a-zA-Z][a-zA-Z0-9]*/ });
const LParen = createToken({ name: "LParen", pattern: /\(/ });
const RParen = createToken({ name: "RParen", pattern: /\)/ });
const Comma = createToken({ name: "Comma", pattern: /,/ });
const allTokens = [
    Dot, Plus, Colon, Asterisk, Exclamation, Semicolon,
    Namespace, Class, Property, Interface, Method,
    Identifier, LParen, RParen, Comma
];
const NamespaceSection = createToken({
    name: "NamespaceSection",
    pattern: Lexer.NA
});
const ClassSection = createToken({
    name: "ClassSection",
    pattern: Lexer.NA
});
const MethodSection = createToken({
    name: "MethodSection",
    pattern: Lexer.NA
});
const dslTokens = [
    NamespaceSection,
    ClassSection,
    MethodSection,
    ...allTokens
];
class DslParser extends Parser {
    constructor() {
        super(dslTokens, { outputCst: true });
        const $ = this;
        $.RULE("dsl", () => {
            $.OR([
                { ALT: () => $.SUBRULE($.namespaceSection) },
                { ALT: () => $.SUBRULE($.classSection) },
                { ALT: () => $.SUBRULE($.methodSection) }
            ]);
        });
        $.RULE("namespaceSection", () => {
            $.CONSUME(NamespaceSection);
            $.AT_LEAST_ONE_SEP({
                SEP: Dot,
                DEF: () => $.CONSUME(Identifier)
            });
        });
        $.RULE("classSection", () => {
            $.CONSUME(ClassSection);
            $.SUBRULE($.classIdentifier);
            $.OPTION(() => {
                $.CONSUME(Plus);
                $.SUBRULE2($.classIdentifier);
            });
        });
        $.RULE("classIdentifier", () => {
            $.CONSUME(Identifier);
        });
        $.RULE("methodSection", () => {
            $.CONSUME(MethodSection);
            $.SUBRULE($.methodIdentifier);
            $.OPTION(() => {
                $.CONSUME(LParen);
                $.OPTION1(() => {
                    $.SUBRULE($.argumentList);
                });
                $.CONSUME(RParen);
            });
        });
        $.RULE("methodIdentifier", () => {
            $.CONSUME(Identifier);
        });
        $.RULE("argumentList", () => {
            $.SUBRULE($.argument);
            $.MANY(() => {
                $.CONSUME(Comma);
                $.SUBRULE2($.argument);
            });
        });
        $.RULE("argument", () => {
            $.CONSUME(Identifier);
            $.OPTION(() => {
                $.CONSUME(Colon);
                $.CONSUME2(Identifier);
            });
        });
        this.performSelfAnalysis();
        module.exports = {
            DslLexer: Lexer,
            DslParser: DslParser,
            allTokens: allTokens
        };
    }
}
exports.DslParser = DslParser;
