
console.log('1. Start');
setTimeout(callbackFunction.bind({age: 18}, 'Trang'), 2000);

// console.log('2. Running');
console.log('3. End');

function callbackFunction(name) {
    console.log(`1. Age ${age}`);
    console.log(`2. Hello ${name}`);
}


