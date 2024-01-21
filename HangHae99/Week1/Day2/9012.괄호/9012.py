T = int(input())

# T만큼 반복
for _ in range(T):
    # Stack 활용
    stack = []

    # 입력 문자열
    s = input()

    is_vps = True

    # str 순회
    for c in s:
        # c가 '('라면, stack에 추가
        if c == '(':
            stack.append(c)
        # c가 ')'라면,
        elif c == ')':
            # stack이 비어있지 않다면, '(' 팝 
            if stack:
                stack.pop()
            # stack이 비었다면, NO 출력
            else:
                is_vps = False
                break

    if not stack and is_vps:
        print('YES')
    elif stack or not is_vps:
        print('NO')