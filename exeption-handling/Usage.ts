import handleException from "./HandleException";
import { divide } from "./MathUtils";

try {
    let result = divide( 10, 0 );
} catch ( err ) {
    const error = handleException( err );
    console.error (`${error.message} - ${error.statusCode}`);
}
//**
// 1. Throw: Class Error(Optional: custome error classes, AppError)
// 2. Try... catch -> process (Handle Exception) mã lỗi 200, 300, 400, 500, 404
// 3. Usage ( listerner ) 
// 
//  */