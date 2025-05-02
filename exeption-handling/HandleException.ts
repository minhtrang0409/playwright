import AppError from "./AppError";

export default function handleException( error: unknown ): void {
    if ( error instanceof AppError ) {
        console.log( "Operational Error:", error.message );
        return error;
    }

    if ( error instanceof Error ) {
        console.log( "Error:", error.message );
        return new AppError( error.message, 500, false );
    }
    
    else {
        console.log( "Unknown Error:", error );
    }
}