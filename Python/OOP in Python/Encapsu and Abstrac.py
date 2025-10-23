# -----------> This is the example of encapsulation and abstraction. You hide the things and logic behind that is depending on the input.

# class Project_Manager():
#     name = "Cheri"
#     company = "Microsoft"
#     def show_p(self, greetings):
#         print(f"{greetings},My company name is {self.company} and my Name is {self.name}")
#     @property
#     def name(self):
#         return f"Here is my name {self.fname} and {self.lname}"
#     @name.setter
#     def change(self, value):
#         self.fname = value.split(" ")[0]
#         self.lname = value.split(" ")[1]

# c = Project_Manager()

# # c.name = "Kari"
# # c.show_p("Hiii!!")
# c.change = "Adil Anwar"
# print(c.change)



# -----------> Arithmetic operators between object instances -------->  This is also the example of encapsulation and abstraction. You hide the things and logic behind that is depending on the input.

# class Vector():

#     def __init__(self, x, y, z):
#         self.x = x
#         self.y = y
#         self.z = z

#     def __add__(instance_1, instance_2) :
#         obj = Vector((instance_1.x + instance_2.x), (instance_1.y+instance_2.y), (instance_1.z + instance_2.z))
#         # print("instance_1", instance_1)
#         # print("instance_2", instance_2)
#         return obj
    
#     def __mul__(instance_1, instance_2):
#         obj = Vector((instance_1.x * instance_2.x), (instance_1.y * instance_2.y), (instance_1.z * instance_2.z))
#         return obj

#     def __str__(self):
#         return f"THis is a Vector({self.x}, {self.y}, {self.z})"


# a = Vector(1, 2, 4)
# b = Vector(1, 2, 4)

# print()
# print(a*b)
# # print(a*b)
# print()
