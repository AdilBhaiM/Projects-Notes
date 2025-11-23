var missingNumber = function(nums) {

    let xor = 0;


    const n = nums.length;

    
    
    // XOR all numbers from 0..n

    for (let i = 0; i <= n; i++) {

        xor ^= i;
    }
    
    // XOR all elements of nums

    for (let num of nums) {
        xor ^= num;
    }
    
    return xor;

};
