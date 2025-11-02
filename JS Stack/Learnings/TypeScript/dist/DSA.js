"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    nums1.splice(m);
    nums1 = [...nums1, ...nums2];
    nums1.sort((a, b) => a - b);
    console.log(nums1)
}
;
merge([1,2,3,0,0,0], 3, [2,5,6], 3);
//# sourceMappingURL=DSA.js.map