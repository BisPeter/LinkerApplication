"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeNodeType = exports.searchStringPartType = void 0;
/**
 * This enum holds the string representaion of the code elements.
 */
var searchStringPartType;
(function (searchStringPartType) {
    searchStringPartType["Namespace"] = "Namespace";
    searchStringPartType["Interface"] = "Interface";
    searchStringPartType["Class"] = "Class";
    searchStringPartType["Method"] = "Method";
    searchStringPartType["Property"] = "Property";
    searchStringPartType["Argument"] = "Argument";
    searchStringPartType["Enum"] = "Enum";
})(searchStringPartType = exports.searchStringPartType || (exports.searchStringPartType = {}));
/**
* This enum holds the string representaion of the code elements.
*/
var treeNodeType;
(function (treeNodeType) {
    treeNodeType["Namespace"] = "Namespace";
    treeNodeType["Interface"] = "Interface";
    treeNodeType["Class"] = "Class";
    treeNodeType["Method"] = "Method";
    treeNodeType["Property"] = "Property";
    treeNodeType["Argument"] = "Argument";
    treeNodeType["File"] = "File";
    treeNodeType["Enum"] = "Enum";
})(treeNodeType = exports.treeNodeType || (exports.treeNodeType = {}));
