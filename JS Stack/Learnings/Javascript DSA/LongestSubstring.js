/**
 * Returns the length of the longest substring without repeating characters.
 * @param {string} s - The input string.
 * @return {number} - The length of the longest substring without repeating characters.
 */
function lengthOfLongestSubstring(s) {
    let currObj = {};
    // let currSubString = [];
    let maxLen = 0;
    for (let i = 0; i < s.length; i++){
        const currChar = s[i];
        if(currObj[i] !== undefined && maxLen > Object.keys(currObj).length){

        }
    }
}

console.log(lengthOfLongestSubstring("oshodfaoshf"));