const givenStr = "Hello world, I am Trang"

let individualWords = givenStr.replace(/, /gi, " ").split(" ");
const groupedWords = groupWords(individualWords);
console.log(groupedWords);



//**
// Hello: 1
// world: 2
// 
//  */

function groupWords(words) {
    let wordMap = new Map();
    for (const word of words) {
        if (wordMap.has(word)) {
            let currentCount = wordMap.get(word);
            wordMap.set(word, currentCount + 1);
        } else
        wordMap.set(word, 1);
}
return wordMap;
}