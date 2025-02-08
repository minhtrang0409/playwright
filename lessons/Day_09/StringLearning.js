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