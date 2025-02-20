let myString = " Hello World     ";
console.log(myString);

//Length
console.log(myString.length);

//chharAt
console.log(myString.charAt(0));

// Print each Character
for (let index = 0; index < myString.length; index++) {
    console.log(myString.charAt(index));
}

// elimate space
let trimStr = myString.trim();
console.log(trimStr);
console.log(trimStr.charAt(0));

// Cắt chuỗi
let strToBeCut = "Thoi gian";

//Inclusive
let startIndex = 0;

//Exclusive
let endIndex = 3;

let subString = strToBeCut.substring(startIndex, endIndex);
console.log(subString);

//Split
console.log(strToBeCut.split(" "));

