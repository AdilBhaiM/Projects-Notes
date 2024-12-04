from numpy import *


# array = numpy.array('i', [1, 2, 3, 1, 4, 6])
# print (array)
# print(array[1])
# array.insert(1, 8)
# print(array[1])   


#####   POP Method #####

# array = numpy.array('i', [1, 2, 3, 1, 4, 6])
# for i in array:
#     print(i)
# print(array[1])
# afterPopArray = array.pop(1)

# index = array.index(1)
# print (index)


##### Remove method #######

# array.remove(1)

# n = len(array)
# i = 0
# while i < n:
#     print (array[i])
#     i+=1
# print("Return poped index object = ", afterPopArray)




########    Space Methods #############

# a = linspace(1, 6, 6)   #,     #a = logspace(1, 3, 5)   #output is (10 to 1000)   #and     #a = arange(5)  #output (1.0 to 5.0)
# for b in a:
#     c = int(b)
#     print (c)
# print("__________")
# n = len(a)
# i = 0
# while i<n:
#     m = int(a[i])
#     i += 1
#     print (m)





##############    Array dimensions    ###################

#### 1D Arrays

# a = array([1,2,3,4])

# b = a
# print(index)



###### 2D Array

# s = array([[2, 3, 4, 5],
#                 [6, 7, 9, 8]])

# print()



###############  Printing Multi Dimensions of Array    ########

# for i in array:
#     for j in i:
#         print(j)
#         print()

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




# array = array([[1, 2, 3, 4],
#                [5, 6, 7, 8],
#                [5, 6, 7, 8]])

############# splitting array by this method   #############

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


