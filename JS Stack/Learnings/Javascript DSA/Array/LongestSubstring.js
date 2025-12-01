/**
 * Returns the length of the longest substring without repeating characters.
 * @param {string} s - The input string.
 * @return {number} - The length of the longest substring without repeating characters.
 */

function lengthOfLongestSubstring(s) {
    let currObj = {};
    let startingIndex = 0;
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        const currChar = s[i];
        if (currObj[currChar] !== undefined && currObj[currChar] >= startingIndex) {
            startingIndex = currObj[currChar] + 1;
        }
        currObj[currChar] = i;
        const currentWindowLength = i - startingIndex + 1;
        if (currentWindowLength > maxLen) {
            maxLen = currentWindowLength;
        }
    }
    return maxLen;
}

console.log(lengthOfLongestSubstring("oshodfaoshf"));
