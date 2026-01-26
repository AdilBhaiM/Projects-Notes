import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
        LowerString = s.lower()
        new_string = re.sub(r'[,\s\.]', '', LowerString)
        cleaned_string = re.sub(r'[^a-zA-Z0-9]', '', new_string)
        n = len(cleaned_string)
        left = 0
        right = n-1
        while left < right:
            if cleaned_string[left] == cleaned_string[right]:
                left += 1
                right -= 1
            else:
                return False
        return True
a = Solution()
b = a.isPalindrome("A man, a plan, a canal: Panama")
print(b)