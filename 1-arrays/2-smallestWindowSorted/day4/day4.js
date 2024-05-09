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
// const sampleArray3 = [3,5,23,4,60,8,27,80];
// const sampleArray4 = [2,4,6,8,10,12];

const smallestSortWindow = (array)=>{
    const n = array.length;
    let start = -1,
        end = -2,
        min = array[n - 1],
        max = array[0];

    // Traverse the array from left to right to find the end index of the unsorted subarray
    for (let i = 1; i < n; i++) {
        max = Math.max(max, array[i]);
        if (array[i] < max) {
            end = i;
        }
    }

    // Traverse the array from right to left to find the start index of the unsorted subarray
    for (let i = n - 2; i >= 0; i--) {
        min = Math.min(min, array[i]);
        if (array[i] > min) {
            start = i;
        }
    }

    return [start, end];
}
// console.log(smallestSortWindow(sampleArray));
console.log(smallestSortWindow(sampleArray2));
// console.log(smallestSortWindow(sampleArray3));
// console.log(smallestSortWindow(sampleArray4));

function findUnsortedWindow(arr) {
    let n = arr.length;
  
    // Find the first element that breaks the increasing order from the left
    let left = 0;
    for (let i = 1; i < n; i++) {
      if (arr[i] < arr[left]) {
        left = i;
      }
    }
  
    // If no element breaks increasing order, return -1, -1 (sorted)
    if (left === 0) {
      return [-1, -1];
    }
  
    // Find the last element that breaks the decreasing order from the right
    let right = n - 1;
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > arr[right]) {
        right = i;
      }
    }
  
    return [left, right];
  }
  
  // Example usage

  const result = findUnsortedWindow(sampleArray2);
  console.log(result);

console.log(smallestWindowToSortForInput(sampleArray2));