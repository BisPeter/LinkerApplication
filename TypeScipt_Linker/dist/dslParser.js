"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDsl = void 0;
const dSLSections_1 = require("./dSLSections");
function parseDsl(input) {
    let currentSection = '';
    let currentSplitter = '';
    //const input = ".namespace1.namespace2:class1+class2;method1(arg1,arg2)";
    const d = new dSLSections_1.DSLSections();
    for (let i = 0; i < input.length; i++) {
        const currentChar = input[i];
        if (currentChar === '.' || currentChar === '+' || currentChar === ':' || currentChar === '*' || currentChar === '!' || currentChar === ';') {
            if (currentSplitter !== '') {
                updateSection(d, currentSection, currentSplitter);
                currentSection = '';
                currentSplitter = '';
            }
            currentSplitter = currentChar;
        }
        else {
            currentSection += currentChar;
        }
    }
    if (currentSplitter !== '') {
        updateSection(d, currentSection, currentSplitter);
    }
    if (d.method !== undefined && d.method != '') {
        var parts = extractArgsAndMethod(d.method);
        d.method = parts.method;
        d.args = parts.args;
    }
    return d;
}
exports.parseDsl = parseDsl;
function extractArgsAndMethod(str) {
    const startIndex = str.indexOf("(");
    const endIndex = str.indexOf(")");
    if (startIndex === -1 || endIndex === -1) {
        return { method: '', args: [] };
    }
    const method = str.slice(0, startIndex);
    const argsStr = str.slice(startIndex + 1, endIndex);
    const args = argsStr.split(",");
    return { method, args };
}
function updateSection(d, section, splitter) {
    if (splitter === '.') {
        if (d.nameSpace) {
            d.nameSpace += `.${section}`;
        }
        else {
            d.nameSpace = section;
        }
    }
    else if (splitter === '+') {
        if (d.class) {
            d.class += `+${section}`;
        }
        else {
            d.class = section;
        }
    }
    else if (splitter === ':') {
        d.class = section;
    }
    else if (splitter === '*') {
        d.property = section;
    }
    else if (splitter === '!') {
        d.interface = section;
    }
    else if (splitter === ';') {
        d.method = section;
    }
}
