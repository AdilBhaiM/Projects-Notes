# In this file, i am going to write code about the project of roll the dice and in this project, i am going to add a functionality that 
# 1. Firstly, the terminal ask the number of players going to play.
# 2. Secondly, when user the input the number of players are going to play, the terminal will tell the user to right somthing to roll for 1st person.
# 3. After that, the terminal will add up the numbers that the person 1 got.
# 4. Lastly, the process will goes same for other users (Number of users depends upon the number of players playing).
# That person will be announce as winner whose score first cross or equal to the number 50.

import random


# PlayersScore = {}

# Players = int(input("Enter the total numbers of players = "))

# for i in range(Players):
#     PlayersScore[f'Player {i+1}'] = []

# min_value = 1
# max_value = 6

##################       Main Code # 1       ###################

# winner = None
# while winner is None:
#     for key, value in PlayersScore.items():

#         Command = int(input(f'Write somthing to roll the dice for {key} = '))
#         dice_number = random.randint(min_value, max_value)
#         print(f"{key} got {dice_number}")
#         PlayersScore[key].append(dice_number)
#         if sum(PlayersScore[key]) >= 50:
#             score = sum(PlayersScore[key])
#             winner = key
#             print(f"{key} is the winner with the total of the score {sum(PlayersScore[key])}")



    
# print(f"{key}: {value} (Total: {sum(value)})")


##################       Main Code # 2      ###################

from numpy import *

def roll():
    min_num = 1
    max_num = 6
    my_number = random.randint(min_num, max_num)

    return my_number

while True:
    Total_players = int(input("Enter how many players are going to play(2 - 4) = "))
    if 2 <= Total_players <= 4:
        break
    else:
        print("Enter the number between (2 - 4)")

Scores = zeros(Total_players, dtype=int)

current_idx = 0
win_num = 25
do_break = 0
while max(Scores) < win_num:
    print(1)
    for player_idx in range(Total_players):
        print(player_idx + 1, " turn")
        if do_break == 1:
            break
        while True:
            Should_roll = str(input("Could you want to roll the dice (y) = "))
            if Should_roll.lower() != "y" and Should_roll.lower() != "n":
                print("write y or n")
            if Should_roll.lower() != "y" and Should_roll.lower() == "n":
                break
            if Should_roll.lower() == "y" and Should_roll.lower() != "n":
                current_idx = 0
                num = roll()
                current_idx += num
                print(f"You rolled the value ", current_idx, "\n")
                print(f"Your score is ", current_idx, "\n")
                
                break
        Scores[player_idx] += current_idx
        print(Scores)
    print("Total score is ", Scores[player_idx])






    



















# print(PlayersScore)






# print("{1} {0}".format(20, 30))
# print("{name}! you should work hard and dont be {mode}".format(name="Adil", mode = "distracted"))
