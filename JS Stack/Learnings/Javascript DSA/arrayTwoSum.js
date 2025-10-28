/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const seen = new Map(); // stores num → index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // If we've seen the complement, we found a pair
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    // Otherwise, store current number with its index
    seen.set(nums[i], i);
  }

  return []; // No pair found
};
