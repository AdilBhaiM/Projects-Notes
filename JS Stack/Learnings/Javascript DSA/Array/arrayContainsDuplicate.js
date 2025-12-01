/**
 * @param {number[]} nums
 * @param {number} k
 * 
 * @return {boolean}
 * 
 */


function containsNearbyDuplicate(nums, k) {
    let mySet = new Set();
    for(let i = 0; i < nums.length; i++){
        if(mySet.has(nums[i])) return true;

        mySet.add(nums[i]);

        if(mySet.size > k){
            mySet.delete(nums[i-k])
        }
    }
    return false;
};


// [23,4, 6, 7, 8, 89, 9, 23, 6]