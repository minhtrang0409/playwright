/**
 * Two sum
 * [3,4, 22, 1], target number:8
 * -> [1, 3]
 */

//Burte foce ( thuat toan vet can)
/**
 outer loop index 0 -> 
    firstNum
    inner loop index + 1 -> l -1
        if( firstNum + current == target)
            return [firstIndex, secondIndex]
return[]
 * 
 */

// Time Comlexity On^2
const givenArray =[3, 7, 22, 3]
const targetNum = 6

let indices = findIndicesUsingBruteForce(givenArray, targetNum);
console.log(indices);
let indices_2 = findIndicesUsingMap(givenArray, targetNum);
console.log(indices_2);

function findIndicesUsingBruteForce(array, targetNum) {
    for (let firstNumIndex = 0; firstNumIndex < array.length-1; firstNumIndex++) {
        const firstNum = array[firstNumIndex];
        for (let secondNumIndex = firstNumIndex + 1; secondNumIndex < array.length; secondNumIndex++) {
            const secondNum = array[secondNumIndex];
            if(secondNum == targetNum - firstNum){
                return[firstNumIndex, secondNumIndex];
            }
            
        }
    }
    return[];
}

// 0(n)
const numMap = new Map()
function findIndicesUsingMap(array, targetNum) {
    for (let currentNumIndex = 0; currentNumIndex < array.length-1; firstNumIndex++) {
        const currentNum = array[currentNumIndex];
        const lookingNum = targetNum - currentNum; 
        if (numMap.has(lookingNum)){
            return [numMap.get(lookingNum), currentNumIndex]
        }
        numMap.set(currentNum, currentNumIndex);
 
    }
    return[];
}
