// break
// let array = [1, 2, 3, 4, 5 ]

// //tim con so 3 dau tien trong mang
// let targetIndex = -1; 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if(element === 6){
//         targetIndex = index;
//         break;
//     }
// }
// if (targetIndex < 0 ){
//     console.log("No number found! ");
    
// }else {
//     console.log(`The number first fount at index ${targetIndex}`);
    
// }

//Continue

let array = [1, 2, 3, 4, 5 ]

//tim con so 3 dau tien trong mang
let targetIndex = -1; 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element === 6){
        targetIndex = index;
        continue;
    }else {
        console.log(element);
        
    }
}

//An array of Positive interger number
// Increased up to 4 for the rest of number

increaseValues(array)
console.log(array);

function increaseValues (array){
    for (let index = 0; index < array.length; index++) {
        const value = array[index];
        if(value=== 3){
            continue; 
        } else {
            array[index] = array[index] + 3;
        }
    }
    console.log('Funtion is being executed....');
    
}
