def func(x):
    if x <=100:
        return x+10
    else:
        return func(func(x/5))

print(func(200))