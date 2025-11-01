/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {

    let i = -1
    while(i >= (digits.length * -1)){

        if(digits[i] < 9){
            digit[i] += 1;
            return digit;
        }

        digits[i] = 0;
        i += -1;
    }
};