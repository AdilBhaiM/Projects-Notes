import pandas as pd

df = pd.read_csv("data.csv")


# Drop Columns
# print(df.drop(columns=["Legendary", "No"]))  

# Drop rows with Empty data of that column
# print(df.dropna(subset=["Type2"]))  

# Drop rows with Empty data of that column
# print(df.fillna({"Type2": "None"}))  

# Fix Inconsistent Values

# df["Type1"] = df["Type1"].replace({"Grass" : "GRASS",
#                                    "Fire": "FIRE",
#                                    "Water": "WATER"})

# Standarize Text
# df["Name"] = df["Name"].str.lower()

# Fix Data Types
# df["Legendary"] = df["Legendary"].astype(bool)

# Remove Dulpicate Entiries
df = df.drop_duplicates()

print(df.to_string())