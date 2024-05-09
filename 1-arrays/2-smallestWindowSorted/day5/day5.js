/** 
 * Link: https://github.com/vineetjohn/daily-coding-problem
Given an array of integers that are out of order, determine the bounds of the smallest window that must be sorted
in order for the whole array to be in sort order.

Examples:
 * input: [3,7,5,6,9]
 * output: (1,3) Indicating the indices of the array.
 * input: [3,5,23,4,60,8,27,80] 
 * output: (1,6)
*/
//Iterate through the array
//Placeholder for previous number/index to compare to the next in the array 
//Placeholder for the beginning bound to note
//Placeholder for the end bound to return 
const sampleArray = [3,7,5,6,9];
const sampleArray2 = [50,36,1,23,4,17,27,39,80];
const sampleArray3 = [3,5,23,4,60,8,27,80];

const smallestSortWindow = (input) => {
    let rightBound = 0
    let largestNumberSeen = Number.MIN_SAFE_INTEGER
 
    for (let i = 0; i < input.length; i++) {
        if (input[i] > largestNumberSeen) {
            largestNumberSeen = input[i]
        } else {
            rightBound = i;
        }
    }
 
    let leftBound = 0
    let smallestNumberSeen = Number.MAX_SAFE_INTEGER
 
    for (let i = input.length - 1; i >= 0; i--) {
        if (input[i] < smallestNumberSeen) {
            smallestNumberSeen = input[i]
        } else {
            leftBound = i;
        }
    }
 
    console.log(`(${leftBound}, ${rightBound})`)
}
console.log(smallestSortWindow(sampleArray));
console.log(smallestSortWindow(sampleArray2));
console.log(smallestSortWindow(sampleArray3));