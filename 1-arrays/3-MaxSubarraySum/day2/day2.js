/** 
 * Link: https://github.com/vineetjohn/daily-coding-problem
Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum and return its sum.

Example:
* Input: [-2,1,-3,4,-1,2,1,-5,4],
* Output: 6
* Explanation: [4,-1,2,1] has the largest sum = 6.
*
* Input: [34, -50, 42, 14, -5, 86]
* Output: 137
* Explanation: [42,14,-5,86] has the largest sum = 137.
*
* Input: [-5, -1, -8, -9]
* Output: 0
* Explanation: We would choose not to take any elements.
*/

// where is the starting point?
// do we rely on the index in which were at and add from there?
// find the largest number in the array
const sampleArray = [-2,1,-3,4,-1,2,1,-5,4];
const sampleArray2 = [34, -50, 42, 14, -5, 86];
const sampleArray3 = [-5, -1, -8, -9];

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
console.log(maxSubarraySum(sampleArray3));
module.exports = maxSubarraySum;