// Valid Paranthesis Problem ========-----------------==========

/**
//  * @param {string} s
//  * @return {boolean}
//  */
var isValid = function(s) {
    let stack = [];

    for (let i=0; i<s.length; i++){
        let char = s[i];
        if(char === '(' || char === '[' || char === '{'){
            stack.push(char);

        }
        else {
            let last = stack.pop();
            if(
                (char === ')' && last !== '(') ||
                (char === ']' && last !== '[') ||
                (char === '}' && last !== '{')
            ) return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid('{[]}'));

