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

const biggestValueIndex = (array) =>{
    let biggestIndexSoFar = 0;
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i]} : ${array[biggestIndexSoFar]}`)
        if(array[i] > array[biggestIndexSoFar]){
            biggestIndexSoFar = i;
            console.log(`BIGGEST NUMBER SO FAR: ${array[biggestIndexSoFar]}, Index: ${biggestIndexSoFar}`);  
        }    
    }
return biggestIndexSoFar;

}

console.log(biggestValueIndex(sampleArray2));


// for loop 
//  - Inside for loop: isolate number to determine the biggest in size somehow
//  -pull it out to its own variable to keep track
//  when the biggest number is isFunctionDeclaration, ask for its index