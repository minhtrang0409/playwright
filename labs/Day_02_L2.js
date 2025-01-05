const readLine = require('readline-sync');

let number = Number(readLine.question('Input a number: '));
let intNumber = parseInt(number)
if(number===intNumber){
let result = number % 2;

if(result === 0){
    console.log('Your number is an Even');
}else{
    console.log('Your number is an Odd');
} 
} else {
    console.log( "Please input a number");
    
}