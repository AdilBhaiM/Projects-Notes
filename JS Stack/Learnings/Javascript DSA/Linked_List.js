// Recommended ----  First practice how to use classes in real time then jump into the NodeList aka linkedList concept

// class usersAttendance {
//     static userCount = 0;
//     constructor(username) {
//         this.username = username;
//         usersAttendance.userCount++;
//     }

//     static printCount(username) {
//         console.log(`Total Users Count is ${this.userCount} and Printer name is ${username}`)
//     }

//     printUsername() {
//         console.log(`Hello my name is ${this.username}`)
//     }
// }

// const Names = ["John", "Stacy", "Micheal"];

// for (let name of Names) {
//     const currName = new usersAttendance(name)
//     currName.printUsername()
// }
// usersAttendance.printCount("Adil")




// Linked List ========-----------------==========


// class Node {
//     constructor(data){
//         this.data = data,
//         this.next = null
//     }
// }

// class linkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

// }


// new linkedList()
// const newNode = new Node(null);

// console.log(newNode);




// Valid Paranthesis Problem ========-----------------==========

/**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//     let stack = [];

//     for (let i=0; i<s.length; i++){
//         let char = s[i];
        
//         if(char === '(' || char === '[' || char === '{'){
//             stack.push(char);

//         }
//         else {
//             let last = stack.pop();
//             if(
//                 (char === ')' && last !== '(') ||
//                 (char === ']' && last !== '[') ||
//                 (char === '}' && last !== '{')
//             ) return false;
//         }
//     }

//     return stack.length === 0;
// };

// console.log(isValid('{[]}'));




// Longest Palindromic Substring Problem ========-----------------==========

var longestPalindrome = function(s) {
    let palindromFound = false;
    let finalString = "";
    if (s.length <= 1 || (s.length == 2 && s[0] !== s[1])) {
        finalString = s[0];
    }else{
        for(let i=0; i <= s.length; i++){
            finalString = s[i];
            let partialValue = "";
            for(let j=i+1; j <= s.length; j++){
                partialValue = partialValue + s[j]
                if(s[j] === finalString){
                    palindromFound = true;
                    break;
                }
            }
            if(palindromFound === true) break;
        }
    }
    return finalString;
};


console.log(longestPalindrome("aa"));