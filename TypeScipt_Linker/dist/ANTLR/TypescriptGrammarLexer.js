"use strict";
// Generated from TypescriptGrammar.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypescriptGrammarLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class TypescriptGrammarLexer extends Lexer_1.Lexer {
    // @Override
    // @NotNull
    get vocabulary() {
        return TypescriptGrammarLexer.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(TypescriptGrammarLexer._ATN, this);
    }
    // @Override
    get grammarFileName() { return "TypescriptGrammar.g4"; }
    // @Override
    get ruleNames() { return TypescriptGrammarLexer.ruleNames; }
    // @Override
    get serializedATN() { return TypescriptGrammarLexer._serializedATN; }
    // @Override
    get channelNames() { return TypescriptGrammarLexer.channelNames; }
    // @Override
    get modeNames() { return TypescriptGrammarLexer.modeNames; }
    static get _ATN() {
        if (!TypescriptGrammarLexer.__ATN) {
            TypescriptGrammarLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TypescriptGrammarLexer._serializedATN));
        }
        return TypescriptGrammarLexer.__ATN;
    }
}
TypescriptGrammarLexer.NSPC = 1;
TypescriptGrammarLexer.CLS = 2;
TypescriptGrammarLexer.INTRF = 3;
TypescriptGrammarLexer.MEMB = 4;
TypescriptGrammarLexer.ENM = 5;
TypescriptGrammarLexer.OPENPAR = 6;
TypescriptGrammarLexer.CLOSEPAR = 7;
TypescriptGrammarLexer.ARGSEP = 8;
TypescriptGrammarLexer.PLUS = 9;
TypescriptGrammarLexer.STRING = 10;
TypescriptGrammarLexer.NUMBER = 11;
TypescriptGrammarLexer.BOOLEAN = 12;
TypescriptGrammarLexer.OBJECT = 13;
TypescriptGrammarLexer.LESS = 14;
TypescriptGrammarLexer.MORETH = 15;
TypescriptGrammarLexer.OPENBR = 16;
TypescriptGrammarLexer.CLOSEBR = 17;
TypescriptGrammarLexer.ID = 18;
// tslint:disable:no-trailing-whitespace
TypescriptGrammarLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
TypescriptGrammarLexer.modeNames = [
    "DEFAULT_MODE",
];
TypescriptGrammarLexer.ruleNames = [
    "NSPC", "CLS", "INTRF", "MEMB", "ENM", "OPENPAR", "CLOSEPAR", "ARGSEP",
    "PLUS", "STRING", "NUMBER", "BOOLEAN", "OBJECT", "LESS", "MORETH", "OPENBR",
    "CLOSEBR", "ID",
];
TypescriptGrammarLexer._LITERAL_NAMES = [
    undefined, "'.'", "':'", "'!'", "'::'", "'..'", "'('", "')'", "','", "'+'",
    "'string'", "'number'", "'boolean'", "'Object'", "'<'", "'>'", "'['",
    "']'",
];
TypescriptGrammarLexer._SYMBOLIC_NAMES = [
    undefined, "NSPC", "CLS", "INTRF", "MEMB", "ENM", "OPENPAR", "CLOSEPAR",
    "ARGSEP", "PLUS", "STRING", "NUMBER", "BOOLEAN", "OBJECT", "LESS", "MORETH",
    "OPENBR", "CLOSEBR", "ID",
];
TypescriptGrammarLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TypescriptGrammarLexer._LITERAL_NAMES, TypescriptGrammarLexer._SYMBOLIC_NAMES, []);
TypescriptGrammarLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14g\b\x01\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
    "\x04\x13\t\x13\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
    "\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03" +
    "\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
    "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
    "\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F" +
    "\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
    "\x07\x13c\n\x13\f\x13\x0E\x13f\v\x13\x02\x02\x02\x14\x03\x02\x03\x05\x02" +
    "\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
    "\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11" +
    "!\x02\x12#\x02\x13%\x02\x14\x03\x02\x04\x05\x02C\\aac|\x06\x022;C\\aa" +
    "c|\x02g\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02" +
    "\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02" +
    "\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02" +
    "\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02" +
    "\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02" +
    "\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x03" +
    "\'\x03\x02\x02\x02\x05)\x03\x02\x02\x02\x07+\x03\x02\x02\x02\t-\x03\x02" +
    "\x02\x02\v0\x03\x02\x02\x02\r3\x03\x02\x02\x02\x0F5\x03\x02\x02\x02\x11" +
    "7\x03\x02\x02\x02\x139\x03\x02\x02\x02\x15;\x03\x02\x02\x02\x17B\x03\x02" +
    "\x02\x02\x19I\x03\x02\x02\x02\x1BQ\x03\x02\x02\x02\x1DX\x03\x02\x02\x02" +
    "\x1FZ\x03\x02\x02\x02!\\\x03\x02\x02\x02#^\x03\x02\x02\x02%`\x03\x02\x02" +
    "\x02\'(\x070\x02\x02(\x04\x03\x02\x02\x02)*\x07<\x02\x02*\x06\x03\x02" +
    "\x02\x02+,\x07#\x02\x02,\b\x03\x02\x02\x02-.\x07<\x02\x02./\x07<\x02\x02" +
    "/\n\x03\x02\x02\x0201\x070\x02\x0212\x070\x02\x022\f\x03\x02\x02\x023" +
    "4\x07*\x02\x024\x0E\x03\x02\x02\x0256\x07+\x02\x026\x10\x03\x02\x02\x02" +
    "78\x07.\x02\x028\x12\x03\x02\x02\x029:\x07-\x02\x02:\x14\x03\x02\x02\x02" +
    ";<\x07u\x02\x02<=\x07v\x02\x02=>\x07t\x02\x02>?\x07k\x02\x02?@\x07p\x02" +
    "\x02@A\x07i\x02\x02A\x16\x03\x02\x02\x02BC\x07p\x02\x02CD\x07w\x02\x02" +
    "DE\x07o\x02\x02EF\x07d\x02\x02FG\x07g\x02\x02GH\x07t\x02\x02H\x18\x03" +
    "\x02\x02\x02IJ\x07d\x02\x02JK\x07q\x02\x02KL\x07q\x02\x02LM\x07n\x02\x02" +
    "MN\x07g\x02\x02NO\x07c\x02\x02OP\x07p\x02\x02P\x1A\x03\x02\x02\x02QR\x07" +
    "Q\x02\x02RS\x07d\x02\x02ST\x07l\x02\x02TU\x07g\x02\x02UV\x07e\x02\x02" +
    "VW\x07v\x02\x02W\x1C\x03\x02\x02\x02XY\x07>\x02\x02Y\x1E\x03\x02\x02\x02" +
    "Z[\x07@\x02\x02[ \x03\x02\x02\x02\\]\x07]\x02\x02]\"\x03\x02\x02\x02^" +
    "_\x07_\x02\x02_$\x03\x02\x02\x02`d\t\x02\x02\x02ac\t\x03\x02\x02ba\x03" +
    "\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02e&\x03" +
    "\x02\x02\x02fd\x03\x02\x02\x02\x04\x02d\x02";
exports.TypescriptGrammarLexer = TypescriptGrammarLexer;
