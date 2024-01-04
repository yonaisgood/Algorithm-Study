def solution(s):
    answer = 0
    if s[0] == ')':
        return False
    
    for i in range(len(s)):
        if s[i] == '(':
            answer += 1
        elif s[i] == ')':
            answer -= 1 
            if answer < 0:
                return False
    
    return not answer