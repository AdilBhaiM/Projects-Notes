def todo():

    task = []
    print("---Welcome to your to do app---")
    totaltask = int(input("How many tasks do you want to add = "))


    for i in range(1, totaltask+1):
        TaskName = input(f"Task # {i} = ")
        task.append(TaskName)
    print(f"Toady's tasks are\n{task}")

    while True:
        operation = int(input("Enter 1 (To View all tasks)\nEnter 2 (To Add a new task)\nEnter 3 (To Update tasks)\nEnter 4 (To Delete existing task)\nEnter 5 (To Stop/Exit)\n= "))
        if operation == 1:
            print(task)
        elif operation == 2:
            anothertask = input("Enter task you want to add = ")
            task.append(anothertask)
        elif operation == 3:
            task_to_update = input("Enter task name you want to update = ")
            if task_to_update in task:
                new_value = input("Enter new task = ")
                task_ind = task.index(task_to_update)
                task[task_ind] = new_value
                print(f"Task {task_to_update} has been updated.")
            else:
                print(f"Task {task_to_update} does not exist.")

            task_to_del = input("Enter name of the task you want to del = ")
            del_index = task.index(task_to_del)
            del task[del_index]
            print(f"Task {task_to_del} has been deleted from your tasks.")
        elif operation == 5:
            print("Thanks")
            break
        else:
            print("Not an option!")

todo()