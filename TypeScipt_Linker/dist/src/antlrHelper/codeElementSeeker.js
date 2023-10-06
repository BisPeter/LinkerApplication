"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = exports.findCodeElement = void 0;
const typescript_parser_1 = require("typescript-parser");
const ts = require("typescript");
const enums_1 = require("../enums/enums");
const helper_1 = require("../helper");
const CodeElement_1 = require("./CodeElement");
const searchStringParser_1 = require("./searchStringParser");
const customErrors_1 = require("../Errors/customErrors");
/**
 * Finds a CodeElement in a typescript project.
 * @param searchString - The searchstring to search a codeelement.
 * @param returnCount - How many found codeelements should be returned.
 * @param tsFiles - The parsed ts files of the project.
 * @returns Returns {CodeElement[]}. The found codeelements.
 */
function findCodeElement(searchString, returnCount = -1, tsFiles) {
    var searchStringElements = (0, searchStringParser_1.parseSearchString)(searchString);
    if (searchStringElements == undefined || searchStringElements.length == 0) {
        throw new customErrors_1.SearchstringParseError('The parsing of the search string returned no result.');
    }
    let lines = [];
    for (let index = 0; index < tsFiles.length; index++) {
        //console.log(tsFiles[0].parsedFile);
        if (tsFiles[index].parsedFile) {
            if (tsFiles[index].parsedFile.declarations.length > 0) {
                for (let index2 = 0; index2 < tsFiles[index].parsedFile.declarations.length; index2++) {
                    lines = lines.concat(find(searchStringElements, tsFiles[index].parsedFile, enums_1.treeNodeType.File, tsFiles[index], tsFiles[index].fileName));
                }
            }
        }
    }
    if (returnCount == -1)
        return lines;
    else
        return lines.slice(0, returnCount);
}
exports.findCodeElement = findCodeElement;
/**
 * Finds a codeelement in a specific typescript file.
 * @param {searchStringPart[]} searchStringParts  - The parts of the parsed searchString.
 * @param {object} tree - The tree representaion of a .ts file | node of the tree of a .ts file.
 * @param {string} type - The type of the current tree node.
 * @param {TsFile} file - The .ts file the you are currently searching in.
 * @param {srting} elementName - The name of the element. It represents the path to the codeElement.
 * @returns {CodeElement[]} - the found codeelements.
 */
function find(searchStringParts, tree, type, file, elementName) {
    let result = [];
    if (searchStringParts.length == 0) {
        return result;
    }
    searchStringParts = JSON.parse(JSON.stringify(searchStringParts));
    var token = '';
    var key = searchStringParts[0].key;
    if (key == enums_1.searchStringPartType.Namespace) {
        var nn = extractFirstNamespace(searchStringParts[0].value);
        var token = nn.firstNamespace;
        var key = searchStringParts[0].key;
        var node;
        if (type == enums_1.treeNodeType.File) {
            node = tree.resources;
        }
        else if (type == enums_1.treeNodeType.Namespace) {
            node = tree.resources;
        }
        for (let i = 0; i < node.length; i++) {
            const res = node[i];
            if (res instanceof typescript_parser_1.Namespace) {
                const ns = res;
                if (ns.name === token) {
                    if (nn.rest == '')
                        searchStringParts.shift();
                    else
                        searchStringParts[0].value = nn.rest;
                    if (searchStringParts.length == 0) {
                        const rowNumber = getRowNumber(ns.start, file);
                        var ret = file.relativePath + '/' + file.fileName + '#L' + rowNumber;
                        let codeElement = new CodeElement_1.CodeElement();
                        codeElement.name = elementName + '.' + ns.name;
                        codeElement.path = ret;
                        result.push(codeElement);
                    }
                    else {
                        result = result.concat(find(searchStringParts, res, enums_1.treeNodeType.Namespace, file, elementName + '.' + ns.identifier));
                    }
                }
                else {
                    result = result.concat(find(searchStringParts, res, enums_1.treeNodeType.Namespace, file, elementName));
                }
            }
        }
    }
    else if (key == enums_1.searchStringPartType.Interface) {
        var inNode;
        token = searchStringParts[0].value;
        if (type == enums_1.treeNodeType.File) {
            inNode = tree.declarations;
            if (inNode === undefined)
                var k = "";
            //console.log('');
        }
        else if (type == enums_1.treeNodeType.Namespace) {
            inNode = tree.declarations;
        }
        if (inNode !== undefined && inNode.length != 0) {
            for (let i = 0; i < inNode.length; i++) {
                const res = inNode[i];
                if (res instanceof typescript_parser_1.InterfaceDeclaration) {
                    const ns = res;
                    if (ns.name === token) {
                        searchStringParts.shift();
                        if (searchStringParts.length == 0) {
                            const rowNumber = getRowNumber(ns.start, file);
                            var ret = file.relativePath + '/' + file.fileName + '#L' + rowNumber;
                            let codeElement = new CodeElement_1.CodeElement();
                            codeElement.name = elementName + '.' + ns.name;
                            codeElement.path = ret;
                            result.push(codeElement);
                        }
                        else {
                            result = result.concat(find(searchStringParts, res, enums_1.treeNodeType.Interface, file, elementName + '.' + ns.name));
                        }
                    }
                }
                else {
                    result = result.concat(find(searchStringParts, res, enums_1.treeNodeType.Interface, file, elementName));
                }
            }
        }
    }
    else if (key == enums_1.searchStringPartType.Class) {
        var clNode;
        token = searchStringParts[0].value;
        searchStringParts.shift();
        if (type == enums_1.treeNodeType.File) {
            clNode = tree.declarations;
        }
        else if (type == enums_1.treeNodeType.Namespace) {
            clNode = tree.declarations;
        }
        for (let i = 0; i < clNode.length; i++) {
            const res = clNode[i];
            if (res instanceof typescript_parser_1.ClassDeclaration) {
                const ns = res;
                if (ns.name == token) {
                    if (searchStringParts.length == 0) {
                        const rowNumber = getRowNumber(ns.start, file);
                        var ret = file.relativePath + '/' + file.fileName + '#L' + rowNumber;
                        let codeElement = new CodeElement_1.CodeElement();
                        codeElement.name = elementName + '.' + ns.name;
                        codeElement.path = ret;
                        result.push(codeElement);
                    }
                    else {
                        result = result.concat(find(searchStringParts, res, enums_1.treeNodeType.Class, file, elementName + '.' + ns.name));
                    }
                }
            }
            else {
                var nodeName = getNodeName(res);
                result = result.concat(find(searchStringParts, res, enums_1.treeNodeType.Class, file, elementName + '.' + nodeName));
            }
        }
    }
    else if (key == enums_1.searchStringPartType.Enum) {
        var clNode;
        token = searchStringParts[0].value;
        searchStringParts.shift();
        if (type == enums_1.treeNodeType.File) {
            clNode = tree.declarations;
        }
        else if (type == enums_1.treeNodeType.Namespace) {
            clNode = tree.declarations;
        }
        for (let i = 0; i < clNode.length; i++) {
            const res = clNode[i];
            if (res instanceof typescript_parser_1.EnumDeclaration) {
                const ns = res;
                if (ns.name == token) {
                    if (searchStringParts.length == 0) {
                        const rowNumber = getRowNumber(ns.start, file);
                        var ret = file.relativePath + '/' + file.fileName + '#L' + rowNumber;
                        let codeElement = new CodeElement_1.CodeElement();
                        codeElement.name = elementName + '.' + ns.name;
                        codeElement.path = ret;
                        result.push(codeElement);
                    }
                    else {
                        result = result.concat(find(searchStringParts, res, enums_1.treeNodeType.Enum, file, elementName + '.' + ns.name));
                    }
                }
            }
            else {
                var nodeName = getNodeName(res);
                result = result.concat(find(searchStringParts, res, enums_1.treeNodeType.Enum, file, elementName + '.' + nodeName));
            }
        }
    }
    else if (key == enums_1.searchStringPartType.Method) {
        token = searchStringParts[0].value;
        if (type == enums_1.treeNodeType.File || type == enums_1.treeNodeType.Namespace) {
            var declarations;
            var resources;
            let searchStringParts2 = JSON.parse(JSON.stringify(searchStringParts));
            if (type == 'File') {
                declarations = tree.declarations;
                resources = tree.resources;
            }
            else if (type == enums_1.treeNodeType.Namespace) {
                declarations = tree.declarations;
                resources = tree.resources;
            }
            for (let i = 0; i < resources.length; i++) {
                const res = resources[i];
                if (res instanceof typescript_parser_1.FunctionDeclaration) {
                    const ns = res;
                    if (ns.name === token && hasSameParameter(ns.parameters.map(x => x.type), searchStringParts2)) {
                        searchStringParts2.shift();
                        if (searchStringParts2.length == 0) {
                            const rowNumber = getRowNumber(ns.start, file);
                            var ret = file.relativePath + '/' + file.fileName + '#L' + rowNumber;
                            let codeElement = new CodeElement_1.CodeElement();
                            codeElement.name = elementName + '.' + ns.name;
                            codeElement.path = ret;
                            result.push(codeElement);
                        }
                        else {
                            result = result.concat(find(searchStringParts2, res, getNodeType(res), file, elementName + '.' + ns.name));
                        }
                    }
                    else {
                        result = result.concat(find(searchStringParts2, res, getNodeType(res), file, elementName + '.' + ns.name));
                    }
                }
                else {
                    var nodeName = getNodeName(res);
                    result = result.concat(find(searchStringParts2, res, getResourceNodeType(res), file, elementName + '.' + nodeName));
                }
            }
            for (let i = 0; i < declarations.length; i++) {
                const res = declarations[i];
                if (res instanceof typescript_parser_1.FunctionDeclaration) {
                    const ns = res;
                    if (ns.name === token && hasSameParameter(ns.parameters.map(x => x.type), searchStringParts)) {
                        searchStringParts.shift();
                        if (searchStringParts.length == 0) {
                            const rowNumber = getRowNumber(ns.start, file);
                            var ret = file.relativePath + '/' + file.fileName + '#L' + rowNumber;
                            let codeElement = new CodeElement_1.CodeElement();
                            codeElement.name = elementName + '.' + ns.name;
                            codeElement.path = ret;
                            result.push(codeElement);
                        }
                    }
                    else {
                        result = result.concat(find(searchStringParts, res, getNodeType(res), file, elementName + '.' + ns.name));
                    }
                }
                else {
                    var nodeName = getNodeName(res);
                    result = result.concat(find(searchStringParts, res, getNodeType(res), file, elementName + '.' + nodeName));
                }
            }
        }
        else if (type == enums_1.treeNodeType.Interface || type == enums_1.treeNodeType.Class) {
            var meNode;
            if (type == enums_1.treeNodeType.Interface) {
                meNode = tree.methods;
            }
            else if (type == enums_1.treeNodeType.Class) {
                meNode = tree.methods;
            }
            if (meNode != undefined) {
                for (let i = 0; i < meNode.length; i++) {
                    const res = meNode[i];
                    if (res instanceof typescript_parser_1.MethodDeclaration) {
                        const ns = res;
                        if (ns.name === token && hasSameParameter(ns.parameters.map(x => x.type), searchStringParts)) {
                            searchStringParts.shift();
                            if (searchStringParts.length == 0) {
                                const rowNumber = getRowNumber(ns.start, file);
                                var ret = file.relativePath + '\\' + file.fileName + '#L' + rowNumber;
                                let codeElement = new CodeElement_1.CodeElement();
                                codeElement.name = elementName + '.' + ns.name;
                                codeElement.path = ret;
                                result.push(codeElement);
                            }
                        }
                        else {
                            result = result.concat(find(searchStringParts, res, type, file, elementName + '.' + ns.name));
                        }
                    }
                }
            }
        }
    }
    else if (key == enums_1.searchStringPartType.Property) {
        var prNode;
        token = searchStringParts[0].value;
        if (type == enums_1.treeNodeType.Interface) {
            prNode = tree.properties;
        }
        else if (type == enums_1.treeNodeType.Class) {
            prNode = tree.properties;
        }
        if (prNode !== undefined && prNode.length > 0) {
            for (let i = 0; i < prNode.length; i++) {
                const res = prNode[i];
                if (res instanceof typescript_parser_1.PropertyDeclaration) {
                    const ns = res;
                    if (ns.name === token) {
                        searchStringParts.shift();
                        if (searchStringParts.length == 0) {
                            const rowNumber = getRowNumber(ns.start, file);
                            var ret = file.relativePath + '\\' + file.fileName + '#L' + rowNumber;
                            let codeElement = new CodeElement_1.CodeElement();
                            codeElement.name = elementName + '.' + ns.name;
                            codeElement.path = ret;
                            result.push(codeElement);
                        }
                    }
                    else {
                        result = result.concat(find(searchStringParts, res, enums_1.treeNodeType.Namespace, file, elementName));
                    }
                }
            }
        }
    }
    return result;
}
exports.find = find;
/**
 * Gets the rownumber of the found codeelement.
 * @param {number} position - Starting position of the codeelement in the .ts file.
 * @param {TsFile} file - The TS file you are currently searching in.
 * @returns {number} Returns the rownumber.
 */
function getRowNumber(position, file) {
    const { line } = ts.getLineAndCharacterOfPosition(file.sourceFile, position);
    const row = line + 1;
    return row;
}
/**
 * Extracts the id of the first namespace from the namespace token.
 * @param {string} input The string that represents the namespace names-
 * @returns Returns an object { firstNamespace: string; rest: string } containing the first segment of the namespace name.
 */
function extractFirstNamespace(input) {
    const dotIndex = input.indexOf('.');
    if (dotIndex == 0) {
        const firstNamespace = input.substring(dotIndex + 1, input.length);
        const rest = '';
        return { firstNamespace, rest };
    }
    else if (dotIndex !== -1) {
        const firstNamespace = input.substring(0, dotIndex);
        const rest = input.substring(dotIndex);
        return { firstNamespace, rest };
    }
    else {
        return { firstNamespace: input, rest: '' };
    }
}
/**
 * Checks whether a MethodDeclaration | FunctionDeclaration has the same arguments as the arguments that are looked for.
 * @param args - The arguments of the function that is being analyzed.
 * @param searchStringParts - The Arguments you are looking for.
 * @returns Return true when the arguments are the same of the analyzed function as what you are looking for. Otherewise false.
 */
function hasSameParameter(args, searchStringParts) {
    if (searchStringParts.find(x => x.key == enums_1.searchStringPartType.Argument) === undefined)
        return true;
    var res = (0, helper_1.arraysHaveSameElements)(args, searchStringParts.find(x => x.key == enums_1.searchStringPartType.Argument).value.split(','));
    searchStringParts.shift();
    return res;
}
/**
 * Gets the string representation of the node type.
 * @param {Declaration} node - The node you want the name for.
 * @returns Returns the string representaion of a given tree node.
 */
function getNodeType(node) {
    if (node instanceof typescript_parser_1.ClassDeclaration) {
        return 'Class';
    }
    else if (node instanceof typescript_parser_1.MethodDeclaration) {
        return 'Method';
    }
    else if (node instanceof typescript_parser_1.FunctionDeclaration) {
        return 'Method';
    }
    else if (node instanceof typescript_parser_1.InterfaceDeclaration) {
        return 'Interface';
    }
    else if (node instanceof typescript_parser_1.Namespace) {
        return 'NameSpace';
    }
    else if (node instanceof typescript_parser_1.PropertyDeclaration) {
        return 'Property';
    }
}
/**
 * Gets the string representation of the node type.
 * @param {Resource} node - The node you want to get the string representaion from.
 * @returns The tring representation of the node type.
 */
function getResourceNodeType(node) {
    if (node instanceof typescript_parser_1.Namespace) {
        return 'NameSpace';
    }
}
/**
 * Gets the name of a given node.
 * @param {Any} node - The node you want to get the name of.
 * @returns Returns the name of the node.
 */
function getNodeName(node) {
    if (node instanceof typescript_parser_1.ClassDeclaration) {
        return node.name;
    }
    else if (node instanceof typescript_parser_1.MethodDeclaration) {
        return node.name;
    }
    else if (node instanceof typescript_parser_1.FunctionDeclaration) {
        return node.name;
    }
    else if (node instanceof typescript_parser_1.InterfaceDeclaration) {
        return node.name;
    }
    else if (node instanceof typescript_parser_1.Namespace) {
        return node.name;
    }
    else if (node instanceof typescript_parser_1.PropertyDeclaration) {
        return node.name;
    }
}
