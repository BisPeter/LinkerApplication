// Generated from TypescriptGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TypescriptGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TypescriptGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.nnamespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNnamespace?: (ctx: NnamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.typobjekt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypobjekt?: (ctx: TypobjektContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.cclass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCclass?: (ctx: CclassContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.iinterface`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIinterface?: (ctx: IinterfaceContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.eenum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEenum?: (ctx: EenumContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember?: (ctx: MemberContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod?: (ctx: MethodContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.array_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_type?: (ctx: Array_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.generic_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneric_type?: (ctx: Generic_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.primitive_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitive_type?: (ctx: Primitive_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `TypescriptGrammarParser.class_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_type?: (ctx: Class_typeContext) => Result;
}

