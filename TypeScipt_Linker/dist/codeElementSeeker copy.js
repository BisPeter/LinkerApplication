/*import { Namespace, Resource, File, Declaration, InterfaceDeclaration, ClassDeclaration, FunctionDeclaration, MethodDeclaration, PropertyDeclaration } from "typescript-parser";
import { extractFirstToken } from "./helper";
import * as ts from 'typescript';
import { TsFile } from './src/FileHelper/tsFile';

export function find(dsl: string, tree: object, type: string, file: TsFile): string {
    if (dsl == '') { }
    if (dsl.startsWith('.')) {
        var node: Resource[];

        if (type == 'File') {
            node = (tree as File).resources;
        }
        else if (type = 'NameSpace') {
            node = (tree as Namespace).resources;
        }

        const newString = dsl.substring(1);
        const [token, rest] = extractFirstToken(newString)

        for (let i = 0; i < node.length; i++) {
            const res = node[i];
            if (res instanceof Namespace) {
                const ns = res as Namespace;
                if (ns.name === token) {
                    if (rest == '' || rest === undefined) {
                        const rowNumber = getRowNumber(ns.start as number, file);
                        var ret = file.relativePath + '\\' + file.fileName + '#L' + rowNumber;
                        return ret;
                    }
                    else {
                        return find(rest, res, 'NameSpace', file);
                    }
                }
            }
        }
        return '';
    }
    else if (dsl.startsWith('!')) {
        var inNode: Declaration[];

        if (type == 'File') {
            inNode = (tree as File).declarations;
            if (inNode === undefined)
                return '';
        }
        else if (type == 'NameSpace') {
            inNode = (tree as Namespace).declarations;
        }

        const newString = dsl.substring(1);
        const [token, rest] = extractFirstToken(newString)

        for (let i = 0; i < inNode.length; i++) {
            const res = inNode[i];
            if (res instanceof InterfaceDeclaration) {
                const ns = res as InterfaceDeclaration;
                if (ns.name === token) {
                    if (rest == '' || rest === undefined) {
                        const rowNumber = getRowNumber(ns.start as number, file);
                        var ret = file.relativePath + '\\' + file.fileName + '#L' + rowNumber;
                        return ret;
                    }
                    else {
                        return find(rest, res, 'Interface', file);
                    }
                }
            }
        }
        return '';
    }
    else if (dsl.startsWith(':')) {
        var clNode: Declaration[];

        if (type == 'File') {
            clNode = (tree as File).declarations;
        }
        else if (type == 'NameSpace') {
            clNode = (tree as Namespace).declarations;
        }

        const newString = dsl.substring(1);
        const [token, rest] = extractFirstToken(newString)

        for (let i = 0; i < clNode.length; i++) {
            const res = clNode[i];
            if (res instanceof ClassDeclaration) {
                const ns = res as ClassDeclaration;
                if (ns.name === token) {
                    if (rest == '' || rest === undefined) {
                        const rowNumber = getRowNumber(ns.start as number, file);
                        var ret = file.relativePath + '\\' + file.fileName + '#L' + rowNumber;
                        return ret;
                    }
                    else {
                        return find(rest, res, 'Class', file);
                    }
                }
            }
        }
        return '';


    }
    else if (dsl.startsWith(';')) {

        var newString = dsl.substring(1);
        newString = newString.replace('()', '');
        var [token, rest] = extractFirstToken(newString)

        if (type == 'File' || type == 'NameSpace') {
            var fuNode: Declaration[];
            if (type == 'File') {
                fuNode = (tree as File).declarations;
            }
            else if (type == 'NameSpace') {
                fuNode = (tree as Namespace).declarations;
            }

            for (let i = 0; i < fuNode.length; i++) {
                const res = fuNode[i];
                if (res instanceof FunctionDeclaration) {
                    const ns = res as FunctionDeclaration;
                    if (ns.name === token) {
                        if (rest == '' || rest === undefined) {
                            const rowNumber = getRowNumber(ns.start as number, file);
                            var ret = file.relativePath + '\\' + file.fileName + '#L' + rowNumber;
                            return ret;
                        }
                        throw new Error();
                    }
                }
            }

            return '';
        }
        else if (type == 'Interface' || type == 'Class') {
            var meNode: MethodDeclaration[];
            if (type == 'Interface') {
                meNode = (tree as InterfaceDeclaration).methods;
            }
            else if (type == 'Class') {
                meNode = (tree as ClassDeclaration).methods;
            }

            for (let i = 0; i < meNode.length; i++) {
                const res = meNode[i];
                if (res instanceof MethodDeclaration) {
                    const ns = res as MethodDeclaration;
                    if (ns.name === token) {
                        if (rest == '' || rest === undefined) {
                            const rowNumber = getRowNumber(ns.start as number, file);
                            var ret = file.relativePath + '\\' + file.fileName + '#L' + rowNumber;
                            return ret;
                        }
                        throw new Error();
                    }
                }
            }

            return '';
        }
    }
    else if (dsl.startsWith('*')) {
        var prNode: PropertyDeclaration[];

        if (type == 'Interface') {
            prNode = (tree as InterfaceDeclaration).properties;
        }
        else if (type == 'Class') {
            prNode = (tree as ClassDeclaration).properties;
        }

        const newString = dsl.substring(1);
        const [token, rest] = extractFirstToken(newString)

        for (let i = 0; i < prNode.length; i++) {
            const res = prNode[i];
            if (res instanceof PropertyDeclaration) {
                const ns = res as PropertyDeclaration;
                if (ns.name === token) {
                    if (rest == '' || rest === undefined) {
                        const rowNumber = getRowNumber(ns.start as number, file);
                        var ret = file.relativePath + '\\' + file.fileName + '#L' + rowNumber;
                        return ret;
                    }
                    throw new Error();
                }
            }
        }
        return '';
    }
    return '';
}

function getRowNumber(position: number, file: TsFile): number {
    //console.log(file.sourceFile);
    const { line } = ts.getLineAndCharacterOfPosition(file.sourceFile, position);
    const row = line + 1; // row number of the second line
    return row;
}
*/ 
