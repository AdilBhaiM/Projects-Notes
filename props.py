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






#######################   Small task using function and loops -- Main work is to learn Functions  #######################



#  Ask for get start
#  Choose the number according to the given values in list [1, 2, 3, 4]
#  Make the list and match it to the index of the maths.
#  Ask for two numbers to calculate them with each other
#  After asking the numbers ask for possible answers and match it with the original
#  After matching it with the original, you have to tell the user whether the answer is right or wrong?
#  Then move onto the next step and repeat the same process.



methods = {
    "multiplication": "*",
    "addition": "+",
    "subtraction": "-",
    "division": "/",
    "square_root": "^",
    "boolean(is_equal)": "="}



while True:
    i = 0

    ########  Asking from the user that if he do want to proceed or not?
    while True:
        can_start = input("Do you want to Start calculator (y or n) = ")
        if can_start.lower() == "y":
                #####  Telling the user to write the keywords for the maths i.e: Enter 1 for addition etc.
            methods_len = len(methods)
            n = 0
            while n < methods_len:
                print(f"Enter {n + 1} for {list(methods.keys())[n]}")
                n += 1
            break
        elif can_start.lower() == "n":
            print("Thank you for answering, Have a nice day!")
            i = 1
            break
        else:
            print("Answer is not appropriate, please reply (y or n)")
    #######  Asking to the user for how many calculation do you want and which one?
    indices = []
    while i <= 0:
        no_calculations = int(input("How many calculations you want to do? = "))
        ####### About this range indexing can be manage esaily
        for i in range(no_calculations):
            def indexing():
                my_index = int(input(f"Enter code of your calculation # {i+1} = "))
                if my_index >= len(methods):
                    print("Not an option!")
                    indexing()
                else:
                    indices.append(my_index)
            indexing()
        print(indices)
        print(f"You have selected these values")
        for u in indices:
            print(f"No. {u} : {list(methods.keys())[u]}")
        for score in methods.values():
            if 






        break
    break







        # print(indices)
        # idx_len = len(indices)
        # o = 0
        # while o < idx_len:
        #     h = key_list[0]
        #     if metho
            
            
            






    # for i in my_index:
    #     if not Possible_methods[i-1]:
    #         print("Please enter correct numbers")
    #         break













    

