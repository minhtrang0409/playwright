// Support function
// Duoc dung o nhieu noi( khac file minh dang dung) - Service function- Utility functions. 

// let isEvenNumber = isEvenNumber(3);
// console.log(`Is 3 even number : ${isEvenNumber_}`);

function isEvenNumber(number){

    console.log(number %2);
    return number % 2 === 0;
    
}
function isOddNumber(number){

    console.log(number %2);
    return number % 2 != 0
    
}
module.exports = {isEvenNumber, isOddNumber};