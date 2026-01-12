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

const productOfElements = (array)=> {
    let result = [];
    let product = 1;
for (let i = 0; i < array.length; i++) {

    if(array[i+1] !== array[i]){
        console.log(`This is the index so far: ${array[i]}`);
        console.log(`this is the next index ${array[i+1]}`)
        product = product*array[i];
    
        result.push(product);
        console.log(`this is the PRODUCT: ${product}`);
    }
    console.log(result);
}
}
console.log(productOfElements([3,2,1]));