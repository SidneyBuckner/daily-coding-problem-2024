/** 
 * Link: https://www.geeksforgeeks.org/how-to-get-index-of-greatest-value-in-an-array-in-javascript/#
Greatest Index Value in an array
Given an integer array nums, locate the largest value in the array 
and return its index.

Example:

* Input: [-2,1,-3,4,-1,2,1,-5,-4],
* Output: 8
* Explanation: [4] is the largest integer in the array at index 3.
*
* Input: [34, 105, -50, 42, 14, -5, 86]
* Output: 1
* Explanation: [105] is the largest integer in the array at index 1.
*
* Input: [-5, -1, 8, -9]
* Output: 0
* Explanation: [8] is the largest integer in the array at index 2.
*/

// where is the starting point?
// do we rely on the index in which were at and add from there?
// find the largest number in the array
const sampleArray = [-2,1,-3,4,-1,2,1,-5,-4];
const sampleArray2 = [34, 105, -50, 42, 14, -5, 86];
const sampleArray3 = [-5, -1, 8, -9];

// Steps:
// variable for index
//variable for the biggest number so far 
//iterate through array - condtional if the number at [variableIndex] > array[i]
// put it in result variable;

const biggestValueIndex = (array) =>{
let indexValue = 0;
let result;
for (let i = 0; i < array.length; i++) {
    if(array[indexValue] < array[i]){
        console.log(`BIGGEST NUMBER SEEN: ${array[i]} at Index: ${[i]}`)

    } else{
        indexValue +=1;
    }
    
}

}
console.log(biggestValueIndex(sampleArray));

