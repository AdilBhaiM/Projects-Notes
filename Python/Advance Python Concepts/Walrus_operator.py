# Using walrus operator ----- Assignment and condition in on line.... You can make this list dynamic for real time scenarios!!!!!!


if (n := int(len([1, 2, 3]))) > 3:
    print(f"List is too long ({n} elements, expected <= 3)")

# Output: List is too long (5 elements, expected <= 3)