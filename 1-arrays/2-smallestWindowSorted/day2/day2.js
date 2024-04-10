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
const smallestSortWindow = (array)=>{
const result = [];
let startBound;
let endBound;
for (let i = 0; i < array.length; i++) {
    if(!array[i-1] || array[i+1] < array[i]){
        startBound = i;
    }else if(array[i] > array[i +1]){
        // endBound = i+1;

    }

}
result.push(startBound, endBound);
return result;
}
console.log(smallestSortWindow(sampleArray));
