function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num; // XOR cancels out duplicate numbers
  }
  return result;
}



