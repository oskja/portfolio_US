import pandas as pd

data = {
    "sample": [1, 2, 3, 4],
    "value": [10, 20, 15, 30]
}

df = pd.DataFrame(data)

print("Mean:", df["value"].mean())
print("Max:", df["value"].max())