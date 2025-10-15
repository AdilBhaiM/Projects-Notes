import pandas as pd


##########.  Read Files in Pandas  ##########

df = pd.read_csv("data.csv") ###### For Json File you just replace read_csv to read_json.
print(df)
print(df.to_string())