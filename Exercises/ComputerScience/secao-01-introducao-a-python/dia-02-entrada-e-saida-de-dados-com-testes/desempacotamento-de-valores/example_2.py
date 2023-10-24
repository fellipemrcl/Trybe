with open("file.txt", "w") as file:
    file.write("Fellipe\n")
    file.write("Marcel")

with open("file.txt", "r") as file:
    content = file.read()
    print(content)
