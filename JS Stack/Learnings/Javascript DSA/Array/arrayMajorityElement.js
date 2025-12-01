function majorityElement(nums) {
    let candidate = nums[0]
    let count = 0;
    for(let num of nums){
        if(candidate === num){
            count++;
        }else if(candidate !== num && count === 0){
            candidate = num
        }else{
            count--;
        }
    }
    return candidate;
};