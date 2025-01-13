
const readline = require('readline-sync');
let arrivalTime = readline.question('Arrival time: ');
Number(arrivalTime);
let isHeOnTime = (arrivalTime === 7);


if(isHeOnTime){
    console.log("Let's talk");
} else {
    console.log("Write a letter.. ");
}
//**
// 1. In the root dir: npm init --y
// 2. npn i readline-sync
//  */