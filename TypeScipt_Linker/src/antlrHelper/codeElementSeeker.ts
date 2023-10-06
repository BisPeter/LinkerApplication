import { Namespace, Resource, File, Declaration, InterfaceDeclaration, ClassDeclaration, FunctionDeclaration, MethodDeclaration, PropertyDeclaration, EnumDeclaration } from "typescript-parser";
import * as ts from 'typescript';
import { TsFile } from '../FileHelper/tsFile';
import { searchStringPart } from "./searchStringParts";
import { searchStringPartType, treeNodeType } from "../enums/enums";
import { arraysHaveSameElements } from "../helper";
import { CodeElement } from "./CodeElement";
import { Any } from "json2typescript";
import { parseSearchString } from "./searchStringParser";
import { appState } from "../configuration/appState";
import { SearchstringParseError } from "../Errors/customErrors";


/**
 * Finds a CodeElement in a typescript project.
 * @param searchString - The searchstring to search a codeelement.
 * @param returnCount - How many found codeelements should be returned.
 * @param tsFiles - The parsed ts files of the project.
 * @returns Returns {CodeElement[]}. The found codeelements.
 */
export function findCodeElement(searchString: string, returnCount: number = -1, tsFiles: TsFile[]): CodeElement[] {
    
    var searchStringElements = parseSearchString(searchString)
    
    if(searchStringElements == undefined || searchStringElements.length == 0){
        throw new SearchstringParseError('The parsing of the search string returned no result.')
    }

    let lines: CodeElement[] = [];
    for (let index = 0; index < tsFiles.length; index++) {
        //console.log(tsFiles[0].parsedFile);
        if (tsFiles[index].parsedFile) {
            if (tsFiles[index].parsedFile.declarations.length > 0) {
                for (let index2 = 0; index2 < tsFiles[index].parsedFile.declarations.length; index2++) {
                    lines = lines.concat( find(searchStringElements, tsFiles[index].parsedFile, treeNodeType.File, tsFiles[index], tsFiles[index].fileName));
                }
            }
        }
    }
    if (returnCount == -1)
        return lines;
    else
        return lines.slice(0, returnCount);
}

/**
 * Finds a codeelement in a specific typescript file.
 * @param {searchStringPart[]} searchStringParts  - The parts of the parsed searchString.
 * @param {object} tree - The tree representaion of a .ts file | node of the tree of a .ts file.
 * @param {string} type - The type of the current tree node.
 * @param {TsFile} file - The .ts file the you are currently searching in.
 * @param {srting} elementName - The name of the element. It represents the path to the codeElement.
 * @returns {CodeElement[]} - the found codeelements.
 */
export function find(searchStringParts: searchStringPart[], tree: object, type: string, file: TsFile, elementName: string): CodeElement[] {
    let result = [];
    if(searchStringParts.length == 0){
        return result;
    }

    searchStringParts = JSON.parse(JSON.stringify(searchStringParts));
    var token = '';
    var key = searchStringParts[0].key

    if (key == searchStringPartType.Namespace) {

        var nn = extractFirstNamespace(searchStringParts[0].value)
        var token = nn.firstNamespace;
        var key = searchStringParts[0].key


        var node: Resource[];

        if (type == treeNodeType.File) {
            node = (tree as File).resources;
        }
        else if (type == treeNodeType.Namespace) {
            node = (tree as Namespace).resources;
        }

        for (let i = 0; i < node.length; i++) {
            const res = node[i];
            if (res instanceof Namespace) {
                const ns = res as Namespace;
                if (ns.name === token) {

                    if (nn.rest == '')
                        searchStringParts.shift();
                    else
                        searchStringParts[0].value = nn.rest

                    if (searchStringParts.length == 0) {
                        const rowNumber = getRowNumber(ns.start as number, file);
                        var ret = file.relativePath + '/' + file.fileName + '#L' + rowNumber;
                        let codeElement = new CodeElement();
                        codeElement.name = elementName + '.' + ns.name;
                        codeElement.path = ret;
                        result.push(codeElement);
                    }
                    else {
                        result = result.concat(find(searchStringParts, res, treeNodeType.Namespace, file, elementName + '.' + ns.identifier));
                    }
                }
                else {
                    result = result.concat(find(searchStringParts, res, treeNodeType.Namespace, file, elementName));
                }
            }
        }
    }
    else if (key == searchStringPartType.Interface) {
        var inNode: Declaration[];
        token = searchStringParts[0].value;
        if (type == treeNodeType.File) {
            inNode = (tree as File).declarations;
            if (inNode === undefined)
            var k ="";
                //console.log('');
        }
        else if (type == treeNodeType.Namespace) {
            inNode = (tree as Namespace).declarations;
        }
        if (inNode !== undefined && inNode.length != 0) {
            for (let i = 0; i < inNode.length; i++) {
                const res = inNode[i];
                if (res instanceof InterfaceDeclaration) {
                    const ns = res as InterfaceDeclaration;
                    if (ns.name === token) {
                        searchStringParts.shift();
                        if (searchStringParts.length == 0) {
                            const rowNumber = getRowNumber(ns.start as number, file);
                            var ret = file.relativePath + '/' + file.fileName + '#L' + rowNumber;

                            let codeElement = new CodeElement();
                            codeElement.name = elementName + '.' + ns.name;
                            codeElement.path = ret;
                            result.push(codeElement);
                        }
                        else {
                            result = result.concat(find(searchStringParts, res, treeNodeType.Interface, file, elementName + '.' + ns.name));
                        }
                    }
                }
                else {
                    result = result.concat(find(searchStringParts, res, treeNodeType.Interface, file, elementName));
                }
            }
        }
    }
    else if (key == searchStringPartType.Class) {
        var clNode: Declaration[];
        token = searchStringParts[0].value;
        searchStringParts.shift();
        if (type == treeNodeType.File) {
            clNode = (tree as File).declarations;
        }
        else if (type == treeNodeType.Namespace) {
            clNode = (tree as Namespace).declarations;
        }

        for (let i = 0; i < clNode.length; i++) {
            const res = clNode[i];
            if (res instanceof ClassDeclaration) {
                const ns = res as ClassDeclaration;
                if (ns.name == token) {
                    if (searchStringParts.length == 0) {
                        const rowNumber = getRowNumber(ns.start as number, file);
                        var ret = file.relativePath + '/' + file.fileName + '#L' + rowNumber;

                        let codeElement = new CodeElement();
                        codeElement.name = elementName + '.' + ns.name;
                        codeElement.path = ret;
                        result.push(codeElement);
                    }
                    else {
                        result = result.concat(find(searchStringParts, res, treeNodeType.Class, file, elementName + '.' + ns.name));
                    }
                }
            }
            else {
                var nodeName = getNodeName(res);
                result = result.concat(find(searchStringParts, res, treeNodeType.Class, file, elementName + '.' + nodeName));
            }
        }
    }
    else if (key == searchStringPartType.Enum) {
        var clNode: Declaration[];
        token = searchStringParts[0].value;
        searchStringParts.shift();
        if (type == treeNodeType.File) {
            clNode = (tree as File).declarations;
        }
        else if (type == treeNodeType.Namespace) {
            clNode = (tree as Namespace).declarations;
        }

        for (let i = 0; i < clNode.length; i++) {
            const res = clNode[i];
            if (res instanceof EnumDeclaration) {
                const ns = res as EnumDeclaration;
                if (ns.name == token) {
                    if (searchStringParts.length == 0) {
                        const rowNumber = getRowNumber(ns.start as number, file);
                        var ret = file.relativePath + '/' + file.fileName + '#L' + rowNumber;

                        let codeElement = new CodeElement();
                        codeElement.name = elementName + '.' + ns.name;
                        codeElement.path = ret;
                        result.push(codeElement);
                    }
                    else {
                        result = result.concat(find(searchStringParts, res, treeNodeType.Enum, file, elementName + '.' + ns.name));
                    }
                }
            }
            else {
                var nodeName = getNodeName(res);
                result = result.concat(find(searchStringParts, res, treeNodeType.Enum, file, elementName + '.' + nodeName));
            }
        }
    }
    else if (key == searchStringPartType.Method) {

        token = searchStringParts[0].value;

        if (type == treeNodeType.File || type == treeNodeType.Namespace) {
            var declarations: Declaration[];
            var resources: Resource[];
            let searchStringParts2 = JSON.parse(JSON.stringify(searchStringParts));
            if (type == 'File') {
                declarations = (tree as File).declarations;
                resources = (tree as File).resources;
            }
            else if (type == treeNodeType.Namespace) {
                declarations = (tree as Namespace).declarations;
                resources = (tree as Namespace).resources;
            }

            for (let i = 0; i < resources.length; i++) {
                const res = resources[i];
                if (res instanceof FunctionDeclaration) {
                    const ns = res as FunctionDeclaration;
                    if (ns.name === token && hasSameParameter(ns.parameters.map(x => x.type), searchStringParts2)) {
                        searchStringParts2.shift();
                        if (searchStringParts2.length == 0) {
                            const rowNumber = getRowNumber(ns.start as number, file);
                            var ret = file.relativePath + '/' + file.fileName + '#L' + rowNumber;

                            let codeElement = new CodeElement();
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
                if (res instanceof FunctionDeclaration) {
                    const ns = res as FunctionDeclaration;
                    if (ns.name === token && hasSameParameter(ns.parameters.map(x => x.type), searchStringParts)) {
                        searchStringParts.shift();
                        if (searchStringParts.length == 0) {
                            const rowNumber = getRowNumber(ns.start as number, file);
                            var ret = file.relativePath + '/' + file.fileName + '#L' + rowNumber;

                            let codeElement = new CodeElement();
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
        else if (type == treeNodeType.Interface || type == treeNodeType.Class) {

            var meNode: MethodDeclaration[];
            if (type == treeNodeType.Interface) {
                meNode = (tree as InterfaceDeclaration).methods;
            }
            else if (type == treeNodeType.Class) {
                meNode = (tree as ClassDeclaration).methods;
            }
            if (meNode != undefined) {
                for (let i = 0; i < meNode.length; i++) {
                    const res = meNode[i];
                    if (res instanceof MethodDeclaration) {
                        const ns = res as MethodDeclaration;
                        if (ns.name === token && hasSameParameter(ns.parameters.map(x => x.type), searchStringParts)) {
                            searchStringParts.shift();
                            if (searchStringParts.length == 0) {
                                const rowNumber = getRowNumber(ns.start as number, file);
                                var ret = file.relativePath + '\\' + file.fileName + '#L' + rowNumber;

                                let codeElement = new CodeElement();
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
    else if (key == searchStringPartType.Property) {
        var prNode: PropertyDeclaration[];
        token = searchStringParts[0].value;
        if (type == treeNodeType.Interface) {
            prNode = (tree as InterfaceDeclaration).properties;
        }
        else if (type == treeNodeType.Class) {
            prNode = (tree as ClassDeclaration).properties;
        }
        if (prNode !== undefined && prNode.length > 0) {
            for (let i = 0; i < prNode.length; i++) {
                const res = prNode[i];
                if (res instanceof PropertyDeclaration) {
                    const ns = res as PropertyDeclaration;
                    if (ns.name === token) {
                        searchStringParts.shift();
                        if (searchStringParts.length == 0) {
                            const rowNumber = getRowNumber(ns.start as number, file);
                            var ret = file.relativePath + '\\' + file.fileName + '#L' + rowNumber;

                            let codeElement = new CodeElement();
                            codeElement.name = elementName + '.' + ns.name;
                            codeElement.path = ret;
                            result.push(codeElement);
                        }
                    }
                    else {
                        result = result.concat(find(searchStringParts, res, treeNodeType.Namespace, file, elementName));
                    }
                }
            }
        }
    }
    return result;
}

/**
 * Gets the rownumber of the found codeelement.
 * @param {number} position - Starting position of the codeelement in the .ts file. 
 * @param {TsFile} file - The TS file you are currently searching in.
 * @returns {number} Returns the rownumber.
 */
function getRowNumber(position: number, file: TsFile): number {
    const { line } = ts.getLineAndCharacterOfPosition(file.sourceFile, position);
    const row = line + 1;
    return row;
}


/**
 * Extracts the id of the first namespace from the namespace token. 
 * @param {string} input The string that represents the namespace names- 
 * @returns Returns an object { firstNamespace: string; rest: string } containing the first segment of the namespace name.
 */
function extractFirstNamespace(input: string): { firstNamespace: string; rest: string } {
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
function hasSameParameter(args: string[], searchStringParts: searchStringPart[]): boolean {
    if (searchStringParts.find(x => x.key == searchStringPartType.Argument) === undefined)
        return true;

    var res = arraysHaveSameElements(args, searchStringParts.find(x => x.key == searchStringPartType.Argument).value.split(','));
    searchStringParts.shift();
    return res;
}

/**
 * Gets the string representation of the node type.
 * @param {Declaration} node - The node you want the name for. 
 * @returns Returns the string representaion of a given tree node.
 */
function getNodeType(node: Declaration): string {
    if (node instanceof ClassDeclaration) {
        return 'Class'
    }
    else if (node instanceof MethodDeclaration) {
        return 'Method';
    }
    else if (node instanceof FunctionDeclaration) {
        return 'Method';
    }
    else if (node instanceof InterfaceDeclaration) {
        return 'Interface';
    }
    else if (node instanceof Namespace) {
        return 'NameSpace';
    }
    else if (node instanceof PropertyDeclaration) {
        return 'Property';
    }

}

/**
 * Gets the string representation of the node type.
 * @param {Resource} node - The node you want to get the string representaion from. 
 * @returns The tring representation of the node type.
 */
function getResourceNodeType(node: Resource): string {

    if (node instanceof Namespace) {
        return 'NameSpace';
    }
}

/**
 * Gets the name of a given node.
 * @param {Any} node - The node you want to get the name of.
 * @returns Returns the name of the node.
 */
function getNodeName(node: Any) {
    if (node instanceof ClassDeclaration) {
        return (node as ClassDeclaration).name;
    }
    else if (node instanceof MethodDeclaration) {
        return (node as MethodDeclaration).name;
    }
    else if (node instanceof FunctionDeclaration) {
        return (node as FunctionDeclaration).name;
    }
    else if (node instanceof InterfaceDeclaration) {
        return (node as InterfaceDeclaration).name;
    }
    else if (node instanceof Namespace) {
        return (node as Namespace).name;
    }
    else if (node instanceof PropertyDeclaration) {
        return (node as PropertyDeclaration).name;
    }
}
