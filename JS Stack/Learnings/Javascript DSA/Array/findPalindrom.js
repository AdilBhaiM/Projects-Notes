/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x < 0 || (x % 10 == 0 && x !== 0)){
        return false
    }

    let r = 0;
    let v = x

    while(x > r){
        r = r * 10 + v % 10
        v = Math.floor(v / 10)
    }

    return v === r || v === Math.floor(r)

};

let result = isPalindrome(12)
console.log(result)