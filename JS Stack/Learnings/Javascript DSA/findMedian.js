/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr = nums1.concat(nums2).sort()

    console.log(mergedArr)
};

findMedianSortedArrays([3,5,8,6], [1,9,2,4])