### Results
Again I was pretty close to the solution but still needed some refinement. 

What I had for my solution was that I start out with a space in memory to keep track of the parens I have so far.
Which led me to then loop through the string argument and create another variable to keep track of the index I'm on.

Next I created the condition is in which I push the paren value into the parensSoFar if it strictly equates '(', '{' or '['. Else I would pop off the invalid character. 

Next I floundered and Added conditionals asking if the first character in put in strictly equates '(', '{' or '[' and if the next character equates ')', '}' or ']' and then to pop off the previous character.

And when I went through test cases it turned out to invalidate the '()' argument. 


Looking back at this problem what I need to do is  after making a parens variable and looping through the string. I need to keep track of the character im at per the loop's index so far.

THEN I need to make a conditional strictly asking if the character strictly equates to '(' or '{' or '['. Im not sure what the difference is when asking `if (character === "(" || character === "{" || character === "[") ` vs `if (character === "(" || "{" || "[") `
...
 [ After taking some time to look at it... the WHOLE conditional would be true if any of those characters come up in the value every time, which is not what we want per se](2-strings/1-valid-parens/day2/Screenshot 2024-05-31 at 12.08.25 PM.png)

Next in the else condition, this is where if we don't find a character strictly equating the '(' or '{' or '[' at any time, we pop off the previous character from the seenSoFar Variable and save it as  a new variable (previousChar).

Next, still inside the else condition, we proceed to make an if statement for each of the characters. If the current character is either ')', '}' or ']' AND (&&) the previous character we popped off does not equal '(' or '{' or '[' we automatically return false.

Remember we need to strictly ask about each individual condition and chain them together with OR to make this correct.

And outside of the entire loop since all the other conditions aren't met, we return true as the default.

### Time to solve
40 mins to work through to an incomplete solution.


### Time to understand
2 hours to understand the gist of the solution to try again next week. 

### Things To Remember: 
- Keep using Sora to talk to as a guide!
- I will need to change my process around as I got for interviews I will be instead of doing a 4 day rule, shrink the timeline to 2 days. So after I don't solve the problem after 2 days, I look at a solution and in detail explain what I understand about it in my notes and then work it in figma. This will keep me going in my work to understand things quickly and get a broad sense to problems.
- Keep Figma up somewhere 
- If you need to record yourself while doing the problem so you can talk it out then do so!
- Keep talking to Cody if that helps!