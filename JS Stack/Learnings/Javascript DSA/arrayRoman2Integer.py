class Solution:
    def romanToInt(self, s: str) -> int:
        roman = {
            'I' : 1,
            'V' : 5,
            'X' : 10,
            'L' : 50,
            'C' : 100,
            'D' : 500,
            'M' : 1000
        }
        total = 0
        
        for i in range(len(s)):
            currNumeral = s[i]
            if len(s) > i + 1 and roman[currNumeral] < roman[s[i + 1]]:
                total -= roman[currNumeral]
            else:
                total += roman[currNumeral]
        return total