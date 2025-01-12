//const UtilMethods = require('./UtilMethods');
//Destructure
const { isEvenNumber, isOddNumber, isEvenNumber  } = require ('./UtilMethods.js')

// . dot notation
let isEvenNumber_ = UtilMethods.isEvenNumber (3);
console.log(`Is 3 even number : ${isEvenNumber_}`);

// Get an user inout then check if it's even or odd num
let userInput = getUserInput();
//let isEvenNumber = isEvenNumber(userInput);

if(isEvenNumber){
    console.log(`The number ${userInput} is and even number`);
}else{
    console.log(`The number ${userInput} is and odd number`);
}

function getUserInput() {
    return 3;
}