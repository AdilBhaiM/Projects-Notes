
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];

    let result = [];
    let start = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let end = nums[i - 1];
        if (nums[i] !== end + 1) {
            if (end !== start) {
                result.push(`${start}->${end}`);
            } else {
                result.push(`${start}`);
            }
            start = nums[i];
        }
    }

    // Append the last range
    let end = nums[nums.length - 1];
    if (end !== start) {
        result.push(`${start}->${end}`);
    } else {
        result.push(`${start}`);
    }

    return result;
};
