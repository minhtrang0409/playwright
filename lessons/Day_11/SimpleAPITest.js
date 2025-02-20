const toto1Endpoint = 'https://jsonplaceholder.typicode.com/todos/1';

// console.log(fetch(toto1Endpoint));

fetch(toto1Endpoint)
.then(getResponse)
.then(validateResponse);


function getResponse(rawResponse) {
    return rawResponse.json();
}
function validateResponse(todo) {
    if(todo.completed) {
        console.log('PASSED');
    } else {
        console.log('Task is in progress');
    }
    console.log('Done testing');
}
