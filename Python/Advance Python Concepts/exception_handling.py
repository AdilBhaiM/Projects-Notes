def practice():
    try:
        print(3/0)
    except SyntaxError as s:
        print(s)
    except: # ---------> Executes there is an error other than SyntaxError!!!!
        print("Cant divide with 0")
    else: # ---------> Executes when try is successfull and there is no error.
        return "Yeyy!! You win!"
    finally: # ---------> Executes whenever it renders (even if there is a return statement in the try, except or else if exceptional handling is in a function) no matter try is successfull or there is an error.
        print("Hello")


a = practice()
print(a)