class Solution:
    def moveZeroes(self, nums) -> None:
        num = 0
        for i in range(len(nums)):





            if nums[i] != 0:



                nums[num], nums[i] = nums[i], nums[num]



                num += 1
