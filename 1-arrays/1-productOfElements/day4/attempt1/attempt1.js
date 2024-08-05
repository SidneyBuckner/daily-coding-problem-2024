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

const input1 = [3,2,1];
const input2 = [1,2,3,4,5];

const productOfElements = (array)=>{
// return 'IM WORKING';
let newProductArray = [];
let totalProduct = 1;
for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    totalProduct *= array[i];
    console.log(totalProduct);

}

for (let j = 0; j < array.length; j++) {
    if(totalProduct!== array[j]){
        totalProduct = totalProduct / array[j];
        console.log(totalProduct);
        newProductArray.push(totalProduct);
    }  
}
return newProductArray;
}
console.log(productOfElements(input1));


// - Looping through array
// - find total product of all elements
// - divide the total product by the index of original array
// -push result of division inside of new array