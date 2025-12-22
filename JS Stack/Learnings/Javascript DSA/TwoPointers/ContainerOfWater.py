class Solution:
    def maxArea(self, height: List[int]) -> int:
        maxValue = 0
        left = 0
        right = len(height)
        for i in range(len(height)):
            if(left == right):
                return maxValue
            value = min(height[left], height[right]) * left-right
            maxValue = max(maxValue, value)
            if left < right:
                left = i
            else:
                right = i - right