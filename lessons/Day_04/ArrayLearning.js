//CREATE
let myArray = [1, 5, 4, 6, "u" ];

//first element's index: 0
//last element's index: array's length -1

console.log(`Array's length: ${myArray.length}`);

// READ 

for( let index = 0; index < myArray.length; index++) {
console.log(myArray[index]);
}

for (let index = myArray.length -1; index >= 0; index--) {
    console.log(myArray[index]);
}

//Undefined holes
myArray[5] = 5;
myArray.push(6);
myArray.push([9, 8]);
console.log(myArray);

let removedValue = myArray.pop();
console.log(`removeValue: ${removedValue}`);
console.log(`After remove: ${myArray}`);

