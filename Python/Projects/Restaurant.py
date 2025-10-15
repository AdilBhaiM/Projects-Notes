#Restaurant

Menu = {
    'Pasta': 50,
    'Burger': 60,
    'Pizza': 80,
    'Mango Juice': 40,
    'Coffee': 30
}

orderTotal = 0

print("Welcome to Python Restaurant")

print("Our Menu")

print("Pasta: 50\nBurger: 60\nPizza: 80\nMango Juice: 40\nCoffee: 30")



item_1 = input("Please select the item you want to order: ").strip().capitalize()


while item_1 not in Menu:
        print(f"Ordered item {item_1} is not available yet.")
        item_1 = input("Please select the item you want to order: ").strip().capitalize()
else:
    orderTotal += Menu[item_1]
    print(f"{item_1} has been added to your order.")

anotherItem = input("Do you want to order another item (Yes/No): ").strip().capitalize()
# for anotherItem == "Yes:"
if anotherItem == "Yes":
    item_2 = input("Please select the item you want to order: ").strip().capitalize()
    while item_2 not in Menu:
        print(f"Ordered item {item_2} is not available yet.")
        item_2 = input("Please select the item you want to order: ").strip().capitalize()
    else:
        orderTotal += Menu[item_2]
        print(f"{item_2} has been added to your order.")
        

print(f"Your total is {orderTotal}")

# a = input("Enter a number:\n" )
# print(type(a))


# print(type(b))
# b = int(a)