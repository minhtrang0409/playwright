let readline = require('readline-sync');
let randomNumer = generateRandomNumber();
let guessingTime = 0;
do {
    let userNum = getUserNumber();
    if(userNum == randomNumer){
        console.log("Congratulation");
        break;
    }
    guessingTime++;
} while (guessingTime < 3);

function getUserNumber(){

    let userNum = readline.question("Enter a number: ");
    return userNum;
}
function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}