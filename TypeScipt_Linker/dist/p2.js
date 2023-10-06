"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_parser_1 = require("typescript-parser");
const position = 16; // character position of the start of the second line
const parser = new typescript_parser_1.TypescriptParser();
const filePath = '../codegena-master';
const fileName = 'app.ts';
function seek() {
    return __awaiter(this, void 0, void 0, function* () {
        const pfile = yield parser.parseFile(fileName, filePath);
        //console.log((pfile.declarations[0] as ClassLikeDeclaration).properties); // output: 2
        console.log(pfile); // output: 2
        //console.log((pfile.declarations[0] as ClassLikeDeclaration).methods[0]); // output: 2
        //console.log(typeof (pfile.resources[0] as Namespace)); // output: 2
        //console.log(typeof(pfile.resources));
    });
}
seek();
// row number of the second line
