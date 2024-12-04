with open("./story.txt", "r") as f:
    story = f.read()

start_of_word = "<"
end_of_word = ">"
ind = 0

words = set()

for i, char in enumerate(story):
    if char == start_of_word:
        ind = i
    if char == end_of_word:
        word = story[ind: i+1]
        words.add(word)
        

for word in words:
    answer = input(f"Write a word to replace {word} :")
    story = story.replace(word, answer)

print(story)

