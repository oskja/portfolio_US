def predict(feature):
    score = sum(feature)

    if score > 1:
        return "Dog"
    else:
        return "Cat"

print(predict([0.8, 0.5]))