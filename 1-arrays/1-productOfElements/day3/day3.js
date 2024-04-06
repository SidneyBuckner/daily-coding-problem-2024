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
 * 
 * THIS TIME DO IT WITHOUT DIVISION!!!!!
*/

//Space for new array values
//Space for product to push into new array
//reset product - Do I reset to 0 or 1?
//Nested loops - 
const sampleArray = [3,2,1]
const sampleArray2 = [1, 2, 3, 4, 5]
const productNoDivision = (array)=>{
const result = [];
let product = 1;
for (let i = 0; i < array.length; i++) {
console.log(array[i]);
for (let j = 0; j < array.length; j++) {
    console.log(`Index I: ${array[i]}, Index J: ${array[j]}`)
    if(array[i]!== array[j]){
        product *= array[j];
    }

}
result.push(product);
product = 1;
}
return result;
}
console.log(productNoDivision(sampleArray2));