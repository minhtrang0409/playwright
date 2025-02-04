let array = [1, 2, 3, 4, 5];

/*
loop over the array
    if element is odd number 
        oddNumCount++
    else
        evenNumCount++
print out the result 
*/
let oddNumCount = 0;
let evenNumCount = 0;
for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (isOddnumber(value)) {
        oddNumCount++;
    } else {
        evenNumCount++;
    }
}
console.log(`Even numbers: ${evenNumCount}`);
console.log(`Odd numbers: ${oddNumCount}`);

function isOddnumber(value) {
    return value % 2 !== 0;
}
