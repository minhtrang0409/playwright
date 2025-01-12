const { evenNumber } = require('./UtilMethods.js');
let myArray = [1, 2, 3, 4, 5]

//Filter to get even numbers from array
// Higher order function: HOF ( no nhan vao 1 function k chi la 1 parameter)- funtion phai tra ve boolan 
let evenNumbers = myArray.filter(isEvenNumber) 
console.log(evenNumber);
console.log(myArray);



function isEvenNumber(value, index, originArray){
    return value % 2 == 0; 
}