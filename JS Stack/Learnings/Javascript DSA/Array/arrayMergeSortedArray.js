/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let j = m-1
    let p = n-1
    for(let i = nums1.length-1; i >= 0; i--){
        if(nums1[j] < nums2[p]){
            nums1[i] = nums2[p]
            p--;
        }else{
            nums1[i] = nums1[j]
            j--;
        }
    }
    return nums1
};

let result = merge([1, 2, 7, 0, 0, 0, 0], 3, [3, 4, 5, 6], 4)
console.log(result)

// merge([1, 2, 7, 0, 0, 0], 3, [3, 4, 5, 6], 4)