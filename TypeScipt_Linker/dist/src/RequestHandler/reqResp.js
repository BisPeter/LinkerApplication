"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorObject = exports.CodePathLookUpResponse = exports.CodePathLookUpRequest = exports.RequestObject = exports.ResponseObject = void 0;
/**
 * Represents a response object.
 */
class ResponseObject {
    constructor() {
        /**
         * The name of the protocol.
         */
        this.jsonRpc = '2.0';
    }
}
exports.ResponseObject = ResponseObject;
/**
 * Represents a JSON-RPC2 request object.
 */
class RequestObject {
    constructor() {
        /**
         * The name of the protokol.
         */
        this.jsonRpc = '';
        /**
         * The method that is beeing called by the request.
         */
        this.method = '';
        /**
         * The parameters of the request.
         */
        this.params = null;
        /**
         * The id of the request.
         */
        this.id = 0;
    }
}
exports.RequestObject = RequestObject;
/**
 * Represents a {@link CodePathLookUp} object.
 */
class CodePathLookUpRequest {
}
exports.CodePathLookUpRequest = CodePathLookUpRequest;
/**
 *
 */
class CodePathLookUpResponse {
}
exports.CodePathLookUpResponse = CodePathLookUpResponse;
/**
 * Represents a JSON-RPC2.0 error object.
 */
class ErrorObject {
}
exports.ErrorObject = ErrorObject;
