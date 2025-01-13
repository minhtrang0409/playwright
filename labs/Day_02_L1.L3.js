const readLine = require('readline-sync');

let height = Number(readLine.question('Input your height (m): '));
let weight = Number(readLine.question('Input your weight (kg): '));



// Validation the number is inputted

if (isNaN(height) || isNaN(weight)) {
    console.log("Please input the correct number");
}else { 
    let BMI = weight / (height * height);

    if (BMI < 18.5){
        console.log("You are Underweight, Please increase your weight");
    } else if(BMI < 24.9){
        console.log("You are Normal weight");
    } else if(BMI < 29.9){
        console.log("You are Overweight, Please decrease your weight");
    } else if(BMI>=30) {
        console.log("You are Obesity, Please decrease your weight");
    }
}