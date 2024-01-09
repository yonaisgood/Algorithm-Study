from collections import deque

overtakinCars = 0;
n = int(input())
queList = deque()

for i in range(n*2):
    if i < n:
        queList.append(input())
    else:
        out = input()
        if out!= queList[0]:
            queList.remove(out)
            overtakinCars += 1
        else:
            queList.popleft()
print(overtakinCars)
                
    