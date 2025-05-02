export function divide ( a: number, b: number ): number {
    if ( b === 0 ) {
        throw new Error( "Cannot divide by zero" );
    }
    return a / b;
}

let result = divide( 10, 0 );

try {
    result = divide( 10, 0 );
} catch ( error ) {
    console.log("Error:", error );
}

console.log( result );

