/** Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

input: () output: valid
input: (( output: not valid
input: '(hello)' output: true
input: ')hello(' output: false
input: '(())' output: false

matchingParentheses('))')//false
matchingParentheses('()')//true
matchingParentheses('(])')//false
*/

const validParens = (string)=>{
    if (string.length === 0) return false;

    const seenSoFar = [];
    // iterate through string
    for (let i = 0; i < string.length; i++) {
      // isolate the string character you're on in the loop
const character = string[i];
      // validate what needs to go into stack - PUSH
if (character === "(" || character === "{" || character === "[") {
    seenSoFar.push(character);
        console.log("stack before: ", seenSoFar);
} else {
        // pop last character from stack
        // console.log("stack before: ", stack);
        const lastCharacter = seenSoFar.pop();
        console.log(lastCharacter);
        console.log("stack after: ", stack);
        // check if the brackets match
        if (
    (character === ")" && lastCharacter !== "(") ||
    (character === "}" && lastCharacter !== "{") ||
    (character === "]" && lastCharacter !== "[")
        ) {
return false;
        }
}
    }

    return true;
};
console.log(validParens('()'));
console.log(validParens('({[)'));