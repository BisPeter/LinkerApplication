"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammar_1 = require("./grammar");
const parser = new grammar_1.DslParser();
const code = `
namespace1.Foo.Bar;
class2.Baz + class3.Qux;
method4(arg1, arg2);
`;
const result = parser.parse(code);
console.log(result);
class hallo {
    kuki() {
    }
}
function kuki() {
}
