def selectionSort(lst):
    # 리스트의 길이에서 하나 뺀만큼 반복 => 가장 작은 숫자 하나가 정해지면 그 곳은 안봐도 됭까
    iters = len(lst) - 1
    for iter in range(iters):
        #현재 인덱스가 최소 값의 인덱스라고 가정하고 시작합니다.
        minimum = iter
        # 1번째 부터 끝까지 반복할건데 현재 인덱스의 값이 최솟값보다 작니? 
        for cur in range(iter + 1, len(lst)):
            if lst[cur] < lst[minimum]:
                # 작다면 최솟값을 현재 값으로 바꾸자
                minimum = cur
        # 만약 최솟값의 인덱스가 현재 인덱스와 다르다면 자리를 바꿉니다. 
        if minimum != iter:
            lst[minimum], lst[iter] = lst[iter], lst[minimum]
            
    return lst