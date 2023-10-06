"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorObject = exports.CodePathLookUpResponse = exports.CodePathLookUpRequest = exports.RequestObject = exports.ResponseObject = void 0;
class ResponseObject {
    constructor() {
        this.jsonRpc = '2.0';
    }
}
exports.ResponseObject = ResponseObject;
class RequestObject {
    constructor() {
        this.jsonRpc = '';
        this.method = '';
        this.params = null;
        this.id = 0;
    }
}
exports.RequestObject = RequestObject;
class CodePathLookUpRequest {
}
exports.CodePathLookUpRequest = CodePathLookUpRequest;
class CodePathLookUpResponse {
}
exports.CodePathLookUpResponse = CodePathLookUpResponse;
class ErrorObject {
}
exports.ErrorObject = ErrorObject;
