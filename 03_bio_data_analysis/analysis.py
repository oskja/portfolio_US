import pandas as pd

df = pd.read_csv("dataset.csv")

print("Average value:", df["value"].mean())
print("Max:", df["value"].max())