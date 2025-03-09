// Let mergerdArray = []
// Method 01: 

/**
 * Let mergerdArray = []
    Method 01: 
    Loop over first array -> pussh all element intpu mergeArray
    Loop over 2 nd array then so the same as above
    Use bubblesort in the prev solution

WWhile 2 array still has values: fooIndex < fooLength && barIndex < barLength
if fooValue <= barValue
    push fooValue into mergeArray
    fooIndex++

else 
    pussh barValue into mergeArray

    Loop 1st array from fooIndex < fooLength => push all value into merger array
    Loop 2nd array from barIndex < barLength => push all value into merge array
 * 
 */


let a = [1, 12, 16, 28, 34];
let b = [1, 13, 16, 27, 99];
let merged = [];

const aLength = a.length;
const bLength = b.length;
let aPosition = 0;
let bPosition = 0;


while(aPosition < aLength && bPosition < bLength){
    const aValue = a[aPosition];
    const bValue = b[bPosition];
    if(aValue <= bValue){
        merged.push(aValue);
        aPosition++;

    }else{
        merged.push(bValue);
        bPosition++;
    }

}

while(aArrayStillHaveElement()){
    merged.push(a[aPosition]);
    aPosition++;
}
while(bArrayStillHaveElement()){
    merged.push(b[bPosition]);
    bPosition++;
}

function aArrayStillHaveElement(){
    return aPosition < aLength;
}
function bArrayStillHaveElement(){
    return bPosition < bLength;
}   

console.log(merged);
