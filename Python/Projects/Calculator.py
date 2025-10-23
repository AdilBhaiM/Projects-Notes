#######################   Small task using function and loops -- Main work is to learn Functions  #######################


#  Ask for get start
#  Choose the number according to the given values in list [1, 2, 3, 4]
#  Make the list and match it to the index of the maths.
#  Ask for two numbers to calculate them with each other
#  After asking the numbers ask for possible answers and match it with the original
#  After matching it with the original, you have to tell the user whether the answer is right or wrong?
#  Then move onto the next step and repeat the same process.


from numpy import *
from functools import reduce
from math import sqrt



def get_valid_input(user_input, is_int):
    try:
        # Try to convert input to an integer
        if is_int == "1":
            user_input = int(user_input)
        return user_input  # Return the valid input if conversion is successful
    except ValueError:
        # Handle the error if the input is not a valid integer
        print("Error: Invalid input. Please enter a valid input.")
        print()
        return None




methods = {
    "addition": "+",
    "multiplication": "*",
    "subtraction": "-",
    "division": "/",
    "square_root": "^",
    "boolean(is_equal)": "=="}

def SimpleMath(symbol, Keyword):
    while True:
        print()
        if symbol == "==":
            print("Please Enter an Even number because this method will check the numbers in pairs. It will check the first two numbers and then the sencond two and so on.")
        adding_len = input(f"How many numbers do you want to {Keyword} = ")
        add_length = get_valid_input(adding_len, 1)
        if add_length <= 1:
            print()
            print("Please write a possible number")
        else:
            break
    print()
    nums = []
    print(f" E.g : \n\t1st Number {symbol} 2nd Number = Answer\n")
    for ind in range(add_length):
        print()
        num = int(input(f"Enter Number {ind+1} = "))
        nums.append(num)
    # u = 0
    # for inc in nums:
    #     u += inc
    if symbol == "+":
        print("Your Answer is ", reduce(add, nums))
        print()
        
    elif symbol == "-":
        print()
        print("Your Answer is ", reduce(subtract, nums))
        
    elif symbol == "*":
        print()
        print("Your Answer is ", reduce(multiply, nums))

    elif symbol == "/":
        print()
        print("Your Answer is ", reduce(divide, nums))

    elif symbol == "^":
        print()
        print("Your Answer is ", list(map(sqrt, nums)))

    elif symbol == "==":
        print()
        print("Your Answer is ", reduce(equal, nums))
        
    
    print()
    # print("Your Answer is ", u)
    return u

calculations_num = 0
do_you = "y"

while True and do_you == "y":
    calculations_num = 0
    i = 0

    ########  Asking from the user that if he do want to proceed or not?
    while True:
        print()
        can_start = input("Do you want to Start calculator (y or n) = ")
        print()
        if can_start.lower() == "y":
                #####  Asking the user to write the keywords for the maths i.e: Enter 1 for addition etc.
            methods_len = len(methods)
            n = 0
            while n < methods_len:
                print(f"Enter {n + 1} for {list(methods.keys())[n]}")
                print()
                n += 1
            break
        elif can_start.lower() == "n":
            print("Thank you for answering, Have a nice day!")
            do_you = 'n'
            print()
            i = 1
            break
        else:
            print("Answer is not appropriate, please reply (y or n)")
            print()
    #######  Asking to the user for how many calculation do you want and which one?
    indices = []
    while i < 1:
        print()
        while True:
            print()
            no_calculations = input("How many calculations you want to do? = ")
            
            no_of_calculations = get_valid_input(no_calculations, 1)
            if no_of_calculations in range(methods_len+1):
                break
            else:
                print()
                print(f"Please write a number Between " , 1, " and ", methods_len)
        ####### About this range indexing can be manage esaily
        for k in range(no_of_calculations):
            def indexing():
                print()
                my_index = int(input(f"Enter code of your calculation # {k+1} = "))
                if my_index >= len(methods)+1:
                    print("Not an option!")
                    indexing()
                else:
                    indices.append(my_index-1)
            indexing()
        print()
        print(f"You have selected these values")
        print()
        for u in indices:
            print()
            print(f"No. {u+1} : {list(methods.keys())[u]}")





##################################   Update the code int his loop.....   #####################################

        # for symb in list(methods.values()):
        #     print(symb)
              
        for math in indices:
            q = list(methods.values())[math]
            print()
            if q == "+":
                SimpleMath(q, "Add")
                calculations_num += 1
            elif q == "-":
                SimpleMath(q, "Subtract")
                calculations_num += 1
            elif q == "*":
                SimpleMath(q, "Multiply")
                calculations_num += 1
            elif q == "/":
                SimpleMath(q, "Divide")
                calculations_num += 1
            elif q == "^":
                SimpleMath(q, "squareRoot")
                calculations_num += 1
            elif q == "==":
                SimpleMath(q, "Boolean")
                calculations_num += 1
        



##################################  |||||||||  ##################################


            # elif q == "*":
        while True and i < 1:
            print()
            replay = input("Do you want to do math again? (y or n) = ")
            print()
            if replay.lower() == "y":
                do_you = 'y'
                break
            elif replay.lower() == "n":
                print("Thanks for letting us help you.")
                i = 1
                do_you = 'n'
                break
            else:
                print("Not an option!")
    if do_you == 'y':
        print()
        print()
        continue
    else:
        print()
        print(f"You have done {calculations_num} Calculations")
        print()
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

