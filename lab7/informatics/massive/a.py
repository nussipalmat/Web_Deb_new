n = int(input())
numbers = input().split(' ')

for i in range(0, n):
    if i % 2 == 0:
        print(numbers[i], end = " ")
