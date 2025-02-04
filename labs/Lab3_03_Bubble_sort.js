/*

Pseudo code: 
unsortedPosition = array(arrLenght -1)
Loop index = 0 -> unsortedPosition -1

*/

let array = [12, 34, 1, 16, 38]

let unsortedPosition = array.length - 1
while(unsortedPosition > 0){
    for (let index = 0; index < array.length; index++) {
        const leftValue = array[index];
        const rightValue = array[index+1];
        
        if (leftValue > rightValue) {
            swap(array, index)
        }
    }
    unsortedPosition--
    console.log(unsortedPosition);
    
}

console.log(array);


function swap(array, index){
    let temp = array[index];
    array[index] = array[index+1];
    array[index+1] =  temp;
}
