/**
 * Returns the length of the longest substring without repeating characters.
 * @param {string} s - The input string.
 * @return {number} - The length of the longest substring without repeating characters.
 */
function lengthOfLongestSubstring(s) {
    // Map to store the last index of each character seen
    const lastSeenIndex = {};
    // Start index of the current window (substring without repeats)
    let windowStart = 0;
    // Maximum length found
    let maxLength = 0;

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const currentChar = s[windowEnd];
        // If the character is already in the window, move the start
        if (lastSeenIndex[currentChar] !== undefined && lastSeenIndex[currentChar] >= windowStart) {
            windowStart = lastSeenIndex[currentChar] + 1;
        }
        // Update the last seen index of the current character
        lastSeenIndex[currentChar] = windowEnd;
        // Update the maximum length if needed
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("oshodfaoshf"));