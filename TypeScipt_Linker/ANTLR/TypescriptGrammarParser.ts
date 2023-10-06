// Generated from TypescriptGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TypescriptGrammarListener } from "./TypescriptGrammarListener";
import { TypescriptGrammarVisitor } from "./TypescriptGrammarVisitor";


export class TypescriptGrammarParser extends Parser {
	public static readonly NSPC = 1;
	public static readonly CLS = 2;
	public static readonly INTRF = 3;
	public static readonly MEMB = 4;
	public static readonly ENM = 5;
	public static readonly OPENPAR = 6;
	public static readonly CLOSEPAR = 7;
	public static readonly ARGSEP = 8;
	public static readonly PLUS = 9;
	public static readonly STRING = 10;
	public static readonly NUMBER = 11;
	public static readonly BOOLEAN = 12;
	public static readonly OBJECT = 13;
	public static readonly LESS = 14;
	public static readonly MORETH = 15;
	public static readonly OPENBR = 16;
	public static readonly CLOSEBR = 17;
	public static readonly ID = 18;
	public static readonly RULE_start = 0;
	public static readonly RULE_nnamespace = 1;
	public static readonly RULE_typobjekt = 2;
	public static readonly RULE_cclass = 3;
	public static readonly RULE_iinterface = 4;
	public static readonly RULE_eenum = 5;
	public static readonly RULE_member = 6;
	public static readonly RULE_property = 7;
	public static readonly RULE_method = 8;
	public static readonly RULE_arguments = 9;
	public static readonly RULE_argument = 10;
	public static readonly RULE_type = 11;
	public static readonly RULE_array_type = 12;
	public static readonly RULE_generic_type = 13;
	public static readonly RULE_primitive_type = 14;
	public static readonly RULE_class_type = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "nnamespace", "typobjekt", "cclass", "iinterface", "eenum", "member", 
		"property", "method", "arguments", "argument", "type", "array_type", "generic_type", 
		"primitive_type", "class_type",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "':'", "'!'", "'::'", "'..'", "'('", "')'", "','", "'+'", 
		"'string'", "'number'", "'boolean'", "'Object'", "'<'", "'>'", "'['", 
		"']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NSPC", "CLS", "INTRF", "MEMB", "ENM", "OPENPAR", "CLOSEPAR", 
		"ARGSEP", "PLUS", "STRING", "NUMBER", "BOOLEAN", "OBJECT", "LESS", "MORETH", 
		"OPENBR", "CLOSEBR", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TypescriptGrammarParser._LITERAL_NAMES, TypescriptGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TypescriptGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TypescriptGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return TypescriptGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TypescriptGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TypescriptGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
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
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nnamespace(): NnamespaceContext {
		let _localctx: NnamespaceContext = new NnamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TypescriptGrammarParser.RULE_nnamespace);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.match(TypescriptGrammarParser.ID);
			this.state = 49;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
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
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
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
						throw new NoViableAltException(this);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typobjekt(): TypobjektContext {
		let _localctx: TypobjektContext = new TypobjektContext(this._ctx, this.state);
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
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cclass(): CclassContext {
		let _localctx: CclassContext = new CclassContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TypescriptGrammarParser.RULE_cclass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(TypescriptGrammarParser.ID);
			this.state = 71;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iinterface(): IinterfaceContext {
		let _localctx: IinterfaceContext = new IinterfaceContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eenum(): EenumContext {
		let _localctx: EenumContext = new EenumContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TypescriptGrammarParser.RULE_eenum);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(TypescriptGrammarParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TypescriptGrammarParser.RULE_member);
		try {
			this.state = 81;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TypescriptGrammarParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.match(TypescriptGrammarParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public method(): MethodContext {
		let _localctx: MethodContext = new MethodContext(this._ctx, this.state);
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
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TypescriptGrammarParser.RULE_arguments);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TypescriptGrammarParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TypescriptGrammarParser.RULE_type);
		try {
			this.state = 106;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_type(): Array_typeContext {
		let _localctx: Array_typeContext = new Array_typeContext(this._ctx, this.state);
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
				throw new NoViableAltException(this);
			}
			this.state = 112;
			this.match(TypescriptGrammarParser.OPENBR);
			this.state = 113;
			this.match(TypescriptGrammarParser.CLOSEBR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generic_type(): Generic_typeContext {
		let _localctx: Generic_typeContext = new Generic_typeContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitive_type(): Primitive_typeContext {
		let _localctx: Primitive_typeContext = new Primitive_typeContext(this._ctx, this.state);
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
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public class_type(): Class_typeContext {
		let _localctx: Class_typeContext = new Class_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TypescriptGrammarParser.RULE_class_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(TypescriptGrammarParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14\x84\x04\x02" +
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
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TypescriptGrammarParser.__ATN) {
			TypescriptGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TypescriptGrammarParser._serializedATN));
		}

		return TypescriptGrammarParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public NSPC(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.NSPC, 0); }
	public nnamespace(): NnamespaceContext | undefined {
		return this.tryGetRuleContext(0, NnamespaceContext);
	}
	public CLS(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.CLS, 0); }
	public cclass(): CclassContext | undefined {
		return this.tryGetRuleContext(0, CclassContext);
	}
	public INTRF(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.INTRF, 0); }
	public iinterface(): IinterfaceContext | undefined {
		return this.tryGetRuleContext(0, IinterfaceContext);
	}
	public ENM(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.ENM, 0); }
	public eenum(): EenumContext | undefined {
		return this.tryGetRuleContext(0, EenumContext);
	}
	public MEMB(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.MEMB, 0); }
	public member(): MemberContext | undefined {
		return this.tryGetRuleContext(0, MemberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_start; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NnamespaceContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TypescriptGrammarParser.ID, 0); }
	public NSPC(): TerminalNode[];
	public NSPC(i: number): TerminalNode;
	public NSPC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypescriptGrammarParser.NSPC);
		} else {
			return this.getToken(TypescriptGrammarParser.NSPC, i);
		}
	}
	public nnamespace(): NnamespaceContext[];
	public nnamespace(i: number): NnamespaceContext;
	public nnamespace(i?: number): NnamespaceContext | NnamespaceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NnamespaceContext);
		} else {
			return this.getRuleContext(i, NnamespaceContext);
		}
	}
	public typobjekt(): TypobjektContext[];
	public typobjekt(i: number): TypobjektContext;
	public typobjekt(i?: number): TypobjektContext | TypobjektContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypobjektContext);
		} else {
			return this.getRuleContext(i, TypobjektContext);
		}
	}
	public MEMB(): TerminalNode[];
	public MEMB(i: number): TerminalNode;
	public MEMB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypescriptGrammarParser.MEMB);
		} else {
			return this.getToken(TypescriptGrammarParser.MEMB, i);
		}
	}
	public member(): MemberContext[];
	public member(i: number): MemberContext;
	public member(i?: number): MemberContext | MemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberContext);
		} else {
			return this.getRuleContext(i, MemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_nnamespace; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterNnamespace) {
			listener.enterNnamespace(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitNnamespace) {
			listener.exitNnamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitNnamespace) {
			return visitor.visitNnamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypobjektContext extends ParserRuleContext {
	public CLS(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.CLS, 0); }
	public cclass(): CclassContext | undefined {
		return this.tryGetRuleContext(0, CclassContext);
	}
	public INTRF(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.INTRF, 0); }
	public iinterface(): IinterfaceContext | undefined {
		return this.tryGetRuleContext(0, IinterfaceContext);
	}
	public ENM(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.ENM, 0); }
	public eenum(): EenumContext | undefined {
		return this.tryGetRuleContext(0, EenumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_typobjekt; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterTypobjekt) {
			listener.enterTypobjekt(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitTypobjekt) {
			listener.exitTypobjekt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitTypobjekt) {
			return visitor.visitTypobjekt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CclassContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TypescriptGrammarParser.ID, 0); }
	public MEMB(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.MEMB, 0); }
	public member(): MemberContext | undefined {
		return this.tryGetRuleContext(0, MemberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_cclass; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterCclass) {
			listener.enterCclass(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitCclass) {
			listener.exitCclass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitCclass) {
			return visitor.visitCclass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IinterfaceContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TypescriptGrammarParser.ID, 0); }
	public MEMB(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.MEMB, 0); }
	public member(): MemberContext | undefined {
		return this.tryGetRuleContext(0, MemberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_iinterface; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterIinterface) {
			listener.enterIinterface(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitIinterface) {
			listener.exitIinterface(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitIinterface) {
			return visitor.visitIinterface(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EenumContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TypescriptGrammarParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_eenum; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterEenum) {
			listener.enterEenum(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitEenum) {
			listener.exitEenum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitEenum) {
			return visitor.visitEenum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberContext extends ParserRuleContext {
	public method(): MethodContext | undefined {
		return this.tryGetRuleContext(0, MethodContext);
	}
	public property(): PropertyContext | undefined {
		return this.tryGetRuleContext(0, PropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_member; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterMember) {
			listener.enterMember(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitMember) {
			listener.exitMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitMember) {
			return visitor.visitMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TypescriptGrammarParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_property; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TypescriptGrammarParser.ID, 0); }
	public OPENPAR(): TerminalNode { return this.getToken(TypescriptGrammarParser.OPENPAR, 0); }
	public CLOSEPAR(): TerminalNode { return this.getToken(TypescriptGrammarParser.CLOSEPAR, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_method; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterMethod) {
			listener.enterMethod(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitMethod) {
			listener.exitMethod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitMethod) {
			return visitor.visitMethod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public ARGSEP(): TerminalNode[];
	public ARGSEP(i: number): TerminalNode;
	public ARGSEP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TypescriptGrammarParser.ARGSEP);
		} else {
			return this.getToken(TypescriptGrammarParser.ARGSEP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_arguments; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_argument; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public primitive_type(): Primitive_typeContext | undefined {
		return this.tryGetRuleContext(0, Primitive_typeContext);
	}
	public class_type(): Class_typeContext | undefined {
		return this.tryGetRuleContext(0, Class_typeContext);
	}
	public generic_type(): Generic_typeContext | undefined {
		return this.tryGetRuleContext(0, Generic_typeContext);
	}
	public array_type(): Array_typeContext | undefined {
		return this.tryGetRuleContext(0, Array_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_type; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_typeContext extends ParserRuleContext {
	public OPENBR(): TerminalNode { return this.getToken(TypescriptGrammarParser.OPENBR, 0); }
	public CLOSEBR(): TerminalNode { return this.getToken(TypescriptGrammarParser.CLOSEBR, 0); }
	public primitive_type(): Primitive_typeContext | undefined {
		return this.tryGetRuleContext(0, Primitive_typeContext);
	}
	public class_type(): Class_typeContext | undefined {
		return this.tryGetRuleContext(0, Class_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_array_type; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterArray_type) {
			listener.enterArray_type(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitArray_type) {
			listener.exitArray_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitArray_type) {
			return visitor.visitArray_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Generic_typeContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TypescriptGrammarParser.ID, 0); }
	public LESS(): TerminalNode { return this.getToken(TypescriptGrammarParser.LESS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public MORETH(): TerminalNode { return this.getToken(TypescriptGrammarParser.MORETH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_generic_type; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterGeneric_type) {
			listener.enterGeneric_type(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitGeneric_type) {
			listener.exitGeneric_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitGeneric_type) {
			return visitor.visitGeneric_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primitive_typeContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.NUMBER, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.BOOLEAN, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(TypescriptGrammarParser.OBJECT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_primitive_type; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterPrimitive_type) {
			listener.enterPrimitive_type(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitPrimitive_type) {
			listener.exitPrimitive_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitPrimitive_type) {
			return visitor.visitPrimitive_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_typeContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TypescriptGrammarParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TypescriptGrammarParser.RULE_class_type; }
	// @Override
	public enterRule(listener: TypescriptGrammarListener): void {
		if (listener.enterClass_type) {
			listener.enterClass_type(this);
		}
	}
	// @Override
	public exitRule(listener: TypescriptGrammarListener): void {
		if (listener.exitClass_type) {
			listener.exitClass_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptGrammarVisitor<Result>): Result {
		if (visitor.visitClass_type) {
			return visitor.visitClass_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


