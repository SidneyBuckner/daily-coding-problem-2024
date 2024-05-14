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

function findUnsortedWindow(arr) {
    // Loop 1: Find the first element out of order from the beginning
    let leftUnsorted = -1;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        leftUnsorted = i;
        break;
      }
    }
  
    // Loop 2: If nothing found, already sorted, return (0, 0)
    if (leftUnsorted === -1) {
      return [0, 0];
    }
  
    // Loop 3: Find the last element out of order from the end
    let rightUnsorted = arr.length - 1;
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] > arr[i + 1]) {
        rightUnsorted = i;
        break;
      }
    }
  
    // Loop 4: Find the minimum and maximum elements within the window
    let min = Infinity, max = -Infinity;
    for (let i = leftUnsorted; i <= rightUnsorted; i++) {
      min = Math.min(min, arr[i]);
      max = Math.max(max, arr[i]);
    }
  
    // Extend window boundaries if needed
    for (let i = 0; i < leftUnsorted; i++) {
      if (arr[i] > min) {
        leftUnsorted = i;
        break;
      }
    }
    for (let i = arr.length - 1; i > rightUnsorted; i--) {
      if (arr[i] < max) {
        rightUnsorted = i;
        break;
      }
    }
  
    return [leftUnsorted, rightUnsorted];
  }
  
  // Example usage
  const [left, right] = findUnsortedWindow(sampleArray2);
  console.log("Unsorted window from index", left, "to", right);
