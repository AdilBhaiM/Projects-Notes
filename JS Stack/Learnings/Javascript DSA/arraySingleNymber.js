function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num; // XOR cancels out duplicate numbers
    console.log(result)
  }
  return result;
}

let res = singleNumber([1, 2, 6, 1, 6])
console.log("RESULT 1 :" , res)




// -----------> Single Number 2 -------------


function singleNumber2(nums) {

  let ones = 0, twos = 0;

  for (let num of nums) {
    ones = (ones ^ num) & ~twos;
    twos = (twos ^ num) & ~ones;
  }

  return ones;

}

let res2 = singleNumber2([1, 2, 6, 1, 6, 6, 1])
console.log("RESULT 2 :" , res2)