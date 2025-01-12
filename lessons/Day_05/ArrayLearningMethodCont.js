const { isEvenNumber } = require("../Day_04/UtilMethods");

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //DELETE | splice
// let returnValue = myArray.splice(3, 2);
// console.log(returnValue);

// console.log(myArray);


//Add
// //DELETE | splice
// console.log(myArray);
// let returnValue2 = myArray.splice(2, 9, 11);
// console.log(returnValue2);

console.log(myArray);

for (let index = 0; index < myArray.length; index++) {
    if(isOddNumber(myArray[index]))
        removeElementFromArray(myArray, index);
        index--;
    // if (myArray[index] % 2 !==0){
    //     myArray.splice(index, 1);
    // }
    
}
console.log(myArray);

function isOddNumber() {
    return number %2 !==0;
}

function removeElementFromArray (array, startIndex) {
    const defaultDeleteCount = 1 ; 
    array.splice(startIndex, defaultDeleteCount);

}