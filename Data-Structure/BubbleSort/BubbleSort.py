def bubbleSort(list):
    #최댓값을 구하는 알고리즘을 len(list) - 1 만큼 반복한다. 
    iters = len(list) - 1
    for iter in range(iters):
        #이미 구한 최댓값은 범위에서 제외한다. 
        wall = iters - iter
        for cur in range(wall):
            if list[cur] > list[cur+1]:
                list[cur], list[cur+1] = list[cur+1], list[cur]
        return list