"use strict";
// Generated from TypescriptGrammar.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class_typeContext = exports.Primitive_typeContext = exports.Generic_typeContext = exports.Array_typeContext = exports.TypeContext = exports.ArgumentContext = exports.ArgumentsContext = exports.MethodContext = exports.PropertyContext = exports.MemberContext = exports.EenumContext = exports.IinterfaceContext = exports.CclassContext = exports.TypobjektContext = exports.NnamespaceContext = exports.StartContext = exports.TypescriptGrammarParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class TypescriptGrammarParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return TypescriptGrammarParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "TypescriptGrammar.g4"; }
    // @Override
    get ruleNames() { return TypescriptGrammarParser.ruleNames; }
    // @Override
    get serializedATN() { return TypescriptGrammarParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(TypescriptGrammarParser._ATN, this);
    }
    // @RuleVersion(0)
    start() {
        let _localctx = new StartContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, TypescriptGrammarParser.RULE_start);
        try {
            this.state = 42;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypescriptGrammarParser.NSPC:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 32;
                            this.match(TypescriptGrammarParser.NSPC);
                            this.state = 33;
                            this.nnamespace();
                        }
                    }
                    break;
                case TypescriptGrammarParser.CLS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 34;
                            this.match(TypescriptGrammarParser.CLS);
                            this.state = 35;
                            this.cclass();
                        }
                    }
                    break;
                case TypescriptGrammarParser.INTRF:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 36;
                            this.match(TypescriptGrammarParser.INTRF);
                            this.state = 37;
                            this.iinterface();
                        }
                    }
                    break;
                case TypescriptGrammarParser.ENM:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        {
                            this.state = 38;
                            this.match(TypescriptGrammarParser.ENM);
                            this.state = 39;
                            this.eenum();
                        }
                    }
                    break;
                case TypescriptGrammarParser.MEMB:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        {
                            this.state = 40;
                            this.match(TypescriptGrammarParser.MEMB);
                            this.state = 41;
                            this.member();
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    nnamespace() {
        let _localctx = new NnamespaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, TypescriptGrammarParser.RULE_nnamespace);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 44;
                this.match(TypescriptGrammarParser.ID);
                this.state = 49;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 45;
                                this.match(TypescriptGrammarParser.NSPC);
                                this.state = 46;
                                this.nnamespace();
                            }
                        }
                    }
                    this.state = 51;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                }
                this.state = 57;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 55;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case TypescriptGrammarParser.CLS:
                                case TypescriptGrammarParser.INTRF:
                                case TypescriptGrammarParser.ENM:
                                    {
                                        this.state = 52;
                                        this.typobjekt();
                                    }
                                    break;
                                case TypescriptGrammarParser.MEMB:
                                    {
                                        this.state = 53;
                                        this.match(TypescriptGrammarParser.MEMB);
                                        this.state = 54;
                                        this.member();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 59;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typobjekt() {
        let _localctx = new TypobjektContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, TypescriptGrammarParser.RULE_typobjekt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TypescriptGrammarParser.CLS:
                        {
                            this.state = 60;
                            this.match(TypescriptGrammarParser.CLS);
                            this.state = 61;
                            this.cclass();
                        }
                        break;
                    case TypescriptGrammarParser.INTRF:
                        {
                            this.state = 62;
                            this.match(TypescriptGrammarParser.INTRF);
                            this.state = 63;
                            this.iinterface();
                        }
                        break;
                    case TypescriptGrammarParser.ENM:
                        {
                            this.state = 64;
                            this.match(TypescriptGrammarParser.ENM);
                            this.state = 65;
                            this.eenum();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    cclass() {
        let _localctx = new CclassContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, TypescriptGrammarParser.RULE_cclass);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 68;
                this.match(TypescriptGrammarParser.ID);
                this.state = 71;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            this.state = 69;
                            this.match(TypescriptGrammarParser.MEMB);
                            this.state = 70;
                            this.member();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    iinterface() {
        let _localctx = new IinterfaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, TypescriptGrammarParser.RULE_iinterface);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 73;
                this.match(TypescriptGrammarParser.ID);
                {
                    this.state = 74;
                    this.match(TypescriptGrammarParser.MEMB);
                    this.state = 75;
                    this.member();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eenum() {
        let _localctx = new EenumContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, TypescriptGrammarParser.RULE_eenum);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 77;
                this.match(TypescriptGrammarParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    member() {
        let _localctx = new MemberContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, TypescriptGrammarParser.RULE_member);
        try {
            this.state = 81;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 79;
                        this.method();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 80;
                        this.property();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    property() {
        let _localctx = new PropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, TypescriptGrammarParser.RULE_property);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 83;
                this.match(TypescriptGrammarParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    method() {
        let _localctx = new MethodContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, TypescriptGrammarParser.RULE_method);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 85;
                this.match(TypescriptGrammarParser.ID);
                this.state = 86;
                this.match(TypescriptGrammarParser.OPENPAR);
                this.state = 88;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                    case 1:
                        {
                            this.state = 87;
                            this.arguments();
                        }
                        break;
                }
                this.state = 90;
                this.match(TypescriptGrammarParser.CLOSEPAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arguments() {
        let _localctx = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, TypescriptGrammarParser.RULE_arguments);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 92;
                this.argument();
                this.state = 97;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TypescriptGrammarParser.ARGSEP) {
                    {
                        {
                            this.state = 93;
                            this.match(TypescriptGrammarParser.ARGSEP);
                            this.state = 94;
                            this.argument();
                        }
                    }
                    this.state = 99;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    argument() {
        let _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, TypescriptGrammarParser.RULE_argument);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                this.type();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    type() {
        let _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, TypescriptGrammarParser.RULE_type);
        try {
            this.state = 106;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 102;
                        this.primitive_type();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 103;
                        this.class_type();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 104;
                        this.generic_type();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 105;
                        this.array_type();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    array_type() {
        let _localctx = new Array_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, TypescriptGrammarParser.RULE_array_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 110;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TypescriptGrammarParser.CLOSEPAR:
                    case TypescriptGrammarParser.ARGSEP:
                    case TypescriptGrammarParser.STRING:
                    case TypescriptGrammarParser.NUMBER:
                    case TypescriptGrammarParser.BOOLEAN:
                    case TypescriptGrammarParser.OBJECT:
                    case TypescriptGrammarParser.MORETH:
                    case TypescriptGrammarParser.OPENBR:
                        {
                            this.state = 108;
                            this.primitive_type();
                        }
                        break;
                    case TypescriptGrammarParser.ID:
                        {
                            this.state = 109;
                            this.class_type();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 112;
                this.match(TypescriptGrammarParser.OPENBR);
                this.state = 113;
                this.match(TypescriptGrammarParser.CLOSEBR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    generic_type() {
        let _localctx = new Generic_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, TypescriptGrammarParser.RULE_generic_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 115;
                this.match(TypescriptGrammarParser.ID);
                this.state = 116;
                this.match(TypescriptGrammarParser.LESS);
                this.state = 117;
                this.type();
                this.state = 118;
                this.match(TypescriptGrammarParser.MORETH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    primitive_type() {
        let _localctx = new Primitive_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, TypescriptGrammarParser.RULE_primitive_type);
        try {
            this.state = 125;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TypescriptGrammarParser.CLOSEPAR:
                case TypescriptGrammarParser.ARGSEP:
                case TypescriptGrammarParser.MORETH:
                case TypescriptGrammarParser.OPENBR:
                    this.enterOuterAlt(_localctx, 1);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case TypescriptGrammarParser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 121;
                        this.match(TypescriptGrammarParser.STRING);
                    }
                    break;
                case TypescriptGrammarParser.NUMBER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 122;
                        this.match(TypescriptGrammarParser.NUMBER);
                    }
                    break;
                case TypescriptGrammarParser.BOOLEAN:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 123;
                        this.match(TypescriptGrammarParser.BOOLEAN);
                    }
                    break;
                case TypescriptGrammarParser.OBJECT:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 124;
                        this.match(TypescriptGrammarParser.OBJECT);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    class_type() {
        let _localctx = new Class_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, TypescriptGrammarParser.RULE_class_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 127;
                this.match(TypescriptGrammarParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!TypescriptGrammarParser.__ATN) {
            TypescriptGrammarParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TypescriptGrammarParser._serializedATN));
        }
        return TypescriptGrammarParser.__ATN;
    }
}
TypescriptGrammarParser.NSPC = 1;
TypescriptGrammarParser.CLS = 2;
TypescriptGrammarParser.INTRF = 3;
TypescriptGrammarParser.MEMB = 4;
TypescriptGrammarParser.ENM = 5;
TypescriptGrammarParser.OPENPAR = 6;
TypescriptGrammarParser.CLOSEPAR = 7;
TypescriptGrammarParser.ARGSEP = 8;
TypescriptGrammarParser.PLUS = 9;
TypescriptGrammarParser.STRING = 10;
TypescriptGrammarParser.NUMBER = 11;
TypescriptGrammarParser.BOOLEAN = 12;
TypescriptGrammarParser.OBJECT = 13;
TypescriptGrammarParser.LESS = 14;
TypescriptGrammarParser.MORETH = 15;
TypescriptGrammarParser.OPENBR = 16;
TypescriptGrammarParser.CLOSEBR = 17;
TypescriptGrammarParser.ID = 18;
TypescriptGrammarParser.RULE_start = 0;
TypescriptGrammarParser.RULE_nnamespace = 1;
TypescriptGrammarParser.RULE_typobjekt = 2;
TypescriptGrammarParser.RULE_cclass = 3;
TypescriptGrammarParser.RULE_iinterface = 4;
TypescriptGrammarParser.RULE_eenum = 5;
TypescriptGrammarParser.RULE_member = 6;
TypescriptGrammarParser.RULE_property = 7;
TypescriptGrammarParser.RULE_method = 8;
TypescriptGrammarParser.RULE_arguments = 9;
TypescriptGrammarParser.RULE_argument = 10;
TypescriptGrammarParser.RULE_type = 11;
TypescriptGrammarParser.RULE_array_type = 12;
TypescriptGrammarParser.RULE_generic_type = 13;
TypescriptGrammarParser.RULE_primitive_type = 14;
TypescriptGrammarParser.RULE_class_type = 15;
// tslint:disable:no-trailing-whitespace
TypescriptGrammarParser.ruleNames = [
    "start", "nnamespace", "typobjekt", "cclass", "iinterface", "eenum", "member",
    "property", "method", "arguments", "argument", "type", "array_type", "generic_type",
    "primitive_type", "class_type",
];
TypescriptGrammarParser._LITERAL_NAMES = [
    undefined, "'.'", "':'", "'!'", "'::'", "'..'", "'('", "')'", "','", "'+'",
    "'string'", "'number'", "'boolean'", "'Object'", "'<'", "'>'", "'['",
    "']'",
];
TypescriptGrammarParser._SYMBOLIC_NAMES = [
    undefined, "NSPC", "CLS", "INTRF", "MEMB", "ENM", "OPENPAR", "CLOSEPAR",
    "ARGSEP", "PLUS", "STRING", "NUMBER", "BOOLEAN", "OBJECT", "LESS", "MORETH",
    "OPENBR", "CLOSEBR", "ID",
];
TypescriptGrammarParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TypescriptGrammarParser._LITERAL_NAMES, TypescriptGrammarParser._SYMBOLIC_NAMES, []);
TypescriptGrammarParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14\x84\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x03" +
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02-" +
    "\n\x02\x03\x03\x03\x03\x03\x03\x07\x032\n\x03\f\x03\x0E\x035\v\x03\x03" +
    "\x03\x03\x03\x03\x03\x07\x03:\n\x03\f\x03\x0E\x03=\v\x03\x03\x04\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04E\n\x04\x03\x05\x03\x05\x03\x05" +
    "\x05\x05J\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b" +
    "\x03\b\x05\bT\n\b\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n[\n\n\x03\n\x03\n" +
    "\x03\v\x03\v\x03\v\x07\vb\n\v\f\v\x0E\ve\v\v\x03\f\x03\f\x03\r\x03\r\x03" +
    "\r\x03\r\x05\rm\n\r\x03\x0E\x03\x0E\x05\x0Eq\n\x0E\x03\x0E\x03\x0E\x03" +
    "\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
    "\x10\x03\x10\x05\x10\x80\n\x10\x03\x11\x03\x11\x03\x11\x02\x02\x02\x12" +
    "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
    "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x02\x02\x88\x02" +
    ",\x03\x02\x02\x02\x04.\x03\x02\x02\x02\x06D\x03\x02\x02\x02\bF\x03\x02" +
    "\x02\x02\nK\x03\x02\x02\x02\fO\x03\x02\x02\x02\x0ES\x03\x02\x02\x02\x10" +
    "U\x03\x02\x02\x02\x12W\x03\x02\x02\x02\x14^\x03\x02\x02\x02\x16f\x03\x02" +
    "\x02\x02\x18l\x03\x02\x02\x02\x1Ap\x03\x02\x02\x02\x1Cu\x03\x02\x02\x02" +
    "\x1E\x7F\x03\x02\x02\x02 \x81\x03\x02\x02\x02\"#\x07\x03\x02\x02#-\x05" +
    "\x04\x03\x02$%\x07\x04\x02\x02%-\x05\b\x05\x02&\'\x07\x05\x02\x02\'-\x05" +
    "\n\x06\x02()\x07\x07\x02\x02)-\x05\f\x07\x02*+\x07\x06\x02\x02+-\x05\x0E" +
    "\b\x02,\"\x03\x02\x02\x02,$\x03\x02\x02\x02,&\x03\x02\x02\x02,(\x03\x02" +
    "\x02\x02,*\x03\x02\x02\x02-\x03\x03\x02\x02\x02.3\x07\x14\x02\x02/0\x07" +
    "\x03\x02\x0202\x05\x04\x03\x021/\x03\x02\x02\x0225\x03\x02\x02\x0231\x03" +
    "\x02\x02\x0234\x03\x02\x02\x024;\x03\x02\x02\x0253\x03\x02\x02\x026:\x05" +
    "\x06\x04\x0278\x07\x06\x02\x028:\x05\x0E\b\x0296\x03\x02\x02\x0297\x03" +
    "\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<\x05" +
    "\x03\x02\x02\x02=;\x03\x02\x02\x02>?\x07\x04\x02\x02?E\x05\b\x05\x02@" +
    "A\x07\x05\x02\x02AE\x05\n\x06\x02BC\x07\x07\x02\x02CE\x05\f\x07\x02D>" +
    "\x03\x02\x02\x02D@\x03\x02\x02\x02DB\x03\x02\x02\x02E\x07\x03\x02\x02" +
    "\x02FI\x07\x14\x02\x02GH\x07\x06\x02\x02HJ\x05\x0E\b\x02IG\x03\x02\x02" +
    "\x02IJ\x03\x02\x02\x02J\t\x03\x02\x02\x02KL\x07\x14\x02\x02LM\x07\x06" +
    "\x02\x02MN\x05\x0E\b\x02N\v\x03\x02\x02\x02OP\x07\x14\x02\x02P\r\x03\x02" +
    "\x02\x02QT\x05\x12\n\x02RT\x05\x10\t\x02SQ\x03\x02\x02\x02SR\x03\x02\x02" +
    "\x02T\x0F\x03\x02\x02\x02UV\x07\x14\x02\x02V\x11\x03\x02\x02\x02WX\x07" +
    "\x14\x02\x02XZ\x07\b\x02\x02Y[\x05\x14\v\x02ZY\x03\x02\x02\x02Z[\x03\x02" +
    "\x02\x02[\\\x03\x02\x02\x02\\]\x07\t\x02\x02]\x13\x03\x02\x02\x02^c\x05" +
    "\x16\f\x02_`\x07\n\x02\x02`b\x05\x16\f\x02a_\x03\x02\x02\x02be\x03\x02" +
    "\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02d\x15\x03\x02\x02\x02ec\x03" +
    "\x02\x02\x02fg\x05\x18\r\x02g\x17\x03\x02\x02\x02hm\x05\x1E\x10\x02im" +
    "\x05 \x11\x02jm\x05\x1C\x0F\x02km\x05\x1A\x0E\x02lh\x03\x02\x02\x02li" +
    "\x03\x02\x02\x02lj\x03\x02\x02\x02lk\x03\x02\x02\x02m\x19\x03\x02\x02" +
    "\x02nq\x05\x1E\x10\x02oq\x05 \x11\x02pn\x03\x02\x02\x02po\x03\x02\x02" +
    "\x02qr\x03\x02\x02\x02rs\x07\x12\x02\x02st\x07\x13\x02\x02t\x1B\x03\x02" +
    "\x02\x02uv\x07\x14\x02\x02vw\x07\x10\x02\x02wx\x05\x18\r\x02xy\x07\x11" +
    "\x02\x02y\x1D\x03\x02\x02\x02z\x80\x03\x02\x02\x02{\x80\x07\f\x02\x02" +
    "|\x80\x07\r\x02\x02}\x80\x07\x0E\x02\x02~\x80\x07\x0F\x02\x02\x7Fz\x03" +
    "\x02\x02\x02\x7F{\x03\x02\x02\x02\x7F|\x03\x02\x02\x02\x7F}\x03\x02\x02" +
    "\x02\x7F~\x03\x02\x02\x02\x80\x1F\x03\x02\x02\x02\x81\x82\x07\x14\x02" +
    "\x02\x82!\x03\x02\x02\x02\x0E,39;DISZclp\x7F";
exports.TypescriptGrammarParser = TypescriptGrammarParser;
class StartContext extends ParserRuleContext_1.ParserRuleContext {
    NSPC() { return this.tryGetToken(TypescriptGrammarParser.NSPC, 0); }
    nnamespace() {
        return this.tryGetRuleContext(0, NnamespaceContext);
    }
    CLS() { return this.tryGetToken(TypescriptGrammarParser.CLS, 0); }
    cclass() {
        return this.tryGetRuleContext(0, CclassContext);
    }
    INTRF() { return this.tryGetToken(TypescriptGrammarParser.INTRF, 0); }
    iinterface() {
        return this.tryGetRuleContext(0, IinterfaceContext);
    }
    ENM() { return this.tryGetToken(TypescriptGrammarParser.ENM, 0); }
    eenum() {
        return this.tryGetRuleContext(0, EenumContext);
    }
    MEMB() { return this.tryGetToken(TypescriptGrammarParser.MEMB, 0); }
    member() {
        return this.tryGetRuleContext(0, MemberContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_start; }
    // @Override
    enterRule(listener) {
        if (listener.enterStart) {
            listener.enterStart(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStart) {
            listener.exitStart(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStart) {
            return visitor.visitStart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StartContext = StartContext;
class NnamespaceContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(TypescriptGrammarParser.ID, 0); }
    NSPC(i) {
        if (i === undefined) {
            return this.getTokens(TypescriptGrammarParser.NSPC);
        }
        else {
            return this.getToken(TypescriptGrammarParser.NSPC, i);
        }
    }
    nnamespace(i) {
        if (i === undefined) {
            return this.getRuleContexts(NnamespaceContext);
        }
        else {
            return this.getRuleContext(i, NnamespaceContext);
        }
    }
    typobjekt(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypobjektContext);
        }
        else {
            return this.getRuleContext(i, TypobjektContext);
        }
    }
    MEMB(i) {
        if (i === undefined) {
            return this.getTokens(TypescriptGrammarParser.MEMB);
        }
        else {
            return this.getToken(TypescriptGrammarParser.MEMB, i);
        }
    }
    member(i) {
        if (i === undefined) {
            return this.getRuleContexts(MemberContext);
        }
        else {
            return this.getRuleContext(i, MemberContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_nnamespace; }
    // @Override
    enterRule(listener) {
        if (listener.enterNnamespace) {
            listener.enterNnamespace(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNnamespace) {
            listener.exitNnamespace(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNnamespace) {
            return visitor.visitNnamespace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NnamespaceContext = NnamespaceContext;
class TypobjektContext extends ParserRuleContext_1.ParserRuleContext {
    CLS() { return this.tryGetToken(TypescriptGrammarParser.CLS, 0); }
    cclass() {
        return this.tryGetRuleContext(0, CclassContext);
    }
    INTRF() { return this.tryGetToken(TypescriptGrammarParser.INTRF, 0); }
    iinterface() {
        return this.tryGetRuleContext(0, IinterfaceContext);
    }
    ENM() { return this.tryGetToken(TypescriptGrammarParser.ENM, 0); }
    eenum() {
        return this.tryGetRuleContext(0, EenumContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_typobjekt; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypobjekt) {
            listener.enterTypobjekt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypobjekt) {
            listener.exitTypobjekt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypobjekt) {
            return visitor.visitTypobjekt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypobjektContext = TypobjektContext;
class CclassContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(TypescriptGrammarParser.ID, 0); }
    MEMB() { return this.tryGetToken(TypescriptGrammarParser.MEMB, 0); }
    member() {
        return this.tryGetRuleContext(0, MemberContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_cclass; }
    // @Override
    enterRule(listener) {
        if (listener.enterCclass) {
            listener.enterCclass(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCclass) {
            listener.exitCclass(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCclass) {
            return visitor.visitCclass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CclassContext = CclassContext;
class IinterfaceContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(TypescriptGrammarParser.ID, 0); }
    MEMB() { return this.tryGetToken(TypescriptGrammarParser.MEMB, 0); }
    member() {
        return this.tryGetRuleContext(0, MemberContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_iinterface; }
    // @Override
    enterRule(listener) {
        if (listener.enterIinterface) {
            listener.enterIinterface(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIinterface) {
            listener.exitIinterface(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIinterface) {
            return visitor.visitIinterface(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IinterfaceContext = IinterfaceContext;
class EenumContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(TypescriptGrammarParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_eenum; }
    // @Override
    enterRule(listener) {
        if (listener.enterEenum) {
            listener.enterEenum(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEenum) {
            listener.exitEenum(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEenum) {
            return visitor.visitEenum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EenumContext = EenumContext;
class MemberContext extends ParserRuleContext_1.ParserRuleContext {
    method() {
        return this.tryGetRuleContext(0, MethodContext);
    }
    property() {
        return this.tryGetRuleContext(0, PropertyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_member; }
    // @Override
    enterRule(listener) {
        if (listener.enterMember) {
            listener.enterMember(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMember) {
            listener.exitMember(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMember) {
            return visitor.visitMember(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MemberContext = MemberContext;
class PropertyContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(TypescriptGrammarParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_property; }
    // @Override
    enterRule(listener) {
        if (listener.enterProperty) {
            listener.enterProperty(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProperty) {
            listener.exitProperty(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PropertyContext = PropertyContext;
class MethodContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(TypescriptGrammarParser.ID, 0); }
    OPENPAR() { return this.getToken(TypescriptGrammarParser.OPENPAR, 0); }
    CLOSEPAR() { return this.getToken(TypescriptGrammarParser.CLOSEPAR, 0); }
    arguments() {
        return this.tryGetRuleContext(0, ArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_method; }
    // @Override
    enterRule(listener) {
        if (listener.enterMethod) {
            listener.enterMethod(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMethod) {
            listener.exitMethod(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMethod) {
            return visitor.visitMethod(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MethodContext = MethodContext;
class ArgumentsContext extends ParserRuleContext_1.ParserRuleContext {
    argument(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }
        else {
            return this.getRuleContext(i, ArgumentContext);
        }
    }
    ARGSEP(i) {
        if (i === undefined) {
            return this.getTokens(TypescriptGrammarParser.ARGSEP);
        }
        else {
            return this.getToken(TypescriptGrammarParser.ARGSEP, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_arguments; }
    // @Override
    enterRule(listener) {
        if (listener.enterArguments) {
            listener.enterArguments(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArguments) {
            listener.exitArguments(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArgumentsContext = ArgumentsContext;
class ArgumentContext extends ParserRuleContext_1.ParserRuleContext {
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_argument; }
    // @Override
    enterRule(listener) {
        if (listener.enterArgument) {
            listener.enterArgument(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArgument) {
            listener.exitArgument(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArgument) {
            return visitor.visitArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArgumentContext = ArgumentContext;
class TypeContext extends ParserRuleContext_1.ParserRuleContext {
    primitive_type() {
        return this.tryGetRuleContext(0, Primitive_typeContext);
    }
    class_type() {
        return this.tryGetRuleContext(0, Class_typeContext);
    }
    generic_type() {
        return this.tryGetRuleContext(0, Generic_typeContext);
    }
    array_type() {
        return this.tryGetRuleContext(0, Array_typeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitType) {
            return visitor.visitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeContext = TypeContext;
class Array_typeContext extends ParserRuleContext_1.ParserRuleContext {
    OPENBR() { return this.getToken(TypescriptGrammarParser.OPENBR, 0); }
    CLOSEBR() { return this.getToken(TypescriptGrammarParser.CLOSEBR, 0); }
    primitive_type() {
        return this.tryGetRuleContext(0, Primitive_typeContext);
    }
    class_type() {
        return this.tryGetRuleContext(0, Class_typeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_array_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterArray_type) {
            listener.enterArray_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArray_type) {
            listener.exitArray_type(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArray_type) {
            return visitor.visitArray_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Array_typeContext = Array_typeContext;
class Generic_typeContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(TypescriptGrammarParser.ID, 0); }
    LESS() { return this.getToken(TypescriptGrammarParser.LESS, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    MORETH() { return this.getToken(TypescriptGrammarParser.MORETH, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_generic_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterGeneric_type) {
            listener.enterGeneric_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGeneric_type) {
            listener.exitGeneric_type(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGeneric_type) {
            return visitor.visitGeneric_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Generic_typeContext = Generic_typeContext;
class Primitive_typeContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.tryGetToken(TypescriptGrammarParser.STRING, 0); }
    NUMBER() { return this.tryGetToken(TypescriptGrammarParser.NUMBER, 0); }
    BOOLEAN() { return this.tryGetToken(TypescriptGrammarParser.BOOLEAN, 0); }
    OBJECT() { return this.tryGetToken(TypescriptGrammarParser.OBJECT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_primitive_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterPrimitive_type) {
            listener.enterPrimitive_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrimitive_type) {
            listener.exitPrimitive_type(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrimitive_type) {
            return visitor.visitPrimitive_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Primitive_typeContext = Primitive_typeContext;
class Class_typeContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(TypescriptGrammarParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TypescriptGrammarParser.RULE_class_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterClass_type) {
            listener.enterClass_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClass_type) {
            listener.exitClass_type(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClass_type) {
            return visitor.visitClass_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Class_typeContext = Class_typeContext;
