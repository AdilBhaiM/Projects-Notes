/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i
        }else if(nums[i] > target){
            return i
        }else if(i === (nums.length-1)){
            // console.log(nums.length-1)
            // console.log(i)
            return i+1
        }
    }
};
let result = searchInsert([1,3,5,6], 7)

console.log(result)