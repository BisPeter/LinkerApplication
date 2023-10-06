// Generated from c:\Users\offic\Documents\FH\Master\MasterArbeit\Implementaion_\TypeScipt_Linker\TypescriptGrammar.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TypescriptGrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NSPC=1, CLS=2, INTRF=3, MEMB=4, ENM=5, OPENPAR=6, CLOSEPAR=7, ARGSEP=8, 
		PLUS=9, STRING=10, NUMBER=11, BOOLEAN=12, OBJECT=13, LESS=14, MORETH=15, 
		OPENBR=16, CLOSEBR=17, ID=18;
	public static final int
		RULE_start = 0, RULE_nnamespace = 1, RULE_typobjekt = 2, RULE_cclass = 3, 
		RULE_iinterface = 4, RULE_eenum = 5, RULE_member = 6, RULE_property = 7, 
		RULE_method = 8, RULE_arguments = 9, RULE_argument = 10, RULE_type = 11, 
		RULE_array_type = 12, RULE_generic_type = 13, RULE_primitive_type = 14, 
		RULE_class_type = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "nnamespace", "typobjekt", "cclass", "iinterface", "eenum", 
			"member", "property", "method", "arguments", "argument", "type", "array_type", 
			"generic_type", "primitive_type", "class_type"
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

	@Override
	public String getGrammarFileName() { return "TypescriptGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TypescriptGrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class StartContext extends ParserRuleContext {
		public TerminalNode NSPC() { return getToken(TypescriptGrammarParser.NSPC, 0); }
		public NnamespaceContext nnamespace() {
			return getRuleContext(NnamespaceContext.class,0);
		}
		public TerminalNode CLS() { return getToken(TypescriptGrammarParser.CLS, 0); }
		public CclassContext cclass() {
			return getRuleContext(CclassContext.class,0);
		}
		public TerminalNode INTRF() { return getToken(TypescriptGrammarParser.INTRF, 0); }
		public IinterfaceContext iinterface() {
			return getRuleContext(IinterfaceContext.class,0);
		}
		public TerminalNode ENM() { return getToken(TypescriptGrammarParser.ENM, 0); }
		public EenumContext eenum() {
			return getRuleContext(EenumContext.class,0);
		}
		public TerminalNode MEMB() { return getToken(TypescriptGrammarParser.MEMB, 0); }
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		try {
			setState(42);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NSPC:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(32);
				match(NSPC);
				setState(33);
				nnamespace();
				}
				}
				break;
			case CLS:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(34);
				match(CLS);
				setState(35);
				cclass();
				}
				}
				break;
			case INTRF:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(36);
				match(INTRF);
				setState(37);
				iinterface();
				}
				}
				break;
			case ENM:
				enterOuterAlt(_localctx, 4);
				{
				{
				setState(38);
				match(ENM);
				setState(39);
				eenum();
				}
				}
				break;
			case MEMB:
				enterOuterAlt(_localctx, 5);
				{
				{
				setState(40);
				match(MEMB);
				setState(41);
				member();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NnamespaceContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TypescriptGrammarParser.ID, 0); }
		public List<TerminalNode> NSPC() { return getTokens(TypescriptGrammarParser.NSPC); }
		public TerminalNode NSPC(int i) {
			return getToken(TypescriptGrammarParser.NSPC, i);
		}
		public List<NnamespaceContext> nnamespace() {
			return getRuleContexts(NnamespaceContext.class);
		}
		public NnamespaceContext nnamespace(int i) {
			return getRuleContext(NnamespaceContext.class,i);
		}
		public List<TypobjektContext> typobjekt() {
			return getRuleContexts(TypobjektContext.class);
		}
		public TypobjektContext typobjekt(int i) {
			return getRuleContext(TypobjektContext.class,i);
		}
		public List<TerminalNode> MEMB() { return getTokens(TypescriptGrammarParser.MEMB); }
		public TerminalNode MEMB(int i) {
			return getToken(TypescriptGrammarParser.MEMB, i);
		}
		public List<MemberContext> member() {
			return getRuleContexts(MemberContext.class);
		}
		public MemberContext member(int i) {
			return getRuleContext(MemberContext.class,i);
		}
		public NnamespaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nnamespace; }
	}

	public final NnamespaceContext nnamespace() throws RecognitionException {
		NnamespaceContext _localctx = new NnamespaceContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_nnamespace);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			match(ID);
			setState(49);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(45);
					match(NSPC);
					setState(46);
					nnamespace();
					}
					} 
				}
				setState(51);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			}
			setState(57);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(55);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case CLS:
					case INTRF:
					case ENM:
						{
						setState(52);
						typobjekt();
						}
						break;
					case MEMB:
						{
						setState(53);
						match(MEMB);
						setState(54);
						member();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(59);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypobjektContext extends ParserRuleContext {
		public TerminalNode CLS() { return getToken(TypescriptGrammarParser.CLS, 0); }
		public CclassContext cclass() {
			return getRuleContext(CclassContext.class,0);
		}
		public TerminalNode INTRF() { return getToken(TypescriptGrammarParser.INTRF, 0); }
		public IinterfaceContext iinterface() {
			return getRuleContext(IinterfaceContext.class,0);
		}
		public TerminalNode ENM() { return getToken(TypescriptGrammarParser.ENM, 0); }
		public EenumContext eenum() {
			return getRuleContext(EenumContext.class,0);
		}
		public TypobjektContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typobjekt; }
	}

	public final TypobjektContext typobjekt() throws RecognitionException {
		TypobjektContext _localctx = new TypobjektContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_typobjekt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLS:
				{
				setState(60);
				match(CLS);
				setState(61);
				cclass();
				}
				break;
			case INTRF:
				{
				setState(62);
				match(INTRF);
				setState(63);
				iinterface();
				}
				break;
			case ENM:
				{
				setState(64);
				match(ENM);
				setState(65);
				eenum();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CclassContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TypescriptGrammarParser.ID, 0); }
		public TerminalNode MEMB() { return getToken(TypescriptGrammarParser.MEMB, 0); }
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public CclassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cclass; }
	}

	public final CclassContext cclass() throws RecognitionException {
		CclassContext _localctx = new CclassContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_cclass);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			match(ID);
			setState(71);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(69);
				match(MEMB);
				setState(70);
				member();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IinterfaceContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TypescriptGrammarParser.ID, 0); }
		public TerminalNode MEMB() { return getToken(TypescriptGrammarParser.MEMB, 0); }
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public IinterfaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iinterface; }
	}

	public final IinterfaceContext iinterface() throws RecognitionException {
		IinterfaceContext _localctx = new IinterfaceContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_iinterface);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(ID);
			{
			setState(74);
			match(MEMB);
			setState(75);
			member();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EenumContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TypescriptGrammarParser.ID, 0); }
		public EenumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eenum; }
	}

	public final EenumContext eenum() throws RecognitionException {
		EenumContext _localctx = new EenumContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_eenum);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MemberContext extends ParserRuleContext {
		public MethodContext method() {
			return getRuleContext(MethodContext.class,0);
		}
		public PropertyContext property() {
			return getRuleContext(PropertyContext.class,0);
		}
		public MemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_member; }
	}

	public final MemberContext member() throws RecognitionException {
		MemberContext _localctx = new MemberContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_member);
		try {
			setState(81);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(79);
				method();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(80);
				property();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TypescriptGrammarParser.ID, 0); }
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TypescriptGrammarParser.ID, 0); }
		public TerminalNode OPENPAR() { return getToken(TypescriptGrammarParser.OPENPAR, 0); }
		public TerminalNode CLOSEPAR() { return getToken(TypescriptGrammarParser.CLOSEPAR, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public MethodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_method; }
	}

	public final MethodContext method() throws RecognitionException {
		MethodContext _localctx = new MethodContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_method);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(ID);
			setState(86);
			match(OPENPAR);
			setState(88);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(87);
				arguments();
				}
				break;
			}
			setState(90);
			match(CLOSEPAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsContext extends ParserRuleContext {
		public List<ArgumentContext> argument() {
			return getRuleContexts(ArgumentContext.class);
		}
		public ArgumentContext argument(int i) {
			return getRuleContext(ArgumentContext.class,i);
		}
		public List<TerminalNode> ARGSEP() { return getTokens(TypescriptGrammarParser.ARGSEP); }
		public TerminalNode ARGSEP(int i) {
			return getToken(TypescriptGrammarParser.ARGSEP, i);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			argument();
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ARGSEP) {
				{
				{
				setState(93);
				match(ARGSEP);
				setState(94);
				argument();
				}
				}
				setState(99);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public ArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argument; }
	}

	public final ArgumentContext argument() throws RecognitionException {
		ArgumentContext _localctx = new ArgumentContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_argument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			type();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public Primitive_typeContext primitive_type() {
			return getRuleContext(Primitive_typeContext.class,0);
		}
		public Class_typeContext class_type() {
			return getRuleContext(Class_typeContext.class,0);
		}
		public Generic_typeContext generic_type() {
			return getRuleContext(Generic_typeContext.class,0);
		}
		public Array_typeContext array_type() {
			return getRuleContext(Array_typeContext.class,0);
		}
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_type);
		try {
			setState(106);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(102);
				primitive_type();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(103);
				class_type();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(104);
				generic_type();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(105);
				array_type();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Array_typeContext extends ParserRuleContext {
		public TerminalNode OPENBR() { return getToken(TypescriptGrammarParser.OPENBR, 0); }
		public TerminalNode CLOSEBR() { return getToken(TypescriptGrammarParser.CLOSEBR, 0); }
		public Primitive_typeContext primitive_type() {
			return getRuleContext(Primitive_typeContext.class,0);
		}
		public Class_typeContext class_type() {
			return getRuleContext(Class_typeContext.class,0);
		}
		public Array_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array_type; }
	}

	public final Array_typeContext array_type() throws RecognitionException {
		Array_typeContext _localctx = new Array_typeContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_array_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING:
			case NUMBER:
			case BOOLEAN:
			case OBJECT:
			case OPENBR:
				{
				setState(108);
				primitive_type();
				}
				break;
			case ID:
				{
				setState(109);
				class_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(112);
			match(OPENBR);
			setState(113);
			match(CLOSEBR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Generic_typeContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TypescriptGrammarParser.ID, 0); }
		public TerminalNode LESS() { return getToken(TypescriptGrammarParser.LESS, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode MORETH() { return getToken(TypescriptGrammarParser.MORETH, 0); }
		public Generic_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_generic_type; }
	}

	public final Generic_typeContext generic_type() throws RecognitionException {
		Generic_typeContext _localctx = new Generic_typeContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_generic_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			match(ID);
			setState(116);
			match(LESS);
			setState(117);
			type();
			setState(118);
			match(MORETH);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Primitive_typeContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(TypescriptGrammarParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(TypescriptGrammarParser.NUMBER, 0); }
		public TerminalNode BOOLEAN() { return getToken(TypescriptGrammarParser.BOOLEAN, 0); }
		public TerminalNode OBJECT() { return getToken(TypescriptGrammarParser.OBJECT, 0); }
		public Primitive_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitive_type; }
	}

	public final Primitive_typeContext primitive_type() throws RecognitionException {
		Primitive_typeContext _localctx = new Primitive_typeContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_primitive_type);
		try {
			setState(125);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLOSEPAR:
			case ARGSEP:
			case MORETH:
			case OPENBR:
				enterOuterAlt(_localctx, 1);
				{
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(121);
				match(STRING);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 3);
				{
				setState(122);
				match(NUMBER);
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 4);
				{
				setState(123);
				match(BOOLEAN);
				}
				break;
			case OBJECT:
				enterOuterAlt(_localctx, 5);
				{
				setState(124);
				match(OBJECT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Class_typeContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TypescriptGrammarParser.ID, 0); }
		public Class_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_class_type; }
	}

	public final Class_typeContext class_type() throws RecognitionException {
		Class_typeContext _localctx = new Class_typeContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_class_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\24\u0084\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\3\2"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\5\2-\n\2\3\3\3\3\3\3\7\3\62\n\3\f\3\16"+
		"\3\65\13\3\3\3\3\3\3\3\7\3:\n\3\f\3\16\3=\13\3\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\5\4E\n\4\3\5\3\5\3\5\5\5J\n\5\3\6\3\6\3\6\3\6\3\7\3\7\3\b\3\b\5\bT\n"+
		"\b\3\t\3\t\3\n\3\n\3\n\5\n[\n\n\3\n\3\n\3\13\3\13\3\13\7\13b\n\13\f\13"+
		"\16\13e\13\13\3\f\3\f\3\r\3\r\3\r\3\r\5\rm\n\r\3\16\3\16\5\16q\n\16\3"+
		"\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\5\20\u0080"+
		"\n\20\3\21\3\21\3\21\2\2\22\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \2"+
		"\2\2\u0088\2,\3\2\2\2\4.\3\2\2\2\6D\3\2\2\2\bF\3\2\2\2\nK\3\2\2\2\fO\3"+
		"\2\2\2\16S\3\2\2\2\20U\3\2\2\2\22W\3\2\2\2\24^\3\2\2\2\26f\3\2\2\2\30"+
		"l\3\2\2\2\32p\3\2\2\2\34u\3\2\2\2\36\177\3\2\2\2 \u0081\3\2\2\2\"#\7\3"+
		"\2\2#-\5\4\3\2$%\7\4\2\2%-\5\b\5\2&\'\7\5\2\2\'-\5\n\6\2()\7\7\2\2)-\5"+
		"\f\7\2*+\7\6\2\2+-\5\16\b\2,\"\3\2\2\2,$\3\2\2\2,&\3\2\2\2,(\3\2\2\2,"+
		"*\3\2\2\2-\3\3\2\2\2.\63\7\24\2\2/\60\7\3\2\2\60\62\5\4\3\2\61/\3\2\2"+
		"\2\62\65\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2\64;\3\2\2\2\65\63\3\2\2\2"+
		"\66:\5\6\4\2\678\7\6\2\28:\5\16\b\29\66\3\2\2\29\67\3\2\2\2:=\3\2\2\2"+
		";9\3\2\2\2;<\3\2\2\2<\5\3\2\2\2=;\3\2\2\2>?\7\4\2\2?E\5\b\5\2@A\7\5\2"+
		"\2AE\5\n\6\2BC\7\7\2\2CE\5\f\7\2D>\3\2\2\2D@\3\2\2\2DB\3\2\2\2E\7\3\2"+
		"\2\2FI\7\24\2\2GH\7\6\2\2HJ\5\16\b\2IG\3\2\2\2IJ\3\2\2\2J\t\3\2\2\2KL"+
		"\7\24\2\2LM\7\6\2\2MN\5\16\b\2N\13\3\2\2\2OP\7\24\2\2P\r\3\2\2\2QT\5\22"+
		"\n\2RT\5\20\t\2SQ\3\2\2\2SR\3\2\2\2T\17\3\2\2\2UV\7\24\2\2V\21\3\2\2\2"+
		"WX\7\24\2\2XZ\7\b\2\2Y[\5\24\13\2ZY\3\2\2\2Z[\3\2\2\2[\\\3\2\2\2\\]\7"+
		"\t\2\2]\23\3\2\2\2^c\5\26\f\2_`\7\n\2\2`b\5\26\f\2a_\3\2\2\2be\3\2\2\2"+
		"ca\3\2\2\2cd\3\2\2\2d\25\3\2\2\2ec\3\2\2\2fg\5\30\r\2g\27\3\2\2\2hm\5"+
		"\36\20\2im\5 \21\2jm\5\34\17\2km\5\32\16\2lh\3\2\2\2li\3\2\2\2lj\3\2\2"+
		"\2lk\3\2\2\2m\31\3\2\2\2nq\5\36\20\2oq\5 \21\2pn\3\2\2\2po\3\2\2\2qr\3"+
		"\2\2\2rs\7\22\2\2st\7\23\2\2t\33\3\2\2\2uv\7\24\2\2vw\7\20\2\2wx\5\30"+
		"\r\2xy\7\21\2\2y\35\3\2\2\2z\u0080\3\2\2\2{\u0080\7\f\2\2|\u0080\7\r\2"+
		"\2}\u0080\7\16\2\2~\u0080\7\17\2\2\177z\3\2\2\2\177{\3\2\2\2\177|\3\2"+
		"\2\2\177}\3\2\2\2\177~\3\2\2\2\u0080\37\3\2\2\2\u0081\u0082\7\24\2\2\u0082"+
		"!\3\2\2\2\16,\639;DISZclp\177";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}