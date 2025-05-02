const { log } = require("console");

//Type: Function declaration
function add(a, b) {
    return a + b;
}

//Type: Function expression
const add_ = function (a, b) {
    return a + b;
}

//Type: Arrow function => Giai quyết synctax gọn
const arrowAddNumber = (a, b) => {
    return a + b;
}
const arrowAddNumber2 = (a, b) => console.log(a - b);


const arrowAddNumber3 = a => log(a);

//Object literal
const person = {
    name: 'John',
    age: 20,
    sayHello: function () {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 2000)
        console.log('Hello');
    }
}

person.sayHello();

const array = [1, 2, 3, 4, 5];
const oddNums = array.filter(num => num % 2 !== 0);
log(oddNums);

