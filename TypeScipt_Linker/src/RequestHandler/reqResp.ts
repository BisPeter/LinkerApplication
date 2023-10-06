import { CodeElement } from "../antlrHelper/CodeElement";
import { LinkerError } from "../Errors/error";

/**
 * Represents a response object.
 */
export class ResponseObject<T> {

  /**
   * The name of the protocol.
   */
  jsonRpc: string = '2.0';

  /**
   * The result of a given request.
   */
  result: T;

  /**
   * The error object occured by working the request.
   */
  error: LinkerError;

  /**
   * The id of the response. (must be the id of the request).
   */
  id: number | null;
}

/**
 * Represents a JSON-RPC2 request object.
 */
export class RequestObject<T> {

  /**
   * The name of the protokol.
   */
  jsonRpc: string = '';

  /**
   * The method that is beeing called by the request.
   */
  method: string = '';

  /**
   * The parameters of the request.
   */
  params: T | null = null;

  /**
   * The id of the request.
   */
  id: number = 0;

}

/**
 * Represents a {@link CodePathLookUp} object.
 */
export class CodePathLookUpRequest {

  /**
   * The searchstring whit what a codeelement is searched.
   */
  searchString: string

  /**
   * The resultCount of how many results should be returned.
   */
  resultCount: number
}

/**
 * 
 */
export class CodePathLookUpResponse {

  /**
   * Represents a {@link CodePathLookUpResponse} class.
   */
  appName: string

  /**
   * The found codeElements.
   */
  codeElements: CodeElement[]
}

/**
 * Represents a JSON-RPC2.0 error object.
 */
export class ErrorObject {

  /**
   * The error code of the error that occured.
   */
  code: number
  /**
   * The message that describes the error.
   */
  ErrorMessage: string;
}