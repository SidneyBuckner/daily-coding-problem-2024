### Results
Not resolved. Observations coming:

What I first gleamed from this problem is that the items in the array needed to be sorted. And this might be my mistake for assuming since one of the arguments in my samples is a bunch or strings.

I first thought I needed to sort the array, and then because Im not wanting to deal with half of the values, I keep diving the values somehow in half until I get the biggest number.

Ana had suggested a couple things:
- I needed to first understand the types. The structure in which I will have the output in. 
- Since this is a tree where nodes and leaves can change this would be an object as the most efficient data structure to manipulate things. A multidimensional array MIGHT help but its  not as easy to deal with. 

`type Tree = {
type: “node”;
value: number;
left: Tree
right: Tree
}
| {type: “leaf ”; value: number}
`
### Time to solve



### Time to understand


### Things To Remember: 
- Keep using Sora to talk to as a guide!
- I will need to change my process around as I got for interviews I will be instead of doing a 4 day rule, shrink the timeline to 2 days. So after I don't solve the problem after 2 days, I look at a solution and in detail explain what I understand about it in my notes and then work it in figma. This will keep me going in my work to understand things quickly and get a broad sense to problems.
- Keep Figma up somewhere 
- If you need to record yourself while doing the problem so you can talk it out then do so!
- Keep talking to Cody if that helps!