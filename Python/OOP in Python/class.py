# -------- Classes

# class Bird:
#     long = 299
#     short = 50
#     def __init__(self): # ---------- Methods start and end with "Underscores" called as 'DUNDER' -------------
#         print("Hello")
#     def sound(self):
#         print("Birds make sound.")
#     @staticmethod
#     def hello():
#         print("Hello Here")

# bird1 = Bird()
# bird1.sound()
# bird1.hello()
# bird1.short = 3
# print(bird1.short)
# print(Bird.short)


class Frontend_Developer:
    name = "Hari"
    language = "Javascript"
    def __init__(self):
        print("I am a Frontend_Developer")
    def show_f(self):
        print(f"My language name is {self.language} and my name is {self.name}")

class Backend_Developer(Frontend_Developer):
    name = "Pari"
    language = "Python"
    def __init__(self):
        super().__init__()
        print("I am a Backend_Developer")
    def show_b(self):
        print(f"My language name is {self.language} and my Name is {self.name}")

class Project_Manager():  # The Parent Classes must be in sequence by you choice whether you want to pick the attributes (which are overlapping among classes) of 1st class or not?
    name = "Cheri"
    company = "Microsoft"
    @staticmethod
    def static(self):
        print(f"{self} This is a static method")
    def __init__(self):
        super().__init__()
        print(f"I am a Project_Manager {self.company}")
    @classmethod
    def show_p(self, greetings):
        print(f"{greetings},My company name is {self.company} and my Name is {self.name}")



# a = Frontend_Developer() # ----- The dunder method will executes right after creating an instance!!!
# b = Backend_Developer()
c = Project_Manager()
# a.show_f()
# b.show_f()
c.name = "Kari"
c.show_p("Hiii!!")
c.static("asd")