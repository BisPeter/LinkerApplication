/**
 * Represents the parameters of a JSON RPC 2.0 result object.
 */
export class MethodLookUp{
    /**
     * The name of the requested method.
     */
    method:string;

    /**
     * Determines wether the method is supported.
     */
    supported:boolean;
}