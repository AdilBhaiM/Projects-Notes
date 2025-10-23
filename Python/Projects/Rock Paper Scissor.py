import random

choices = {
    "rock": 0,
    "paper": 1,
    "scissor": 2
}

computer_Choice = random.choice(list(choices.keys()))
# print(computer_Choice)

print()
print("<< -------------------------------- >>")
print()
print("Welcome to Rock, Paper and Scissor Game.")

while True:
    print()
    your_choice = input("Enter your choice (rock, paper and scissor) (Leave Empty to exit) = ")
    if (your_choice not in list(choices.keys()) and your_choice != ''):
        print()
        print(f"{your_choice} is not in choices")
    elif(your_choice == ''):
        print()
        print("<< ------------  See you!  -------------- >>")
        print()
        break
    elif (your_choice in list(choices.keys()) and your_choice == computer_Choice):
        print()
        print(f"Ops! I chose {computer_Choice}")
        print()
        print("<< ------------  It's Draw!  -------------- >>")
        print()
        break
    else:
        if (choices[your_choice] == 0 and choices[computer_Choice] == 1):
            print()
            print(f"Hahahah! I chose {computer_Choice}")
            print()
            print("<< ------------  You Loss!  -------------- >>")
            print()
            break
        elif (choices[your_choice] == 0 and choices[computer_Choice] == 2):
            print()
            print(f"AHHH! I chose {computer_Choice}")
            print()
            print("<< ------------  You Win!  -------------- >>")
            print()
            break
        elif (choices[your_choice] == 1 and choices[computer_Choice] == 0):
            print()
            print(f"AHHH! I chose {computer_Choice}")
            print()
            print("<< ------------  You Win!  -------------- >>")
            print()
            break
        elif (choices[your_choice] == 1 and choices[computer_Choice] == 2):
            print()
            print(f"Hahahah! I chose {computer_Choice}")
            print()
            print("<< ------------  You Loss!  -------------- >>")
            print()
            break
        elif (choices[your_choice] == 2 and choices[computer_Choice] == 0):
            print()
            print(f"Hahahah! I chose {computer_Choice}")
            print()
            print("<< ------------  You Loss!  -------------- >>")
            print()
            break
        elif (choices[your_choice] == 2 and choices[computer_Choice] == 1):
            print()
            print(f"AHHH! I chose {computer_Choice}")
            print()
            print("<< ------------  You Win!  -------------- >>")
            print()
            break
        else:
            print("Somthing is not good!")