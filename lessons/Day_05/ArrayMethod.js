let array = [1, 2, 3, 4 ]

//Map

let returnValues = array.map(myRule);
console.log(returnValues);
console.log(array);



function myRule(value, index, array) {
    return value * 2;
    
}

// forEach
let userList = [];
array.forEach(addAutomationUserName);

function addAutomationUserName(value, index, array){
    
    userList.push(`AutomationUser_${value}`);
}
console.log(userList);

//Sort - String
let strings = ['B', 'C', 'A']
strings.sort();
strings.reverse();
console.log(strings);

//Sort - Number
let numberArray = [69, 100, 23];
numberArray.sort(sortNumberACS);
console.log(numberArray);
numberArray.sort(sortNumberADS);
console.log(numberArray);

function sortNumberACS(num1, num2) {
    return num1 - num2;
    
}

function sortNumberADS(num1, num2) {
    return num2 - num1;
    
}

//                 67    35    1   
let mixedContent = ['a', 'A', '1'];
mixedContent.sort();
console.log(mixedContent);



