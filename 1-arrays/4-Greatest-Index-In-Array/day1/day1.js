/** 
 * Link: https://github.com/vineetjohn/daily-coding-problem
Greatest Index Value in an array
Given an integer array nums, locate the largest value in the array 
and return its index.

Example:

* Input: [-2,1,-3,4,-1,2,1,-5,4],
* Output: 8
* Explanation: [4] is the largest integer in the array at index 8.
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
const sampleArray = [-2,1,-3,4,-1,2,1,-5,4];
const sampleArray2 = [34, 105, -50, 42, 14, -5, 86];
const sampleArray3 = [-5, -1, 8, -9];

// const biggestNumberSeen = (array)=>{
// let biggestNum = array[0]
// for (let i = 0; i < array.length; i++) {
//     if(array[i] > biggestNum){
//         biggestNum = array[i];
//     }
// console.log(biggestNum) ;
// }
// }
// biggestNumberSeen(sampleArray);

const maxSubarraySum = (array)=>{
    let maxSubarraySum = 0;
// const result;
for (let i = 0; i < array.length; i++) {
    let sumSoFar = 0;
    sumSoFar+= array[i];
    maxSubarraySum = Math.max(sumSoFar, maxSubarraySum);
    for (let j = i+1; j < array.length; j++) {
            // console.log(`${sumSoFar} + ${array[j]} = ${sumSoFar + array[j]}`);
        sumSoFar += array[j];
        maxSubarraySum = Math.max(sumSoFar, maxSubarraySum);
        }
        // console.log(sumSoFar);
}
console.log(maxSubarraySum)
    }
console.log(maxSubarraySum(sampleArray2));
module.exports = maxSubarraySum;