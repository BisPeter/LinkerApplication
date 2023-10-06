// Generated from TypescriptGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class TypescriptGrammarLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"NSPC", "CLS", "INTRF", "MEMB", "ENM", "OPENPAR", "CLOSEPAR", "ARGSEP", 
		"PLUS", "STRING", "NUMBER", "BOOLEAN", "OBJECT", "LESS", "MORETH", "OPENBR", 
		"CLOSEBR", "ID",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TypescriptGrammarLexer._LITERAL_NAMES, TypescriptGrammarLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TypescriptGrammarLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(TypescriptGrammarLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "TypescriptGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return TypescriptGrammarLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return TypescriptGrammarLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return TypescriptGrammarLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return TypescriptGrammarLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14g\b\x01\x04" +
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
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TypescriptGrammarLexer.__ATN) {
			TypescriptGrammarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TypescriptGrammarLexer._serializedATN));
		}

		return TypescriptGrammarLexer.__ATN;
	}

}

