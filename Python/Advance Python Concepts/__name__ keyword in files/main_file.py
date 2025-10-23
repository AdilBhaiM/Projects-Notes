def myFunc():
    print("Hello World")


if __name__ == "__main__":
    # If this code is directly executed by running the file its present in
    print("We are directly running this code")


my_list = [1, 2, 3, 4, 5]

hello = [i+1 for i in my_list] # -------------> This is called List comprehension
print(hello)
print(hello)
print(hello)