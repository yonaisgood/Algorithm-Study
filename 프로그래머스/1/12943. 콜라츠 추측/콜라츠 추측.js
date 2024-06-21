function solution(num) {
    let answer = 0
    
    function collatzNum(number){
        if(number === 1) return answer
        answer += 1
        if(answer > 500) return -1;
        if(number%2 === 0) return collatzNum(number/2)
        if(number%2 !== 0) return collatzNum(number * 3 + 1)
    }
    
    return collatzNum(num)
}