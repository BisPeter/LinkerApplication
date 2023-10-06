"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = void 0;
const typescript_parser_1 = require("typescript-parser");
const helper_1 = require("./helper");
const ts = require("typescript");
function find(dsl, tree, type, file) {
    if (dsl == '') { }
    if (dsl.startsWith('.')) {
        var node;
        if (type == 'File') {
            node = tree.resources;
        }
        else if (type = 'NameSpace') {
            node = tree.resources;
        }
        const newString = dsl.substring(1);
        const [token, rest] = (0, helper_1.extractFirstToken)(newString);
        for (let i = 0; i < node.length; i++) {
            const res = node[i];
            if (res instanceof typescript_parser_1.Namespace) {
                const ns = res;
                if (ns.name === token) {
                    if (rest == '' || rest === undefined) {
                        const rowNumber = getRowNumber(ns.start, file);
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
        var inNode;
        if (type == 'File') {
            inNode = tree.declarations;
            if (inNode === undefined)
                return '';
        }
        else if (type == 'NameSpace') {
            inNode = tree.declarations;
        }
        const newString = dsl.substring(1);
        const [token, rest] = (0, helper_1.extractFirstToken)(newString);
        for (let i = 0; i < inNode.length; i++) {
            const res = inNode[i];
            if (res instanceof typescript_parser_1.InterfaceDeclaration) {
                const ns = res;
                if (ns.name === token) {
                    if (rest == '' || rest === undefined) {
                        const rowNumber = getRowNumber(ns.start, file);
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
        var clNode;
        if (type == 'File') {
            clNode = tree.declarations;
        }
        else if (type == 'NameSpace') {
            clNode = tree.declarations;
        }
        const newString = dsl.substring(1);
        const [token, rest] = (0, helper_1.extractFirstToken)(newString);
        for (let i = 0; i < clNode.length; i++) {
            const res = clNode[i];
            if (res instanceof typescript_parser_1.ClassDeclaration) {
                const ns = res;
                if (ns.name === token) {
                    if (rest == '' || rest === undefined) {
                        const rowNumber = getRowNumber(ns.start, file);
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
        var [token, rest] = (0, helper_1.extractFirstToken)(newString);
        if (type == 'File' || type == 'NameSpace') {
            var fuNode;
            if (type == 'File') {
                fuNode = tree.declarations;
            }
            else if (type == 'NameSpace') {
                fuNode = tree.declarations;
            }
            for (let i = 0; i < fuNode.length; i++) {
                const res = fuNode[i];
                if (res instanceof typescript_parser_1.FunctionDeclaration) {
                    const ns = res;
                    if (ns.name === token) {
                        if (rest == '' || rest === undefined) {
                            const rowNumber = getRowNumber(ns.start, file);
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
            var meNode;
            if (type == 'Interface') {
                meNode = tree.methods;
            }
            else if (type == 'Class') {
                meNode = tree.methods;
            }
            for (let i = 0; i < meNode.length; i++) {
                const res = meNode[i];
                if (res instanceof typescript_parser_1.MethodDeclaration) {
                    const ns = res;
                    if (ns.name === token) {
                        if (rest == '' || rest === undefined) {
                            const rowNumber = getRowNumber(ns.start, file);
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
        var prNode;
        if (type == 'Interface') {
            prNode = tree.properties;
        }
        else if (type == 'Class') {
            prNode = tree.properties;
        }
        const newString = dsl.substring(1);
        const [token, rest] = (0, helper_1.extractFirstToken)(newString);
        for (let i = 0; i < prNode.length; i++) {
            const res = prNode[i];
            if (res instanceof typescript_parser_1.PropertyDeclaration) {
                const ns = res;
                if (ns.name === token) {
                    if (rest == '' || rest === undefined) {
                        const rowNumber = getRowNumber(ns.start, file);
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
exports.find = find;
function getRowNumber(position, file) {
    //console.log(file.sourceFile);
    const { line } = ts.getLineAndCharacterOfPosition(file.sourceFile, position);
    const row = line + 1; // row number of the second line
    return row;
}
