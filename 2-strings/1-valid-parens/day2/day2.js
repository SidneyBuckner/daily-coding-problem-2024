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
    let seenSoFar = [];
for (let i = 0; i < string.length; i++) {
    let paren = string[i]
    // if(paren === '(' || paren === '[' || paren ==='{'){
        if(paren === '(' || '[' ||'{'){
        seenSoFar.push(paren);
        console.log("Whats been seen so far: ", seenSoFar);
    } 
    else{
        let invalidChar = seenSoFar.pop();
    }
    if(paren === '(' && string[i+1] === ')'){
        invalidChar = seenSoFar.pop();
    }
    if(paren === '[' && string[i+1] === ']'){
        let invalidChar = seenSoFar.pop();
    }
    if(paren === '{' && string[i+1] === '}'){
        let invalidChar = seenSoFar.pop();
    }
    

}

}
console.log(validParens('()'));
console.log(validParens('(}'));