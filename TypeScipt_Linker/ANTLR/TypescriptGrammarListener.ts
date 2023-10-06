// Generated from TypescriptGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StartContext } from "./TypescriptGrammarParser";
import { NnamespaceContext } from "./TypescriptGrammarParser";
import { TypobjektContext } from "./TypescriptGrammarParser";
import { CclassContext } from "./TypescriptGrammarParser";
import { IinterfaceContext } from "./TypescriptGrammarParser";
import { EenumContext } from "./TypescriptGrammarParser";
import { MemberContext } from "./TypescriptGrammarParser";
import { PropertyContext } from "./TypescriptGrammarParser";
import { MethodContext } from "./TypescriptGrammarParser";
import { ArgumentsContext } from "./TypescriptGrammarParser";
import { ArgumentContext } from "./TypescriptGrammarParser";
import { TypeContext } from "./TypescriptGrammarParser";
import { Array_typeContext } from "./TypescriptGrammarParser";
import { Generic_typeContext } from "./TypescriptGrammarParser";
import { Primitive_typeContext } from "./TypescriptGrammarParser";
import { Class_typeContext } from "./TypescriptGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TypescriptGrammarParser`.
 */
export interface TypescriptGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.nnamespace`.
	 * @param ctx the parse tree
	 */
	enterNnamespace?: (ctx: NnamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.nnamespace`.
	 * @param ctx the parse tree
	 */
	exitNnamespace?: (ctx: NnamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.typobjekt`.
	 * @param ctx the parse tree
	 */
	enterTypobjekt?: (ctx: TypobjektContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.typobjekt`.
	 * @param ctx the parse tree
	 */
	exitTypobjekt?: (ctx: TypobjektContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.cclass`.
	 * @param ctx the parse tree
	 */
	enterCclass?: (ctx: CclassContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.cclass`.
	 * @param ctx the parse tree
	 */
	exitCclass?: (ctx: CclassContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.iinterface`.
	 * @param ctx the parse tree
	 */
	enterIinterface?: (ctx: IinterfaceContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.iinterface`.
	 * @param ctx the parse tree
	 */
	exitIinterface?: (ctx: IinterfaceContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.eenum`.
	 * @param ctx the parse tree
	 */
	enterEenum?: (ctx: EenumContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.eenum`.
	 * @param ctx the parse tree
	 */
	exitEenum?: (ctx: EenumContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.member`.
	 * @param ctx the parse tree
	 */
	enterMember?: (ctx: MemberContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.member`.
	 * @param ctx the parse tree
	 */
	exitMember?: (ctx: MemberContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.method`.
	 * @param ctx the parse tree
	 */
	enterMethod?: (ctx: MethodContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.method`.
	 * @param ctx the parse tree
	 */
	exitMethod?: (ctx: MethodContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.array_type`.
	 * @param ctx the parse tree
	 */
	enterArray_type?: (ctx: Array_typeContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.array_type`.
	 * @param ctx the parse tree
	 */
	exitArray_type?: (ctx: Array_typeContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.generic_type`.
	 * @param ctx the parse tree
	 */
	enterGeneric_type?: (ctx: Generic_typeContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.generic_type`.
	 * @param ctx the parse tree
	 */
	exitGeneric_type?: (ctx: Generic_typeContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.primitive_type`.
	 * @param ctx the parse tree
	 */
	enterPrimitive_type?: (ctx: Primitive_typeContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.primitive_type`.
	 * @param ctx the parse tree
	 */
	exitPrimitive_type?: (ctx: Primitive_typeContext) => void;

	/**
	 * Enter a parse tree produced by `TypescriptGrammarParser.class_type`.
	 * @param ctx the parse tree
	 */
	enterClass_type?: (ctx: Class_typeContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptGrammarParser.class_type`.
	 * @param ctx the parse tree
	 */
	exitClass_type?: (ctx: Class_typeContext) => void;
}

