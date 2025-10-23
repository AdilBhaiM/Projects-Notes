import random
# from numpy import *
# from functools import reduce


# -------- Suming up the floats and rounding the result

# a = 20.23
# b = a + float(30)
# print(round(b, 2)) # Round Method. round(value_to_round, limit_after_the_decimal_place)




# -------- Read files

# myFile = open("file.txt")
# text = myFile.read()
# print(text)
# myFile.close()




# -------- Create files

# text = "Hey this is me Adil"
# myFile = open("myfile.txt", 'w') # "w" is mendetory for creating a new file.
# myFile.write(text)
# myFile.close()




# -------- 'with' statement for accessing files. It will make this easier and helps you to get rid of the close method.

# with open("myfile.txt") as file:
#     text = file.read()
#     if("Adil" in text):
#         print("The word 'Adil' is present in this file.")
#     else:
#         print("The word 'Adil' is not present in this file.")
#     print(text)




# -------- High the Scrore Game using .txt file.

# def Play_Game():
#     print()
#     print("Your are Playing a game...")
#     print()
#     score = random.randint(1, 62)
#     with open("high_score.txt") as file:
#         text = file.read()
#         if(text != ""):
#             text = int(text)
#         else:
#             text = 0
#     print(f"You scored {score}...")
#     print()
#     if(text<score):
#         with open("high_score.txt", "w") as f:
#             f.write(str(score))
#     return score
# Play_Game()





# -------- Printing Table of 2 in the tables_of_2.txt file.

# def table():
#     table = ""
#     for i in range(1, 4):
#         for j in range(1, 11):
#             table += f"{i} X {j} = {i*j}\n"
#     with open("table_of_2.txt", "w") as file:
#         file.write(table)
# table()




# -------- Create an array and select its elements of your choice

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





# -------- Average Number Finder

# from array import *
# arr_len = int(input("How many numbers do you want to find the average of? = "))
# arr = array('i' , [])
# for i in range(1, arr_len+1):
#     num = int(input(f"Write your {i} number = "))
#     arr.append(num)

# sum_value = sum(arr)/arr_len

# print(type(arr))






# ---------- Nested Loop Tasks


#    * * * * *
#    * * * * *
#    * * * * *
#    * * * * *


# i = 0
# for i in range(1, 6):
#     for j in range(1, 6):
#         print("*", end=" ")
#     print()




#    * 
#    * * 
#    * * * 
#    * * * * 
#    * * * * *

# r = 6
# for i in range(1, r):
#     for j in range(1, i+1):
#         print("*", end=" ")
#     print()




#    * * * * *
#    * * * * 
#    * * * 
#    * * 
#    * 
 

# r =6
# for i in range(r, 0, -1):
#     for j in range(1, i):
#         print("*", end=" ")
#     print()






#   1 
#   1 2 
#   1 2 3 
#   1 2 3 4 
#   1 2 3 4 5 



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





# ----------

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
#     for j in range(i+1):
#         print(" ", end=" ")
#     for j in range(i, n):
#         print("*", end=" ")
#     for j in range(i, n-1):
#         print("*", end=" ")
#     print()



# -----------  OR



# n=7
# for i in range(n):
#     for j in range(i, n):
#         print(" ", end=" ")
#     for p in range(i+1):
#         print("*", end=" ")
#     for q in range(i):
#         print("*", end=" ")
#     print()
# for i in range(n):
#     for j in range(i+2):
#         print(" ", end=" ")
#     for k in range(i, n-2):
#         print("*", end=" ")
#     for o in range(i, n-1):
#         print("*", end=" ")
#     print()

# ----------






#   * * * * * * * * * * * * * * * * 
#   *                             *
#   *                             *
#   *                             *
#   *                             *
#   *                             *
#   *                             *
#   *                             *
#   *                             *
#   *                             *
#   *                             *
#   *                             *
#   *                             *
#   *                             *
#   *                             *
#   * * * * * * * * * * * * * * * * 


# user_input = int(input("Enter the number for your ring = "))

# for i in range(1, user_input+1):
#     if (i == 1 or i == user_input):
#         print("* " * user_input, end="")
#     else:
#         print("* ", end="")
#         print("  "* (user_input-2), end="")
#         print("*", end="")
#     print()