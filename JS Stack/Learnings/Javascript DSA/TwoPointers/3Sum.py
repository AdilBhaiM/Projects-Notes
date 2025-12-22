class Solution:
    def threeSum(self, nums):
        triplets = []
        currNum = 0
        n = len(nums)
        nums.sort()
        for i in range(n - 2):
            left = i + 1
            right = n - 1
            currNum = nums[i]
            while left < right:
                currSum = nums[left] + nums[right]
                # print(currSum)
                if currSum == -currNum:
                    triples = [currNum, nums[left], nums[right]]
                    triples.sort()
                    triplets.append(triples)
                    # print(triples)
                    print(triplets)
                if currSum < 0:
                    left += 1
                else:
                    right -= 1
        return triplets
    

a = Solution()
c = a.threeSum([-1,0,1,2,-1,-4])
print(c)