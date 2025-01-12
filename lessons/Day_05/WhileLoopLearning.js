const readLine = require('readline-sync');
let index = 0
while (index < 5) {
   console.log(index);
   index++
   //Conditional change trigger
   
}


/**
 * --Lucky number game
 * 1. Guess a number
 * 0.Exit
 */
//
let isStillPlaying = true
while(isStillPlaying){
    printGameMenu(); 
    let userOption = getUserOption(); 

    if(userOption ===0 ){
        //contional change trigger
        isStillPlaying = false;
    }else if(userOption === 1){
       let randomNumber = Math.floor(Math.random() * 10) + 1;
       console.log(`Luckey number is ${randomNumber}`);
       
    }else {
        console.log("Nhap sai thong tin");
        
    }
}

console.log('See you again');


function printGameMenu(){
    console.log(`
/**
 * --Lucky number game
 * 1. Guess a number
 * 0.Exit
 */    
        `);
    
}

function getUserOption() {
    return Number(readLine.question('Please input your option'))
}