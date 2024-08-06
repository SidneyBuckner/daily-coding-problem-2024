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

// Steps:
// iterarting through this array
// new array variable
// product variable
// quotient variable 

const array1 = [3,2,1];
const array2 = [1,2,3,4,5];

//SOlution with Division - 9mins
// const productOfElements = (array)=>{
// let newArray = [];
// let totalProduct = 1;
// let quotient;

// for (let i = 0; i < array.length; i++) {
// // console.log(`Total product BEFORE: ${totalProduct}`)   
// totalProduct = totalProduct * array[i];
// // console.log(`Total product AFTER: ${totalProduct}`);
// }

// for (let j = 0; j < array.length; j++) {
//     // console.log(`Product J: ${array[j]}`);
//     quotient = totalProduct / array[j];
//     // console.log(quotient);
//     newArray.push(quotient);

// }
// return newArray;
// }


//solution without division
// Steps:
//Need New array variable
//need product variable
//Iterate through array twice:
// Once - indicating first index
    //nest loop if the index J doesnt euqal index i then multiply rest of indecies together and push result into new array
    //reset the product to 1.  
const productWithoutDivision = (array) =>{
    let newArray = [];
    let totalProduct = 1;
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
        for (let j = 0; j < array.length; j++) {
        if(array[i] !== array[j]) {
            console.log(`total product BEFORE: ${totalProduct}`);
            totalProduct = totalProduct * array[j];
            console.log(`total product AFTER: ${totalProduct}`);
            // newArray.push(totalProduct);

        }
        
        }
        newArray.push(totalProduct);
        totalProduct = 1;
      
    }

    return newArray;
}
console.log(productWithoutDivision(array1));
// console.log(productWithoutDivision(array2));