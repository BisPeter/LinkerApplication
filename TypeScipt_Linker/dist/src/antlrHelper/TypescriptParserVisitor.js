"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypescriptParserVisitor = void 0;
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const enums_1 = require("../enums/enums");
/**
 * This class represents a Visitor to parse a searchstring.
 */
class TypescriptParserVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        /**
         * The extracted parts of the searchstring.
         */
        this.searchStringParts = [];
    }
    /**
     * Initializes a TypescriptParserVisitor object.
     * @returns
     */
    defaultResult() {
        return null;
    }
    /**
     * Visits a {@link NamespaceContext}.
     * @param {NamespaceContext} context - The NamespaceContext to visit.
     * @returns {object} The result of visiting the context's children.
     */
    visitNamespace(context) {
        var id = context.ID().text;
        if (this.searchStringParts.filter(part => part.key === enums_1.searchStringPartType.Namespace).length > 0) {
            var part = this.searchStringParts.filter(part => part.key === enums_1.searchStringPartType.Namespace)[0];
            part.value = part.value + '.' + id;
        }
        else {
            this.searchStringParts.push({ key: enums_1.searchStringPartType.Namespace, value: id });
        }
        return super.visitChildren(context);
    }
    /**
     * Visits a {@link PropertyContext}.
     * @param {PropertyContext} context - The NamespaceContext to visit.
     * @returns {object} The result of visiting the context's children.
     */
    visitProperty(context) {
        var id = context.ID().text;
        this.searchStringParts.push({ key: enums_1.searchStringPartType.Property, value: id });
        return super.visitChildren(context);
    }
    /**
     * Visits a {@link MethodContext}.
     * @param {MethodContext} context - The NamespaceContext to visit.
     * @returns {object} The result of visiting the context's children.
     */
    visitMethod(context) {
        this.searchStringParts.push({ key: enums_1.searchStringPartType.Method, value: context.ID().text });
        if (context.arguments() != null) {
            let args = { key: enums_1.searchStringPartType.Argument, value: '' };
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
    visitCclass(context) {
        var id = context.ID().text;
        this.searchStringParts.push({ key: enums_1.searchStringPartType.Class, value: id });
        return super.visitChildren(context);
    }
    /**
     * Visits a {@link IinterfaceContext}.
     * @param {IinterfaceContext} context - The NamespaceContext to visit.
     * @returns {object} The result of visiting the context's children.
     */
    visitIinterface(context) {
        var id = context.ID().text;
        this.searchStringParts.push({ key: enums_1.searchStringPartType.Interface, value: id });
        return super.visitChildren(context);
    }
    visitEenum(ctx) {
        var id = ctx.ID().text;
        this.searchStringParts.push({ key: enums_1.searchStringPartType.Enum, value: id });
        return super.visitChildren(ctx);
    }
}
exports.TypescriptParserVisitor = TypescriptParserVisitor;
