/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m-1)
    nums1 = [...nums1, ...nums2]
    nums1.sort((a,b) => a-b)
    
};

merge([1, 2, 4, 0, 0, 0], 3, [3, 4, 5], 3)