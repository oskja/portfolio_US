def predict(feature):
    if sum(feature) > 1:
        return "Dog"
    return "Cat"