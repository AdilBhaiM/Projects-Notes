/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr = nums1.concat(nums2).sort((a, b) => a - b)
    const len = mergedArr.length
    if(len % 2 === 1){


        
        // Odd number of elements, return the middle one
        return mergedArr[Math.floor(len / 2)];
    } else {
        // Even number of elements, return the average of two middle elements
        let mid1 = mergedArr[len / 2 - 1];
        let mid2 = mergedArr[len / 2];
        return (mid1 + mid2) / 2;
    }



};

findMedianSortedArrays([3,5,8,6], [1,9,2,4])