// Longest Palindromic Substring Problem ========-----------------==========
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let finalString = "";
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let currentSub = s.substring(i, j + 1);
            if (isPalindrome(currentSub) && currentSub.length > finalString.length) {
                finalString = currentSub;
            }
        }
    }
    return finalString;
};
console.log(longestPalindrome("lkjljlkljljlljljljlljljj"));
