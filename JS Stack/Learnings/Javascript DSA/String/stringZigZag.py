class Solution:
    def convert(self, s: str, numRows: int) -> str:
        n = len(s)
        if n < numRows or n == 1 or numRows == 1:
            return s
        currRow = 0
        direction = +1
        myRows = ['' for _ in range(numRows)]
        for i in range(n):
            myRows[currRow] += s[i]
            if currRow == numRows-1 and direction == +1:
                direction = -1
            elif currRow == 0 and direction == -1:
                direction = +1
            if direction == +1:
                currRow += 1
            else:
                currRow -= 1
            print(myRows)
            print(currRow)
        result = ''.join(myRows)
        return result
a = Solution()
b = a.convert("PAYPALISHIRING", 3)
print(b)