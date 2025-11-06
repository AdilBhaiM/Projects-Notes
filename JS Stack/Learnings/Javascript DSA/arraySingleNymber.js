function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num; // XOR cancels out duplicate numbers
    console.log(result)
  }
  return result;
}

let res = singleNumber([1, 2, 6, 1, 6])
console.log("RESULT :" , res)
