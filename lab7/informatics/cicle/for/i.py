number = int(input())
cnt = 2
for i in range(2, number//2 + 1):
    if number % i == 0:
        cnt += 1
print(cnt)