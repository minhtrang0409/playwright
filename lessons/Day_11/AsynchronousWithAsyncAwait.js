//**
// 
// 1. Send request to server - > get ressponse //Asynchronous
// 2. Process response
// 3. Validate response
//  */


const url = 'https://jsonplaceholder.typicode.com/todos/1';
main();
async function main() {
    const response = await sendRequest(url);
    const statusCode = await processResponse(response);
    validateResponse(statusCode);
    console.log('Done');
    
}



//Mimic Asynchronous
function sendRequest(url){
    console.log(`1. Send request to endpoint ${url}`);
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        resolve({ status : 200})
        }, 2000);
});
}

//Mimic Asynchronous
function processResponse(response) {
    console.log(`2. Processing the response`);
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        resolve(response.status)
        }, 2000);
});
}
//Mimic Synchronous
function validateResponse(status) {
    console.log(`3. Validating response`);
    if(status === 200) {
        console.log('PASSED');
    } else {
        console.error('FAILED');
    }}
