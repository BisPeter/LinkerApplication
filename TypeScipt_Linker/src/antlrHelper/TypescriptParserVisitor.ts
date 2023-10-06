import { ArgumentContext, CclassContext, EenumContext, IinterfaceContext, MethodContext, NnamespaceContext, PropertyContext } from '../../ANTLR/TypescriptGrammarParser'
import { TypescriptGrammarVisitor } from '../../ANTLR/TypescriptGrammarVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { searchStringPart } from './searchStringParts';
import { searchStringPartType } from '../enums/enums';

/**
 * This class represents a Visitor to parse a searchstring.
 */
export class TypescriptParserVisitor extends AbstractParseTreeVisitor<object> implements TypescriptGrammarVisitor<object>{

    /**
     * Initializes a TypescriptParserVisitor object.
     * @returns 
     */
    protected defaultResult(): object {
        return null;
    }

    /**
     * The extracted parts of the searchstring.
     */
    searchStringParts = [] as searchStringPart[];

    /**
     * Visits a {@link NamespaceContext}.
     * @param {NamespaceContext} context - The NamespaceContext to visit.
     * @returns {object} The result of visiting the context's children.
     */
    visitNamespace(context: NnamespaceContext): object {
        var id = context.ID().text;
        if (this.searchStringParts.filter(part => part.key === searchStringPartType.Namespace).length > 0) {
            var part = this.searchStringParts.filter(part => part.key === searchStringPartType.Namespace)[0];
            part.value = part.value + '.' + id;
        }
        else {
            this.searchStringParts.push({ key: searchStringPartType.Namespace, value: id });
        }
        return super.visitChildren(context);
    }

    /**
     * Visits a {@link PropertyContext}.
     * @param {PropertyContext} context - The NamespaceContext to visit.
     * @returns {object} The result of visiting the context's children.
     */
    visitProperty(context: PropertyContext): object {
        var id = context.ID().text;
        this.searchStringParts.push({ key: searchStringPartType.Property, value: id });
        return super.visitChildren(context);
    }

    /**
     * Visits a {@link MethodContext}.
     * @param {MethodContext} context - The NamespaceContext to visit.
     * @returns {object} The result of visiting the context's children.
     */    
    visitMethod(context: MethodContext): object {
        this.searchStringParts.push({ key: searchStringPartType.Method, value: context.ID().text })

        if (context.arguments() != null) {
            let args = { key: searchStringPartType.Argument, value: '' }
            for (let index = 0; index < context.arguments().argument().length; index++) {
                let id = context.arguments().argument()[index].type().text;
                args.value = args.value + id + ',';
            }

            args.value = args.value.slice(0, -1);
            this.searchStringParts.push(args);
        }

        return super.visitChildren(context);
    }
 
    /**
     * Visits a {@link CclassContext}.
     * @param {CclassContext} context - The NamespaceContext to visit.
     * @returns {object} The result of visiting the context's children.
     */
    visitCclass(context: CclassContext): object {
        var id = context.ID().text;
        this.searchStringParts.push({ key: searchStringPartType.Class, value: id });
        return super.visitChildren(context);
    }
   
    /**
     * Visits a {@link IinterfaceContext}.
     * @param {IinterfaceContext} context - The NamespaceContext to visit.
     * @returns {object} The result of visiting the context's children.
     */
    visitIinterface(context: IinterfaceContext): object {
        var id = context.ID().text;
        this.searchStringParts.push({ key: searchStringPartType.Interface, value: id });
        return super.visitChildren(context);
    }
    
    visitEenum(ctx: EenumContext) : Object{
        var id = ctx.ID().text;
        this.searchStringParts.push({ key: searchStringPartType.Enum, value: id });
        return super.visitChildren(ctx);
    }
}