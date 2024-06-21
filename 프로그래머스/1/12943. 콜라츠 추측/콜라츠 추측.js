function solution(num) {
    let answer = 0;
    
    function collatz(calNum){
        if(answer > 500) return -1;
        if(calNum === 1) return answer;
        answer += 1
        calNum % 2 == 0? collatz(calNum / 2) : collatz((calNum * 3 ) + 1)
    }
    
    collatz(num)
    
    return answer > 499 ? -1 : answer;
}