### What Do I know about the problem?
I know that initally since this is an array I need to traverse through it to do SOMETHING.
Now that I have My values up to the total product that they multiply up to. I need to find a way to push these values into the new array. 

What Im thinking I can do first is that when I get the new product in the first loop and can push the results into the new array. But that wont work since The total product jumps from 3 to 6 and stays at 6. And THe output of my Original test case involves an array with a value of 2 in it. 

This is where I can divide! 


### Results
Initially I was able to solve the problem with division with O(n) time complexity.
With the follow-up, I was able to solve it but with a more "brute force" approach that required iterating over the array in a nested fashion, resulting in O(n^2) time complexity.

There was a better solution that involves calculating the "prefix" and "suffix" product relative to each element in the array.  This results in a O(n) time complexity, which is much better than O(n^2).
It took me a while to understand the approach and break it down, but now that I know it I think it'll be pretty useful.

What the purpose of calculating the "prefix" and "suffix" products for each item in the array is that it allows you to only need to go through the array once for the prefixes and once for the suffixes.  In a way, each array is accumulating what the product is thus far as it goes along, which ends up being what the product is of all other elements excluding the current element at the current index.

More specifically, if you look at an array like `[1, 2, 3, 4, 5]`, the results are:

`prefix array:  [ 1, 1, 2, 6, 24 ]`

`suffix array:  [ 1, 5, 20, 60, 120 ]`

`result:  [ 120, 60, 40, 30, 24 ]`

When starting from position 0, the prefix and suffix product is always 1.  This is because technically, there are no products that have happened before position 0.  For the prefix case, there is no prefix for position 0 which is element `1` in the input array.  Why not undefined or 0 instead?  Well, this ends up just causing you to need to manage that case and ensure that the product is calculated correctly for all other positions greater than 0.  A simple way to mitigate this and allow things to multiply without addressing those cases is just to use `1`.  Everything multiplied by `1` doesn't change the value so there is no impact.

For the suffix case, we do the same as the prefix case and start with `1` at position 0.  However, the suffix case is a little different and can be a bit confusing because of the direction we are calculating the result.  To calculate the suffix, we need to reverse the input array.  Why?  This just makes it easier to iterate and calculate the suffix for each position.  Again, walking through it, we start with 1 because there is no suffix product after the end of the array or `5` in this case.  Then we shift to position 1, which is `4` in the reversed input array.  Everything to the "right" of that is just `5`, so we put `5` in position `1`.  For position `2`, we then are getting the suffix for everything to the right of `3` in the input array, which is `4 * 5` which is `20`.  This continues until we get to the end of the reversed input array and you have all your suffixes.

The real fun is when you need to combine the prefix and suffix results to get the actual solution.  The nice thing is that all you have to do is multiply the prefix result at an index with the suffix equivalent.  For example, to get the result for position `0` in the input array, which is the product of everything but the value at position `0` which is `1`, you multiply the prefix at position `0` which is one by the suffix at position `4` or the end of the array, which is a value of `120`.  To think of it another way, you're taking product from the left of `1` (which there isn't anything but we consider nothing just `1` for this purpose) multiplied by the product of everything to the right of `1` in the array which is `2, 3, 4, 5`.  Which is exactly the solution you want!  The product of all other elements other than `1` in the array.  

For simplicity of calculating, I end up reversing the suffix array to better line this up so that `prefixArray[0] * reversedSuffixArray[0]` instead of having to iterate from the end of the suffix array.

### Time to solve
15 minutes to solve with initial solutions
2-3 hours to solve with prefix/suffix approach due to not understanding the approach

### Time to understand
2-3 hours to understand what the heck was going on and ChatGPT + the book just being kinda wack on this.