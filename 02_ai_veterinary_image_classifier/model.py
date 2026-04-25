from sklearn.linear_model import LogisticRegression
import numpy as np

# ダミーデータ（実務では画像特徴量）
X = np.array([[0.1, 0.2], [0.8, 0.9]])
y = [0, 1]

model = LogisticRegression()
model.fit(X, y)