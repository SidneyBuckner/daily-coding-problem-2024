/** 
 * Link: https://github.com/vineetjohn/daily-coding-problem
 * Given an array of integers, return a new array such that each element at index i
 * of the new array is the product of all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
 * If our input was [3, 2, 1], the expected output would be [2, 3, 6].

 * input: [3, 2, 1]
 * output: [2, 3, 6]
 * input: [1, 2, 3, 4, 5]
 * output: [120, 60, 40, 30, 24]
*/

/** 
 * Separate array for my product to go in
 * Multiply or divide my indices to get to the product
 * Iterate through this array - Loop
*/
const sampleArray = [3,2,1];
const sampleArray2 = [1, 2, 3, 4, 5];
const productOfElements = (array)=>{
const productArray = [];
let totalProduct = 1;
let quotient;
for (let i = 0; i < array.length; i++) {
    totalProduct *= array[i];
    console.log(` Array value [i]: ${array[i]}, Total Product: ${totalProduct}`);
}

for (let j = 0; j < array.length; j++) {
quotient = totalProduct / array[j];
productArray.push(quotient);
    
}
return productArray;
}
console.log(`Input: ${sampleArray} - Output: ${productOfElements(sampleArray)}`);
console.log(`Input: ${sampleArray2} - Output: ${productOfElements(sampleArray2)}`);