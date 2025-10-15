import pandas as pd

########. Series in Pandas  ########

data = [192, 23, 42]

s = pd.Series(data, index=["A", "S", "O"])
s.loc["G"] = 323

print(pd.Series(s))
print(s.iloc[2])
print(s[s > 33])
print(pd.__version__)
