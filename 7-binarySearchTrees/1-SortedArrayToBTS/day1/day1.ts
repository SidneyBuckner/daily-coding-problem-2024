/** 
 * Link: https://github.com/vineetjohn/daily-coding-problem
Given an array of integers, create a binary search tree.
Input could be an array like: [10, 4, 8, 11, 15, 30, 1, 3, 5]

Examples:
* Input: [10, 4, 8, 11, 15, 30, 1, 3, 5] Output: 10
* Input: [-10, 4, 8, 11, 15, -30, 1, 3, 5] Output: -10
* Input: [] Output: null
* Input: [5] Output: 5
* Input: ["apple", "banana", "cherry", "date", "elderberry"] Output: Apple (lexicographically first)
*/

// const binarySearchTree = (string)=>{
// return 'IM WORKING';
// }
// console.log();

type Tree = {
    type: "node" 
    value: number;
    left: Tree
    right: Tree
    } | {type: "leaf"; value: number} |
    {type: "empty" }


const tree = {
    value: 10,
    type: "node",
    left: { 
    value: 4,
type: "node",
    left: {
        value: 1,
        type: "leaf",
          },
    right:{
         value: 8,
        type: "leaf”,
         },
       },
    right: {
        value: 11,
        type: "node",
        right: {
         value: 15,
         type:  "node",
           right: {
         value: 30,
         type:  "leaf”,
          },
       }
    }
};


// function to add element to the tree. 
// assume we already have a tree

// assuming we have tree with value 10
const addElementToTree = (tree: Tree, value: number): Tree => {

    //when we start with an empty tree we want to add a leaf and its value

if(tree.type === "empty"){
return {
    value: value,
    type: "leaf"
}

}

    //deal with base case or infinite loop
    if( tree.type === "leaf" ){

        return {
            value: tree.value,
            type: "node",
            left: {
            type: "leaf",
            value: value,
            },
            right: {
                type: "empty",
            },
            }

    }

     return {
        value: 10,
        type: "node",
        left: { 
          value: 4
          type: "node",
        left: {
            value: undefined
            type: undefined,
              },
        right:{
             value: 8
            type: "leaf",
             }
           },
        right:undefined
        }




}
addElementToTree({ type: "empty"}, 10);

addElementToTree({value: 10, type: "leaf"}, 4)
addElementToTree({
    value: 10,
    type: "node",
    left: {
    type: "leaf",
    value: 4
    }
    right: undefined,
    }, 8)

//case if its a node and return next thing

// is undefined okay to have as a value for the right?
