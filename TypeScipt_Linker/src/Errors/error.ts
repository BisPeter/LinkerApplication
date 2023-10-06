/**
 * Represents a JSON-RPC2.0 error object.
 */
export class LinkerError extends Error{
    constructor(code: number, message: string) {
        super();
        this.message = message;
        this.code = code;
    }

    /**
     * The error code of the error that occured.
     */
    code: number;

    /**
     * The message that describes the error.
     */
    message: string;
}
