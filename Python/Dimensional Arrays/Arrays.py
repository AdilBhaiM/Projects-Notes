# from numpy import *
import numpy as np



##############    Array dimensions    ###################

#### 1D Arrays

# a = np.array([1,2,3,4])
# print(type(a))



###### 2D Array ######

# a = np.array([[[1, 2, 3, 4], [1, 2, 3, 4]],[[1, 2, 3, 4], [1, 2, 3, 4]]])

# s = np.array([[2, 3, 4, 5],
#            [6, 7, 9, 8]])

# print(s)

###### 3D Array ######

arr = np.array([["A", "B", "C"],
                ["E", "F", "G"],
                ["H", "I", "J"],
                ["h", "t", "w"]]
                )
                # [["K", "L", "M"], ["N", "O", "P"], ["Q", "R", "S"]],
                # [["T", "U", "V"], ["W", "X", "Y"], ["Z", "D", " "]]])

print(arr[1, 0]) # Slice the array and get the rows of your choice of the 2D array

# print(arr)

###############  Pirnting Multi Dimensions of Array   ########

# for i in arr:
#     print(i) # [1, 2, 3, 4]
#     for j in i:
#         print(j)


# n = len(array)
# i=0
# while i<n:
#     b = len(array[i])
#     j = 0
#     while j < b:
#         print(array[i][j])
#         j +=1
#     i += 1



#################    Creating multi dimensions of array by inputing the rows and columns

# row = int(input("Enter Total number of rows = "))
# column = int(input("Enter Total number of column = "))

# array = zeros((row, column), dtype=int)
# length = len(array)

# for i in range(length):
#     row = len(array[i])
#     for j in range(row):
#         here = input(f"Enter {j} Element of {i} Row = ")
#         array[i][j] = here
#     print()




############# splitting array by this method   #############


# array = array([[1, 2, 3, 4],
#                [5, 6, 7, 8],
#                [5, 6, 7, 8]])


# n = array[0:2, 0:2]

# print(n)

# i = 0
# while i<length:
#     xlength = len(array[i])
#     j = 0
#     while j<xlength:
#         element = int(input("Enter First element of row = "))
#         array[i][j] = element
#         j+=1
#     i+=1

# print(array)


