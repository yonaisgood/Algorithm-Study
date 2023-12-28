function solution(a, b) {
    let answer = 0;
    switch(true){
        case a % 2 != 0 && b % 2 != 0:
            answer = a*a + b*b; break

        case a % 2 != 0 || b % 2 != 0:
            answer = 2 * (a + b); break

        case a % 2 == 0 && b % 2 == 0:
            answer = Math.abs(a-b); break
} 
    return answer;
    }
    
