/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = -1
    while(i >= (digits.length * -1)){
        if(digits[digits.length + i] < 9){
            digits[digits.length + i] += 1;
            return digits;
        }
        digits[digits.length + i] = 0;
        i += -1;
    }
};
let result = plusOne([1, 2, 3, 4])
console.log(result)