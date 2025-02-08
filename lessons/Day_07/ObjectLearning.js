//CREATE
let nhoi = {
    name: "Nhoi",
    age: 20,
    address: "Hanoi",
    "my-gender": "male"
}

//READ
console.log(nhoi.name);
console.log(nhoi["my-gender"]);

//UPDATE
nhoi.age = 21;
console.log(nhoi.age);

//Destructure
const {name, age, ["my-gender"]: gender} = nhoi;
sayHello(nhoi)

//function with destructure params
function sayHello({name, age}){
    console.log(`Hello ${name}, you are ${age} years old`);
}

//DELETE
delete nhoi.age;