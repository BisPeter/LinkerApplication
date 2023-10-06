"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hallo = exports.f = void 0;
const fs = require("fs");
const path = require("path");
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var nn;
(function (nn) {
    let namespace1;
    (function (namespace1) {
        let namespace2;
        (function (namespace2) {
            function hallo() {
            }
            namespace2.hallo = hallo;
        })(namespace2 || (namespace2 = {}));
    })(namespace1 || (namespace1 = {}));
})(nn || (nn = {}));
function f(number, ss) {
}
exports.f = f;
class hh {
    get name() {
        return this.name;
    }
    hallo() {
    }
}
class kk {
    get name() {
        return this.name;
    }
    hallo() {
    }
}
function hallo() {
}
exports.hallo = hallo;
const files = fs.readdirSync("C:\\Temp\\Repositories\\TS_Test");
const ffff = files.some(file => path.extname(file) === '.ts');
console.log('hh');
