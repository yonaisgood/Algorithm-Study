import sys
n, m = map(int, sys.stdin.readline().split())
dic = {}

for i in range(n):
    url, pwd = sys.stdin.readline().rstrip().split()
    dic[url] = pwd

for i in range(m):
    print(dic[sys.stdin.readline().rstrip()])