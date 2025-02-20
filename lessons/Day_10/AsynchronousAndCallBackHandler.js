//**
// 
// 1. Send request to server - > get ressponse //Asynchronous
// 2. Process response
// 3. Validate response
//  */


const url = 'https://jsonplaceholder.typicode.com/todos/1';
sendRequest(url, function(response) {
    processResponse(response, function(statusCode) {
        validateResponse(statusCode);
    });
});

//Mimic Asynchronous
function sendRequest(url, callBackFn){
console.log(`1. Send request to endpoint ${url}`);
setTimeout(function() {
    callBackFn({ status : 200})
}, 2000);
}

//Mimic Asynchronous
function processResponse(response, callBackFn) {
    console.log(`2. Processing the response`);
    setTimeout(function() {
        callBackFn(response.status)
}, 2000);
}
//Mimic Synchronous
function validateResponse(status) {
    console.log(`3. Validating response`);
    if(status === 200) {
        console.log('PASSED');
    } else {
        console.error('FAILED');
    }}
