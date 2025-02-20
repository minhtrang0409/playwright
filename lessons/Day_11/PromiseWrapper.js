
console.log('1. Start');
waitForResponse().then(goToTheCoffeeShop);

function goToTheCoffeeShop(){
    console.log('3. Go to the coffee shop');
}
// Wrap an asynchronous function into a promise 
// pupeteer
// MCP - Claude 
function waitForResponse(){
    return new Promise(wrapper);
}

function wrapper(resolve, reject) {
    setTimeout(function() {
        console.log('2. Trang oi');
        
        resolve('Hello');
    }, 2000);

}