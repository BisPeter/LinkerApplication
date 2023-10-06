
export class SearchstringParseError extends Error{
    constructor(message: string) {
        super(message);
        this.name = 'SearchstringParseError'; 
    }
}