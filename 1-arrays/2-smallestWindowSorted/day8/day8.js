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

// what needs to happen when its already sorted -  [0,0] or something like that. 

// Steps:
// Iterate through Array
// comparison with current index value and next index value
//if current index value is smaller than  max number value seen so far. then current index will be a bound

const smallestSortWindow = (array)=>{
let startBound = 0;
let endBound = 0;
let minNumberSeen = array[array.length - 1];
let maxNumberSeen =  array[0];

for (let i = 0; i < array.length; i++) {
maxNumberSeen = Math.max(maxNumberSeen, array[i]);
    if(array[i] < maxNumberSeen){
        endBound = i;
        // console.log(`The Endbound is ${i}`);
    }   
}

for (let j = array.length - 1; j >= 0; j--) {
    // console.log(`Counting down: ${array[j]}`);
    minNumberSeen = Math.min(minNumberSeen, array[j]);
    if(array[j] > minNumberSeen){
        startBound = j;
        // console.log(` Two spaces after index j is: ${ array[j+2]}`)
        // console.log(`The Startbound is ${j}`);
    }    
}

return [startBound, endBound]
}
console.log(smallestSortWindow([2,3,4,1]));
console.log(smallestSortWindow(sampleArray));
console.log(smallestSortWindow(sampleArray2));
console.log(smallestSortWindow(sampleArray3));

module.exports = smallestSortWindow;