import pandas as pd


##########.  DataFrames in Pandas  ##########


data = {
    "Name" : ["Fahad", "Hamza", "Khabib", "Razaq"],
    "Age"  : [29, 23, 41, 19],
    "Room"  : [3, 2, 1, 5]
}

df = pd.DataFrame(data, index=["P1", "P2", "P3", "P4"])
df["Job"]= ["Carpainter", "Plumber", "Shoemaker", "BlackSmith"]

new_row = pd.DataFrame([{"Name": "Mughal", "Age": 32, "Room": 8, "Job": "SuperStar"},
                        {"Name": "Rookie", "Age": 19, "Room": 7, "Job": "Engineer"}], index=["P5", "P6"])
df = pd.concat([df, new_row])

print(df)