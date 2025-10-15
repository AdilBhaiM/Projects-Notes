# from numpy import *
# from functools import reduce
# a = 20.23
# b = a + float(30)
# print(b)


# # ---------- Nested Loop Tasks ------------- 



# #    * * * * *
# #    * * * * *
# #    * * * * *
# #    * * * * *


# i = 0
# for i in range(1, 6):
#     for j in range(1, 6):
#         print("*", end=" ")
#     print()




# #    * 
# #    * * 
# #    * * * 
# #    * * * * 
# #    * * * * *

# r = 6
# for i in range(1, r):
#     for j in range(1, i+1):
#         print("*", end=" ")
#     print()




# #    * * * * *
# #    * * * * 
# #    * * * 
# #    * * 
# #    * 
 

# r =6
# for i in range(r, 0, -1):
#     for j in range(1, i):
#         print("*", end=" ")
#     print()






# #   1 
# #   1 2 
# #   1 2 3 
# #   1 2 3 4 
# #   1 2 3 4 5 



# r = 5
# for i in range(1, 6):
#     for j in range(1, i+1):
#         print(j, end=" ")
#     print()




# i = {1, 2, 3, 4, 5, 6, 7, 8, 9}

# for j in i:
#     for r in range(1, j+1):
#         print("$", end=" ")
#     for u in range(r, 9):
#         print("£", end=" ")
#     print()





# #              *
# #            * *
# #          * * *
# #        * * * *
# #      * * * * *


# n=5
# for i in range(n):
#     for j in range(i, n):
#         print(" ", end=" ")
#     for j in range(i+1):
#         print("*", end=" ")
#     print()



# #              *
# #            * * *
# #          * * * * *
# #        * * * * * * *
# #      * * * * * * * * *



# n=5
# for i in range(n):
#     for j in range(i, n):
#         print(" ", end=" ")
#     for j in range(i):
#         print("*", end=" ")
#     for j in range(i+1):
#         print("*", end=" ")
#     print()




# #    * * * * * * * * *
# #      * * * * * * *
# #        * * * * *
# #          * * *
# #            *



# n=5
# for i in range(n):
#     for j in range(i):
#         print(" ", end=" ")
#     for j in range(i, n):
#         print("*", end=" ")
#     for j in range(i, n-1):
#         print("*", end=" ")
#     print()




# #              *
# #            * * *
# #          * * * * *
# #        * * * * * * *
# #      * * * * * * * * *
# #        * * * * * * *
# #          * * * * *
# #            * * *
# #              *


# n=5
# for i in range(n):
#     for j in range(i, n):
#         print(" ", end=" ")
#     for j in range(i):
#         print("*", end=" ")
#     for j in range(i+1):
#         print("*", end=" ")
#     print()
# for i in range(n):
#     for j in range(i):
#         print(" ", end=" ")
#     for j in range(i, n):
#         print("*", end=" ")
#     for j in range(i, n-1):
#         print("*", end=" ")
#     print()



# TotalElements = int(input("Input numnber of elements for an array = "))
# array = zeros(TotalElements, dtype=int)
# for j in range(len(array)):
#     Element = int(input("Enter Element = "))
#     array[j] = Element
# i = 0
# n = len(array)
# while i<n:
#     print(array[i])
#     i += 1

# nums = [2, 2, 1, 1]

# print("Your Answer is ", reduce(equal, nums))
# print()

# class Bird:
#     def sound(self):
#         print("Birds make sound.")

# class Crow(Bird):
#     def Caw(self):
#         print("Crow make sound.")

# class Cat(Bird):
#     def meow(self):
#         print("Cat make sound.")

# bird = Bird()
# bird2 = Crow()
# bird3 = Cat()

# bird.sound()
# bird2.sound()
# bird3.sound()

# from array import *
# arr_len = int(input("How many numbers do you want to find the average of? = "))
# arr = array('i' , [])
# for i in range(1, arr_len+1):
#     num = int(input(f"Write your {i} number = "))
#     arr.append(num)

# sum_value = sum(arr)/arr_len

# print(type(arr))