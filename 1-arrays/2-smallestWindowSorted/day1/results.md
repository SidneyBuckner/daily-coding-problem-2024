### Results
NOT SOLVED!

Most of today's work was primarily in Figma as I was trying to understand why i might be stuck with making the comparisons between indices to then add to the start bound and end bound variables.

What I came up with is using a results array for the correct indices. I also saved a space in memory for the variables representing the start bound and for the end bound.

At the first instance of the loop I needed to start the process of finding the starting bound place to sort. I made a comparison to the index 0 to the index before it. If 'array[i-1]' didn't exist, then I pushed the index of that value to the start bound. If the previous index of the array DID exist, then I made a comparison to the current index and the next index after: if 'array[i] > array[i+1]' then made the end bound the next index at 'array[i+1]'. So I think Im close when it comes to this solution but I think im going to work more in figma with this tomorrow. Because what Im still struggling with is what I need to make proper comparisons to in terms of the values in the loop and what happens when the next value is smaller that the current value Im currently iterating through in the loop.

I also made the mistake of putting the actual value of the array into the startBound and endBound variables which was not what I wanted, the indices need to be there. So after I changed the values to the correct state, my initial attempt at the problem resulted in my answer being the indices 0 and 2 being the answer. When in reality I wanted thm I think pushed over by one index. Im on the right path but I think theres something still missing with how Im executing the comparisons and Im not sure what it is yet, like I've said previously.

### Things To Remember: 
- Keep using Sora to talk to as a guide
- Continue to have figma open for explaining your thought process as you go along
- Console.log EVERYTHING!!!

### How can I explain this to a 5yo?
idk yet! 

### Time to solve
Took whole 60 minutes to come up with  solution and draw stuff out to test my theory. Solution was incorrect.

### Time to understand
N/A Need to come back to my Figma at a later time to help me understand better.