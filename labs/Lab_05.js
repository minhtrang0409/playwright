const givenStr = " Hello ban, tui ten Teo, ban cung cung ten Teo Teo luon ah?"
let individualWords = givenStr.replace(/,/gi, "").split(" ");
console.log(individualWords);

let groupWords = groupWordFromString(individualWords);
console.log(groupWords);


function groupWordFromString(individualWords) {
    const returnObj = {};
    for (let word of individualWords) {
        if (returnObj[word]) {
            returnObj[word] = returnObj[word] + 1;
        }
        else {
            returnObj[word] = 1;
        }
    }
    return returnObj;
}