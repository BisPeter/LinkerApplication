// Generated from c:\Users\offic\Documents\FH\Master\MasterArbeit\Implementaion_\TypeScipt_Linker\TypescriptGrammar.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TypescriptGrammarLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NSPC=1, CLS=2, INTRF=3, MEMB=4, ENM=5, OPENPAR=6, CLOSEPAR=7, ARGSEP=8, 
		PLUS=9, STRING=10, NUMBER=11, BOOLEAN=12, OBJECT=13, LESS=14, MORETH=15, 
		OPENBR=16, CLOSEBR=17, ID=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"NSPC", "CLS", "INTRF", "MEMB", "ENM", "OPENPAR", "CLOSEPAR", "ARGSEP", 
			"PLUS", "STRING", "NUMBER", "BOOLEAN", "OBJECT", "LESS", "MORETH", "OPENBR", 
			"CLOSEBR", "ID"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'.'", "':'", "'!'", "'::'", "'..'", "'('", "')'", "','", "'+'", 
			"'string'", "'number'", "'boolean'", "'Object'", "'<'", "'>'", "'['", 
			"']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NSPC", "CLS", "INTRF", "MEMB", "ENM", "OPENPAR", "CLOSEPAR", "ARGSEP", 
			"PLUS", "STRING", "NUMBER", "BOOLEAN", "OBJECT", "LESS", "MORETH", "OPENBR", 
			"CLOSEBR", "ID"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public TypescriptGrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "TypescriptGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\24g\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\b"+
		"\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\7\23c\n\23"+
		"\f\23\16\23f\13\23\2\2\24\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25"+
		"\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\3\2\4\5\2C\\aac|\6\2\62;C"+
		"\\aac|\2g\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2"+
		"\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27"+
		"\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2"+
		"\2\2#\3\2\2\2\2%\3\2\2\2\3\'\3\2\2\2\5)\3\2\2\2\7+\3\2\2\2\t-\3\2\2\2"+
		"\13\60\3\2\2\2\r\63\3\2\2\2\17\65\3\2\2\2\21\67\3\2\2\2\239\3\2\2\2\25"+
		";\3\2\2\2\27B\3\2\2\2\31I\3\2\2\2\33Q\3\2\2\2\35X\3\2\2\2\37Z\3\2\2\2"+
		"!\\\3\2\2\2#^\3\2\2\2%`\3\2\2\2\'(\7\60\2\2(\4\3\2\2\2)*\7<\2\2*\6\3\2"+
		"\2\2+,\7#\2\2,\b\3\2\2\2-.\7<\2\2./\7<\2\2/\n\3\2\2\2\60\61\7\60\2\2\61"+
		"\62\7\60\2\2\62\f\3\2\2\2\63\64\7*\2\2\64\16\3\2\2\2\65\66\7+\2\2\66\20"+
		"\3\2\2\2\678\7.\2\28\22\3\2\2\29:\7-\2\2:\24\3\2\2\2;<\7u\2\2<=\7v\2\2"+
		"=>\7t\2\2>?\7k\2\2?@\7p\2\2@A\7i\2\2A\26\3\2\2\2BC\7p\2\2CD\7w\2\2DE\7"+
		"o\2\2EF\7d\2\2FG\7g\2\2GH\7t\2\2H\30\3\2\2\2IJ\7d\2\2JK\7q\2\2KL\7q\2"+
		"\2LM\7n\2\2MN\7g\2\2NO\7c\2\2OP\7p\2\2P\32\3\2\2\2QR\7Q\2\2RS\7d\2\2S"+
		"T\7l\2\2TU\7g\2\2UV\7e\2\2VW\7v\2\2W\34\3\2\2\2XY\7>\2\2Y\36\3\2\2\2Z"+
		"[\7@\2\2[ \3\2\2\2\\]\7]\2\2]\"\3\2\2\2^_\7_\2\2_$\3\2\2\2`d\t\2\2\2a"+
		"c\t\3\2\2ba\3\2\2\2cf\3\2\2\2db\3\2\2\2de\3\2\2\2e&\3\2\2\2fd\3\2\2\2"+
		"\4\2d\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}