/**
 * pseudo code
 * minvalue = first element
 * maxValue = first element
 * loop over the array
 *      if element is less than the min value
 *          re-assign min value
 *      else if element is bigger than the max value
 *          re-assign max value
 * 
 * if(minValue === maxValue)
 *  all element in the array has same value
 * print out the the results
 */

let array = [1, 1, 3, 1, 1]
let minValue = array[0];
let maxValue = array[0];
for (let index = 0; index < array.length; index++) {
    const value = array[index]
    if (value < minValue) {
        minValue = value;
    } else if (value > maxValue) {
        maxValue = value;
    } 
}
if (minValue === maxValue) {
    console.log(`There is no min/max value, all value are same: ${minValue}`);
} else {
    console.log(`Min Value: ${minValue} and Max Value : ${maxValue}`);
}
