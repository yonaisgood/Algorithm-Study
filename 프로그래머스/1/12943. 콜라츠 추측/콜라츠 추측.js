function solution(num) {
    let answer = 0;
    
    function collatz(calNum) {
        if (calNum === 1) return answer;
        answer += 1;
        if (answer > 500) return -1;
        if (calNum % 2 === 0) {
            return collatz(calNum / 2);
        } else {
            return collatz((calNum * 3) + 1);
        }
    }
    
    return collatz(num);
}