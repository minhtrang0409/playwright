export default class AppError extends Error {
   
    public statusCode: number;
    public isOperational: boolean;
   
    constructor( message: string, statusCode = 500, isOperational = true ) {
        super( message );
        this.statusCode = statusCode;
        this.isOperational = isOperational;
    }
}

export class ValidationError extends AppError {
    constructor( message: string ) {
        super( message, 400, true );
    }
}

export class NotFoundError extends AppError {
    constructor( message: string ) {
        super( message, 404, true );
    }
}